"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import ThemeRegistry from "../ThemeRegistry";
import Navbar from "./nav-bar/navBar";
import EyeAnimation from "./eyeAnimation/EyeAnimation";
import ForbiddenText from "./forbiddenText/ForbiddenText";
import { Toaster } from "sonner";
import Image from "next/image";

export default function ConditionalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/"];
  const shouldHideLayout = noLayoutRoutes.includes(pathname);

  if (shouldHideLayout) return <>{children}</>;

  return (
    <ThemeRegistry>
      <header className="flex flex-row shrink-0 sticky top-0 z-50">
        <div className="flex items-center weathered-effect">
          <EyeAnimation />
        </div>
        <Navbar />
      </header>
      <main className="w-full px-5 md:flex-row md:flex-1 md:min-h-0 md:overflow-hidden">
        <div className="page-wrapper">{children}</div>
        <div className="ml-auto hidden shrink-0 md:flex">
          <ForbiddenText orientation="vertical" />
          {/* <Image src="/Vertical_script.svg" alt="Techno eldritch text" width={86} height={679}/> */}
        </div>
      </main>
      <footer className="text-center p-2">
        <div className="mt-2 flex justify-center md:hidden">
          <ForbiddenText orientation="horizontal" />
          {/* <Image src="/Horizontal_script.svg" alt="Techno eldritch text" width={679} height={86} className="scale-75"/> */}
        </div>
        <Toaster />
      </footer>
    </ThemeRegistry>
  );
}
