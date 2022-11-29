import React from "react";

function About() {
  return (
    <div className="container mt-16">
      <div>
        <div className="flex">
          <div className="w-6/12 pr-4">
            <div className="text-xl pb-4">Welcome to Alchemy Tech!</div>
            <div>
              The goal of <b>Alchemy Tech</b> is to build innovative web apps
              that provide education and foster creativity around the globe.
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
              <div className="w-6/12">two</div>
            </div>
            <div className="flex w-full">
              <div className="w-6/12">two</div>
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
