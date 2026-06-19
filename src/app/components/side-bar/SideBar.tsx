"use client";

import "./styles.css";
import Image from "next/image";

type SideBarProps = {
  symbol: string;
  onClick: () => void;
  section: string;
};

export default function SideBar({ symbol, onClick, section }: SideBarProps) {
  return (
    <div className="flex flex-row justify-start items-center">
      <button onClick={onClick} className="weathered-effect flex flex-col items-center">
        <Image
          src={symbol}
          className="purple w-12 hover:light-purple"
          alt="Nav symbols"
          width={10}
          height={10}
        />
        {section}
      </button>
    </div>
  );
}
