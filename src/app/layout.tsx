"use client";
import "./globals.css";
// import 'tailwindcss/tailwind.css'
import Navbar from "./components/nav-bar/navBar";
import ThemeRegistry from "./ThemeRegistry";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import Image from "next/image";
import EyeAnimation from "./components/eyeAnimation/EyeAnimation";

const eldritch = localFont({
  src: "./fonts/Eldritch_font-Regular.ttf",
  variable: "--font-eldritch",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define routes to exclude layout UI
  const noLayoutRoutes = ["/"];
  const shouldHideLayout = noLayoutRoutes.includes(pathname);
  return (
    <html lang="en">
      <head>
        {/* For inline script information: https://nextjs.org/docs/messages/inline-script-id */}
      </head>
      <body className={`${eldritch.variable} flex w-full h-screen`}>
        {shouldHideLayout ? (
          children
        ) : (
          <ThemeRegistry>
            <div className="flex flex-col px-5 h-full w-full md:overflow-hidden">
              <div className="flex flex-row shrink-0">
                <div className="weathered-effect">
                  <EyeAnimation />
                </div>
                <Navbar />
              </div>
              {children}
              <Toaster />
            </div>
          </ThemeRegistry>
        )}
      </body>
    </html>
  );
}
