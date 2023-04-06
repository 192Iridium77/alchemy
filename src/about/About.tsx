import React from "react";

import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const navToMyProfile = () => {
    navigate("/about/matt");
  };

  return (
    <div className="container mt-12">
      <div>
        <div className="md:flex">
          <div className="md:w-6/12 md:pr-4">
            <div className="text-xl pb-4">Welcome to Alchemy Tech!</div>
            <div>
              <b>Alchemy Tech</b> is a software development company that
              specializes in building custom solutions to help businesses
              achieve their goals. With a team of highly skilled developers and
              designers, we take pride in delivering software that is tailored
              to the unique needs of each client. From web applications to
              mobile apps and desktop software, we use the latest technologies
              and industry best practices to deliver high-quality software that
              is intuitive, user-friendly, and delivers measurable results. Our
              passion for creating innovative solutions is what sets us apart,
              and we look forward to working with you to bring your ideas to
              life.
            </div>
          </div>
          <div className="md:w-6/12 md:pl-4">
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
          <div className="md:w-2/12"></div>
          <div className="md:w-8/12 border-2 border-gray-100">
            <div
              className="md:flex w-full cursor-pointer"
              onClick={navToMyProfile}
            >
              <div
                className="md:w-6/12 bg-cover bg-no-repeat bg-center"
                style={{
                  height: "300px",
                  backgroundImage: `url(/images/me.jpg)`,
                }}
              ></div>
              <div className="md:w-6/12 p-4">
                <div className="text-lg">Matt</div>
                <div className="text-sm tracking-wider uppercase pt-4">
                  Founder
                </div>
                <div className="pt-4">
                  Matt is a Software Engineer from Adelaide that has worked with
                  Svelte Studios and Sine / Honeywell. He was educated in Maths,
                  Physics and Chemistry at Adelaide University.
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="mt-4 block underline">View Profile</a>
              </div>
            </div>
            <div className="md:flex md:flex-row-reverse w-full">
              <div
                className="md:w-6/12 bg-cover bg-no-repeat bg-right-top"
                style={{
                  height: "300px",
                  backgroundImage: `url(/images/nessy.jpeg)`,
                }}
              ></div>
              <div className="md:w-6/12 p-4">
                <div className="text-lg">Ness</div>
                <div className="text-sm tracking-wider uppercase pt-4">
                  Co-Founder
                </div>
                <div className="pt-4">
                  Ness is a Software Engineer from Adelaide that also started
                  out with Svelte Studios in Adelaide under Senior Software
                  Engineer Terence Kruger. She studied Computer Science at
                  Deakin University in Melbourne.
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/12"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
