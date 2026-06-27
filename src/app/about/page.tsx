import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return <AboutContent />;
}
