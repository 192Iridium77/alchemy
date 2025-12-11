import React from "react";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Summary from "./Summary";
import WorkWithMe from "./WorkWithMe";
import Companies from "./Companies";

export default function About() {
  return (
    <>
      <Summary />
      <div className="container mt-12">
        <Companies />
        <Projects />
      </div>
    </>
  );
}
