import { ReactNode } from "react";

type HeaderProps = {
  title: ReactNode;
  subContent?: ReactNode;
  aside?: ReactNode;
};

export default function HeaderWrapper({
  title,
  subContent,
}: HeaderProps) {
  return (
    <header className="flex flex-col md:w-1/3 w-full shrink-0 min-h-0">
      <h1 className="weathered-effect">{title}</h1>
      {/* <span className="blinking-text">|</span> Not sure if I want this */}
      {subContent && <div className="flex-1 min-h-0 overflow-y-auto">{subContent}</div>}
    </header>
  );
}
