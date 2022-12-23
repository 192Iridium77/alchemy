import React from "react";

import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const navToMyProfile = () => {
    navigate("/about/matt");
  };

  return (
    <div className="container mt-16">
      <div>
        <div className="flex">
          <div className="w-6/12 pr-4">
            <div className="text-xl pb-4">Welcome to Alchemy Tech!</div>
            <div>
              The goal of <b>Alchemy Tech</b> is to build innovative tools that
              enhance education and foster creativity, worldwide.
            </div>
          </div>
          <div className="w-6/12 pl-4">
            <div
              className="bg-cover bg-no-repeat bg-center"
              style={{
                height: "300px",
                backgroundImage: `url(/images/education.avif)`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-xl py-12">Our Team</div>
        <div className="flex">
          <div className="w-2/12"></div>
          <div className="w-8/12 border-2 border-gray-100">
            <div className="flex w-full">
              <div
                className="w-6/12 bg-cover bg-no-repeat bg-center"
                style={{
                  height: "300px",
                  backgroundImage: `url(/images/me.jpg)`,
                }}
              ></div>
              <div className="w-6/12 p-4" onClick={navToMyProfile}>
                <div className="text-lg">Matt</div>
                <div className="tracking-wider uppercase pt-4">Founder</div>
                <div className="pt-4">
                  Matt is a Software Engineer from Adelaide that has worked with
                  Svelte Studios and Sine / Honeywell. He was educated in Maths,
                  Physics and Chemistry at Adelaide University.
                </div>
                {/* <div>View Profile</div> */}
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-6/12 p-4">
                <div className="text-lg">Vanessa</div>
                <div className="tracking-wider uppercase pt-4">Co-Founder</div>
                <div className="pt-4">
                  Vanessa is a Software Engineer from Adelaide that also started
                  out with Svelte Studios in Adelaide under Senior Software
                  Engineer Terence Kruger. She studied Computer Science at
                  Deakin University in Melbourne and built a gecko robot that
                  could climb walls!
                </div>
              </div>
              <div
                className="w-6/12 bg-cover bg-no-repeat bg-right-top"
                style={{
                  height: "300px",
                  backgroundImage: `url(/images/nessy.jpeg)`,
                }}
              ></div>
            </div>
          </div>
          <div className="w-2/12"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
