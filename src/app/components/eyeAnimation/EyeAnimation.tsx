"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const eyeFrames = [
  "/eye/Frame_1.svg",
  "/eye/Frame_2.svg",
  "/eye/Frame_3.svg",
  "/eye/Frame_4.svg",
  "/eye/Frame_5.svg",
  "/eye/Frame_6.svg",
];

interface EyeAnimationProps {
  size?: number;
  frameDuration?: number;
}

export default function EyeAnimation({
  size = 110,
  frameDuration = 15,
}: EyeAnimationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [frame, setFrame] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const idleIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef(0);

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // User controlled animation
  useEffect(() => {
    frameRef.current = frame;
  }, [frame]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isHovered) return;

    intervalRef.current = setInterval(() => {
      setFrame((current) =>
        current < eyeFrames.length - 1 ? current + 1 : current
      );
    }, frameDuration);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, frameDuration]);

  // Idle animation
  useEffect(() => {
    if (isHovered) return;

    function openEye(onDone: () => void) {
      idleIntervalRef.current = setInterval(() => {
        const current = frameRef.current;
        if (current < eyeFrames.length - 1) {
          setFrame(current + 1);
        } else {
          clearInterval(idleIntervalRef.current!);
          onDone();
        }
      }, frameDuration);
    }

    function closeEye(onDone: () => void) {
      idleIntervalRef.current = setInterval(() => {
        const current = frameRef.current;
        if (current > 0) {
          setFrame(current - 1);
        } else {
          clearInterval(idleIntervalRef.current!);
          onDone();
        }
      }, frameDuration);
    }

    function scheduleNextBlink() {
      const delay = randomIntFromInterval(100, 7000);
      idleTimeoutRef.current = setTimeout(() => {
        openEye(() => closeEye(() => scheduleNextBlink()));
      }, delay);
    }

    closeEye(() => scheduleNextBlink());

    return () => {
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
    };
  }, [isHovered, frameDuration]);

  return (
    <div
      className="w-fit h-36 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={frame}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.12 }}
        >
          <Image
            src={eyeFrames[frame]}
            alt="Animated eye opening"
            width={size}
            height={size}
            priority
            className="py-5"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
