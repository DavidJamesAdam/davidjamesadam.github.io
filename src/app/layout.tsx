"use client";
import "./globals.css";
// import 'tailwindcss/tailwind.css'
import Navbar from "./components/nav-bar/navBar";
import ThemeRegistry from "./ThemeRegistry";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import EyeAnimation from "./components/eyeAnimation/EyeAnimation";
import ForbiddenText from "./components/forbiddenText/ForbiddenText";

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
      <body className={`${eldritch.variable} flex flex-col w-full h-screen`}>
        {shouldHideLayout ? (
          children
        ) : (
          <ThemeRegistry>
            <header className="flex flex-row shrink-0">
              <div className="flex items-center weathered-effect">
                <EyeAnimation />
              </div>
              <Navbar />
            </header>
            <main className="w-full px-5 md:flex-row md:flex-1 md:min-h-0 md:overflow-hidden">
              <div className="page-wrapper">{children}</div>
              <div className="ml-auto hidden shrink-0 md:flex">
                <ForbiddenText orientation="vertical" />
              </div>
            </main>
            <footer className="text-center p-2">
              <div className="mt-2 flex justify-center md:hidden">
                <ForbiddenText orientation="horizontal" />
              </div>
              <Toaster />
            </footer>
          </ThemeRegistry>
        )}
      </body>
    </html>
  );
}
