import { Metadata } from "next";
import RootContent from "./RootContent";

export const metadata: Metadata = {
  title: "David Adam | Portfolio",
  description: "Full stack developer portfolio",
};

export default function Page() {
  return <RootContent />;
}
