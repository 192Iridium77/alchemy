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
      <div className="text-xl flex justify-center mt-8">Work With Me</div>
      <div className="flex mt-8">
        <div className="w-8/12 p-16 border border-gray-100">
          <div className="text-lg">Hello World!</div>
          <p>
            I am a seasoned Australian Software Engineer with a rich background
            spanning startups to Fortune 100 companies. I'm driven by a passion
            for delivering cutting-edge technical solutions that not only meet
            but exceed your business needs.
          </p>
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
        <div
          className="w-4/12 p-16 border border-gray-100"
          style={{ marginLeft: "-1px" }}
        >
          <div className="text-lg">Services</div>
          <div style={{ whiteSpace: "pre-wrap" }} className="mt-4">
            {services}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
