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
    <div className="flex flex-col md:w-1/3 w-full shrink-0">
      <h1 className="weathered-effect">{title}</h1>
      {subContent && <div>{subContent}</div>}
    </div>
  );
}
