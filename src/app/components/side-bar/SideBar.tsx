'use client';

import "./styles.css";
import Image from "next/image";

type SideBarProps = {
  symbol: string;
  onClick: () => void;
}

export default function SideBar({ symbol, onClick }: SideBarProps) {
  return (
    <div className="flex flex-row justify-start items-center">
        <button onClick={onClick} className="weathered-effect">
          <Image src={symbol} className="purple w-12 hover:light-purple" alt="Nav symbols" width={10} height={10}/>
        </button>
    </div>
  );
}
