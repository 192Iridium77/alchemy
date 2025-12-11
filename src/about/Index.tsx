import React from "react";
import Projects from "./Projects";
import { Hero } from "./Hero";
import Companies from "./Companies";

export default function About() {
  return (
    <>
      <Hero />
      <div className="container mt-12">
        <Companies />
        <Projects limit={3} />
      </div>
    </>
  );
}
