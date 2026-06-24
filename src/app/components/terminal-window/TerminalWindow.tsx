"use client";

import Image from "next/image";
// import WindowComponent from "react-flexi-window";
import { useRef, useState } from "react";
import "./styles.css";
import GithubStats from "../about-sections/GithubStats";

export default function TerminalWindow() {
  // const defaultWidth = 460;
  // const defaultHeight = 320;
  // const minimizedHeight = 52;
  const windowContainerRef = useRef<HTMLDivElement | null>(null);

  // const [coordinates, setCoordinates] = useState<{
  //   latitude: number | null;
  //   longitude: number | null;
  // }>({
  //   latitude: null,
  //   longitude: null,
  // });
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);
  const [minimize, setMinimize] = useState(false);
  // const [windowPosition, setWindowPosition] = useState({ x: 50, y: 50 });
  // const [windowSize, setWindowSize] = useState({
  //   width: defaultWidth,
  //   height: defaultHeight,
  // });

  const captureWindowState = () => {
    const windowElement =
      windowContainerRef.current?.querySelector('[role="dialog"]');

    if (!windowElement) {
      return;
    }

    // const { width, height } = windowElement.getBoundingClientRect();
    // // if (!minimize) {
    // //   setWindowSize({ width, height });
    // // }

    const transform = window.getComputedStyle(windowElement).transform;

    if (!transform || transform === "none") {
      return;
    }

    // const matrix = new DOMMatrixReadOnly(transform);
    // setWindowPosition({ x: matrix.m41, y: matrix.m42 });
  };

  const handleMinimize = () => {
    captureWindowState();
    setMinimize(!minimize);
  };

  // const handleGetLocation = () => {
  //   if (!navigator.geolocation) {
  //     setError("Geolocation is not supported by your browser.");
  //     return;
  //   }
  //   setLoading(true);
  //   setError(null);
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setCoordinates({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //       setLoading(false);
  //     },
  //     (err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     },
  //   );
  // };

  // useEffect(() => {
  //   handleGetLocation();
  // }, []);

  return (
    // <div ref={windowContainerRef}>
    //   <WindowComponent
    //     key={minimize ? "minimized" : "expanded"}
    //     boundary={true}
    //     w={windowSize.width}
    //     h={minimize ? minimizedHeight : windowSize.height}
    //     minW={320}
    //     minH={minimize ? minimizedHeight : 180}
    //     x={windowPosition.x}
    //     y={windowPosition.y}
    //   >
    //     <div className="flex h-full w-full flex-col bg-black/80">
    //       <div className="flex flex-row justify-between border px-5 py-2 hover:cursor-move">
    //         <p className="my-1 indent-0">SYSTEM STATUS</p>
    //         <button onClick={handleMinimize} className="border-0 m-0 p-0">
    //           <Image
    //             src="/minimize.svg"
    //             alt="Minimise button"
    //             className="white w-5"
    //             width={10}
    //             height={10}
    //           />
    //         </button>
    //       </div>
    //       <div
    //         className={
    //           minimize
    //             ? "h-0 overflow-hidden"
    //             : "flex-1 overflow-y-auto border p-5"
    //         }
    //       >
    //         <p className="indent-0">
    //           CONNECTION: <span className="blinking-text">STABLE</span>
    //         </p>
    //         <p className="indent-0">
    //           {/* LOCATION:{" "}
    //           {coordinates.latitude && coordinates.longitude
    //             ? `${coordinates.latitude}, ${coordinates.longitude}`
    //             : "Not available"} */}
    //           Location: Unknown
    //         </p>
    //         <p className="indent-0">TIME: </p>
    //       <GithubStats />
    //       </div>
    //     </div>
    //   </WindowComponent>
    // </div>
    <div className="flex h-1/3 w-full flex-col bg-black/80 overflow-hidden">
      <div className="flex flex-row justify-between border px-5 py-2">
        <p className="my-1 indent-0">SYSTEM STATUS</p>
        <button onClick={handleMinimize} className="border-0 m-0 p-0">
          <Image
            src="/minimize.svg"
            alt="Minimise button"
            className="white w-5"
            width={10}
            height={10}
          />
        </button>
      </div>
      <div
        className={
          minimize ? "h-0 overflow-hidden" : "flex-1 overflow-y-auto border p-5"
        }
      >
        <p className="indent-0">
          CONNECTION: <span className="blinking-text">STABLE</span>
        </p>
        <p className="indent-0">
          {/* LOCATION:{" "}
              {coordinates.latitude && coordinates.longitude
                ? `${coordinates.latitude}, ${coordinates.longitude}`
                : "Not available"} */}
        </p>
        <GithubStats />
      </div>
    </div>
  );
}
