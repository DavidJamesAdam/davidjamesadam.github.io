'use client';
import "./globals.css";
import Navbar from "./components/nav-bar/navBar";
import ThemeRegistry from "./ThemeRegistry";
import { usePathname } from "next/navigation";



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
      <body className="flex flex-row w-fit h-fit">
                {shouldHideLayout ? (
          children
        ) : (
        <ThemeRegistry>
          <div className="flex flex-col border-r border-gray-500 weathered-text">
            <p className="w-20">A</p>
          </div>
          <div className="px-5 w-full min-h-screen">
            <Navbar />
            {children}
          </div>
        </ThemeRegistry>
        )}
      </body>
    </html>
  );
}
