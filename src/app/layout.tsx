"use client";
import "./globals.css";
// import 'tailwindcss/tailwind.css'
import Navbar from "./components/nav-bar/navBar";
import ThemeRegistry from "./ThemeRegistry";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import Image from "next/image";

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
            {/* <div className="flex flex-col border-r border-gray-500 weathered-effect">
            <p className="w-20">A</p>
          </div> */}
            <div className="flex flex-col px-5 h-full w-full md:overflow-hidden">
              <div className="flex flex-row weathered-effect shrink-0">
                <Image
                  src="/The_Watcher.svg"
                  className="purple w-24 py-5"
                  alt="Eldritch eye"
                  width={10}
                  height={10}
                />
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
