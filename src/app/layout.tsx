"use client";
import "./globals.css";
import Navbar from "./components/nav-bar/navBar";
import ThemeRegistry from "./ThemeRegistry";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import SideBar from "./components/side-bar/SideBar";

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
      <body className="flex w-full h-screen">
        {shouldHideLayout ? (
          children
        ) : (
          <ThemeRegistry>
            {/* <div className="flex flex-col border-r border-gray-500 weathered-effect">
            <p className="w-20">A</p>
          </div> */}
            <div className="flex flex-col px-5 min-h-screen w-full">
              <div className="flex flex-row weathered-effect">
                <img src="/The_Watcher.svg" className="purple w-24 py-5" />
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
