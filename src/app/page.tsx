import About from "./about/Index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matt Martin",
  description:
    "Portfolio showcasing projects with global and local impact. A blend of creativity and technical expertise in rapid prototyping, clean code, and user-centric design.",
  openGraph: {
    title: "Matt Martin",
    description:
      "Explore my portfolio showcasing projects with global and local impact. With technical expertise, I bring a blend of creativity and technical prowess to every project.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matt Martin Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Martin",
    description:
      "Explore my portfolio showcasing projects with global and local impact.",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <About />
    </>
  );
}
