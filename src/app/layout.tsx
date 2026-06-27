import "./globals.css";
import localFont from "next/font/local";
import ConditionalLayout from "./components/Pathname";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "David Adam | Full Stack Developer",
    template: "%s | David Adam",
  },
  description:
    "Portfolio of David Adam, a full stack developer specializing in React and FastAPI",
  authors: [{ name: "David Adam" }],
  creator: "David Adam",
  keywords: [
    "David Adam",
    "full stack developer",
    "Next.js",
    "React",
    "FastAPI",
    "RESTful",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    url: "https://voidprotocol.dev",
    title: "David Adam | Full Stack Developer",
    description: "...", //TODO
    siteName: "David Adam Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }], //TODO
  },
  alternates: {
  canonical: "https://voidprotocol.dev",
},
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
