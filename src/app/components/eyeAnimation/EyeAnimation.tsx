"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const eyeFrames = [
  "/eye/eye_path31.svg",
  "/eye/eye_path32.svg",
  "/eye/eye_path33.svg",
  "/eye/eye_path34.svg",
  "/eye/eye_path35.svg",
  "/eye/eye_path36.svg",
];

interface EyeAnimationProps {
  size?: number;
  frameDuration?: number;
}

export default function EyeAnimation({
  size = 110,
  frameDuration = 60,
}: EyeAnimationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [frame, setFrame] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setFrame((current) => {
        if (isHovered) {
          return current < eyeFrames.length - 1 ? current + 1 : current;
        }

        return current > 0 ? current - 1 : current;
      });
    }, frameDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, frameDuration]);

  return (
    <div
      className="w-fit h-36"
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
            className="purple py-5"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}