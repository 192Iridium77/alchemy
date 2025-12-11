import About from "../about/Index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matt Martin | Software Engineer",
  description:
    "Explore my software engineer portfolio showcasing projects with global and local impact. With expertise in Full Stack software development, I bring a blend of creativity and technical prowess to every project. Dive into a collection of my work that reflects a commitment to rapid prototyping, clean code, user-centric design, and a relentless pursuit of excellence in the world of software and business.",
};

export default function Home() {
  return (
    <>
      <About />
    </>
  );
}
