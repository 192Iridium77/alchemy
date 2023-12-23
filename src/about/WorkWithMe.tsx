import React from "react";

const WorkWithMe = () => {
  const services = `🖥️ Application Development
🚀 API Development
🕸️ Website Development
🌐 Hosting Solutions
🛠 Database Development
🤖 Artificial Intelligence
📱 Mobile Applications
🔍 Search Engine Optimization
🖌 Content Creation
🎨 Design
🚀 Web Performance Optimization
🤝 Consulting
🏗 System Design
📊 Project Management`;

  return (
    <div>
      <div className="text-xl justify-center mt-8 hidden md:flex">
        Work With Me
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-3/12 p-8 border border-gray-100">
          <div>
            <a
              href="#contacts"
              className="border-b border-gray-100 hover:border-black pb-1 inline-block my-2 uppercase"
            >
              Contacts
            </a>
          </div>
          <div>
            <a
              href="#workwithme"
              className="border-b border-gray-100 hover:border-black pb-1 inline-block my-2 uppercase"
            >
              Work With Me
            </a>
          </div>
          <div>
            <a
              href="#credentials"
              className="border-b border-gray-100 hover:border-black pb-1 inline-block my-2 uppercase"
            >
              Credentials
            </a>
          </div>
          <div>
            <a
              href="#projects"
              className="border-b border-gray-100 hover:border-black pb-1 inline-block my-2 uppercase"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="md:w-9/12 p-8">
          <div className="text-xl justify-center mt-8 block md:hidden">
            Work With Me
          </div>
          <div className="text-lg mt-8 md:mt-0">Hello World!</div>
          <p>
            I am a seasoned Australian Software Engineer with a rich background
            spanning startups to Fortune 100 companies. I'm driven by a passion
            for delivering cutting-edge technical solutions that not only meet
            but exceed your business needs.
          </p>
          {/* <div className="text-lg">Services</div>
          <div style={{ whiteSpace: "pre-wrap" }} className="mt-4">
            {services}
          </div> */}
          <div className="text-lg mt-4">Why choose me?</div>
          <p>
            Are you looking for a dedicated professional who goes above and
            beyond to deliver results? Look no further. I don't just provide
            solutions; I convert your business needs into tailor-made,
            efficient, and cost-effective results. When you work with me, expect
            accurate estimates and a commitment to turning your vision into
            reality.
          </p>
          <p>
            Let's connect and transform your challenges into success stories!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
