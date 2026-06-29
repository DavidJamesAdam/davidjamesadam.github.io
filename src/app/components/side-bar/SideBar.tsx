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
    <div className="flex flex-row justify-start items-center">
      <button
        onClick={onClick}
        className={`weathered-effect flex flex-col items-center justify-between text-[#894fad] hover:text-[#bc77e7] p-2 ${isActive ? "border rounded-md border-[#894fad] text-[#bc77e7]" : ""}`}
      >
        <Image
          src={symbol}
          className="w-12 hover:light-purple purple"
          // className={`w-12 hover:light-purple ${isActive ? "light-purple" : "purple"}`}
          alt={section}
          width={10}
          height={10}
        />
        <p>{section}</p>
      </button>
    </div>
  );
}
