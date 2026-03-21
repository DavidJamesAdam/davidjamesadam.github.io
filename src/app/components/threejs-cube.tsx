"use client";

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// // import GUI from "lil-gui";
// import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import React from "react";
// // import { initHandDetection } from './handDetection.js';

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
// import GUI from "lil-gui";

const ThreeScene: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // --- Three.js setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Remove any existing child canvases to avoid duplicate scenes (React strict-mode remounts)
    if (containerRef.current) {
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(renderer.domElement);

      const setSizeToContainer = () => {
        const el = containerRef.current;
        if (!el) return;
        const width = el.clientWidth || window.innerWidth;
        const height = el.clientHeight || window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      };

      // initial size
      setSizeToContainer();

      // observe container size changes
      const ro = new ResizeObserver(setSizeToContainer);
      if (containerRef.current) ro.observe(containerRef.current);
    }

    camera.position.z = 5;

    // --- Scene objects ---
    let selectedObject: THREE.Group | null = null;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const params = {
      width: 1,
      height: 1,
      depth: 1,
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1,
    };

    const geometry = new THREE.BoxGeometry(
      params.width,
      params.height,
      params.depth,
      params.widthSegments,
      params.heightSegments,
      params.depthSegments,
    );
    const cubeGroup = new THREE.Group();
    const solidMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const solidMesh = new THREE.Mesh(geometry, solidMaterial);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    solidMesh.userData.parent = cubeGroup;
    wireframeMesh.userData.parent = cubeGroup;
    cubeGroup.add(solidMesh);
    cubeGroup.add(wireframeMesh);
    scene.add(cubeGroup);

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const transformControls = new TransformControls(
      camera,
      renderer.domElement,
    );
    scene.add(transformControls.getHelper());

    // Disable OrbitControls while dragging with TransformControls
    transformControls.addEventListener("dragging-changed", (event) => {
      if (typeof event.value === "boolean") {
        controls.enabled = !event.value;
      }
    });

    // --- Animation loop ---
    let animationId: number | null = null;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    // --- Scene background ---
    scene.background = new THREE.Color("#c28e8e");

    // --- Selection logic ---
function selectObject(object: THREE.Group) {
  if (selectedObject === object) return;

  deselectObject();
  selectedObject = object;

  const mesh = object.children[0];

  if (mesh instanceof THREE.Mesh) {
    const material = mesh.material;

    if (
      material instanceof THREE.MeshBasicMaterial ||
      material instanceof THREE.MeshStandardMaterial ||
      material instanceof THREE.MeshPhongMaterial
    ) {
      material.color.set(0xff0000);
    }
  }

  transformControls.attach(object);
}
function deselectObject() {
  if (!selectedObject) return;

  const mesh = selectedObject.children[0];

  if (mesh instanceof THREE.Mesh) {
    const material = mesh.material;

    if (
      material instanceof THREE.MeshBasicMaterial ||
      material instanceof THREE.MeshStandardMaterial ||
      material instanceof THREE.MeshPhongMaterial
    ) {
      material.color.set(0x00ff00);
    }
  }

  transformControls.detach();
  selectedObject = null;
}
    function onMouseClick(event: MouseEvent) {
      // Use container-relative mouse coordinates
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouse.x = (x / rect.width) * 2 - 1;
      mouse.y = -(y / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(solidMesh);
      if (intersects.length > 0) {
        selectObject(intersects[0].object.userData.parent);
      } else {
        deselectObject();
      }
    }
    window.addEventListener("click", onMouseClick);

    // --- Keyboard shortcuts for transform modes ---
    function onKeyDown(event: KeyboardEvent) {
      switch (event.key.toLowerCase()) {
        case "w":
          transformControls.setMode("translate");
          break;
        case "e":
          transformControls.setMode("rotate");
          break;
        case "r":
          transformControls.setMode("scale");
          break;
      }
    }
    window.addEventListener("keydown", onKeyDown);

    // --- Resize handling ---
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    // --- Cleanup on unmount ---
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("click", onMouseClick);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", handleResize);
      // transformControls.removeEventListener(
      //   "dragging-changed",
      //   onDraggingChanged,
      // );

      // Remove renderer canvas
      if (
        containerRef.current &&
        renderer.domElement.parentNode === containerRef.current
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeScene;
