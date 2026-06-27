import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = { title: "Projects" };

export default function Page() {
  return <ProjectsContent />;
}
