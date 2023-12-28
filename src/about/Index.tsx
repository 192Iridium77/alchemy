import React from "react";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Summary from "./Summary";
import WorkWithMe from "./WorkWithMe";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="container mt-12">
      <Helmet>
        <title>Matt Martin | Software Engineer</title>
        <meta
          name="description"
          content="Explore my software engineer portfolio showcasing projects with global and local impact. With expertise in Full Stack software development, I bring a blend of creativity and technical prowess to every project. Dive into a collection of my work that reflects a commitment to rapid prototyping, clean code, user-centric design, and a relentless pursuit of excellence in the world of software and business."
        ></meta>
      </Helmet>
      <Summary />
      <WorkWithMe />
      <Certifications />
      <Projects />
    </div>
  );
}
