"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import ThemeRegistry from "../ThemeRegistry";
import Navbar from "./nav-bar/navBar";
import EyeAnimation from "./eyeAnimation/EyeAnimation";
import ForbiddenText from "./forbiddenText/ForbiddenText";
import { Toaster } from "sonner";

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
        <div className="flex md:flex-row flex-col flex-1 w-fit min-h-0 md:overflow-hidden">{children}</div>
        <div className="ml-auto hidden shrink-0 md:flex">
          <ForbiddenText orientation="vertical" />
        </div>
      </main>
      <footer className="flex shrink-0 p-2 md:h-auto h-28">
        <div className="flex w-full md:hidden">
          <ForbiddenText orientation="horizontal" />
        </div>
        <Toaster />
      </footer>
    </ThemeRegistry>
  );
}
