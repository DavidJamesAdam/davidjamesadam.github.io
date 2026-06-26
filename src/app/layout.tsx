import "./globals.css";
import localFont from "next/font/local";
import ConditionalLayout from "./components/Pathname";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Adam | Portfolio",
  description: "...",
};

const eldritch = localFont({
  src: "./fonts/Eldritch_font-Regular.ttf",
  variable: "--font-eldritch",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* For inline script information: https://nextjs.org/docs/messages/inline-script-id */}
      </head>
      <body className={`${eldritch.variable} flex flex-col w-full h-screen`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
