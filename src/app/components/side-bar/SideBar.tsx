'use client';

import "./styles.css";

type SideBarProps = {
  symbol: string;
  onClick: () => void;
}

export default function SideBar({ symbol, onClick }: SideBarProps) {
  return (
    <div className="flex flex-row justify-start items-center weathered-effect">
      <div>
        <button onClick={onClick}>
          <img src={symbol} className="purple w-12" />
        </button>
      </div>
    </div>
  );
}
