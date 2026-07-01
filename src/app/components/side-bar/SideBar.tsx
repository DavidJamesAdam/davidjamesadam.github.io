"use client";

import "./styles.css";
import Image from "next/image";

type SideBarProps = {
  symbol: string;
  onClick: () => void;
  section: string;
  isActive?: boolean;
};

export default function SideBar({
  symbol,
  onClick,
  section,
  isActive,
}: SideBarProps) {
  return (
    <button
      onClick={onClick}
      className={`weathered-effect flex flex-col items-center justify-center text-[#894fad] hover:text-[#bc77e7] ${isActive ? "border rounded-md border-[#894fad] text-[#bc77e7]" : ""}`}
    >
      <Image
        src={symbol}
        alt={section}
        width={50}
        height={50}
        className="purple"
      />

      <p>{section}</p>
    </button>
  );
}
