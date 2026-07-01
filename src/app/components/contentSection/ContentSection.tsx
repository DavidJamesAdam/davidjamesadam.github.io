import { ReactNode } from "react";
import Image from "next/image";

interface ContentSectionProps {
  children: ReactNode;
}

export default function ContentSection({ children }: ContentSectionProps) {
  return (
    <section>
      <Image
        src="/Upper_left_border.svg"
        alt="Border svg"
        width={100}
        height={100}
        className="absolute"
      />
      <div className="flex flex-col flex-1 min-h-0 m-8 md:overflow-y-auto">{children}</div>
      <Image
        src="/Lower_right_border.svg"
        alt="Border svg"
        width={100}
        height={100}
        className="absolute right-1 bottom-1 pointer-events-none"
      />
    </section>
  );
}
