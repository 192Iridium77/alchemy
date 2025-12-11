import Projects from "../../about/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Matt Martin",
  description: "Explore my software engineering projects with global and local impact.",
};

export default function ProjectsPage() {
  return (
    <div className="container pt-14 md:pt-22">
      <Projects />
    </div>
  );
}

