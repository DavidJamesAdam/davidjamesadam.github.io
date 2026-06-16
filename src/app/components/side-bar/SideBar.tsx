import "./styles.css";

interface SideBarProps {
  symbol: string;
}

export default function SideBar({ symbol }: SideBarProps) {
  return (
    <div className="flex flex-row justify-start items-center">
      <div>
        <button>
          <img src={symbol} className="purple w-12" />
        </button>
      </div>
    </div>
  );
}
