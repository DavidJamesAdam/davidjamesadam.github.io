import React, { ReactNode } from "react";

interface AboutCardsProps {
  title: string;
  children: ReactNode;
}

export default function AboutCards({ title, children }: AboutCardsProps) {
  return (
    <div className="flex flex-1 min-h-0 flex-col">
      <div className="shrink-0 mb-5">
        <h2 className="weathered-effect">{title}</h2>
      </div>
      <div className="flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}
