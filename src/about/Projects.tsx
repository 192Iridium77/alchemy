import React from "react";
import { Button } from "../components/Button";

const ProjectCard = ({
  href,
  alt,
  imageUrl,
}: {
  href: string;
  alt: string;
  imageUrl: string;
}) => {
  return (
    <div className="block shadow-lg rounded-md border-solid border-gray-100 border mt-8 relative group">
      <div className="relative rounded-md border border-gray-50 overflow-hidden">
        <img className="rounded-md w-full h-auto" src={imageUrl} alt={alt} />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <Button href={href}>View</Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="py-8">
      <h3 className="text-xl flex justify-center"> Projects </h3>
      <div className="flex flex-wrap justify-center mt-8">
        <ProjectCard
          href="https://leonardo.ai/"
          imageUrl="/images/leonardoai.png"
          alt="Leonardo AI"
        ></ProjectCard>
        <ProjectCard
          href="https://www.hireup.com.au/"
          imageUrl="/images/hireup.png"
          alt="Hireup"
        ></ProjectCard>
        <ProjectCard
          href="https://www.sine.co/"
          imageUrl="/images/honeywell.png"
          alt="Sine Honeywell"
        ></ProjectCard>
        <ProjectCard
          href="https://www.novasystems.com/au"
          imageUrl="/images/novasystems.webp"
          alt="Nova Systems"
        ></ProjectCard>

        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/sahmri.webp"
              alt="SAHMRI"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://sahmri.org.au/">View</Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/navalgroup.webp"
              alt="Naval Group"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://www.naval-group.com/en/worldwide-presence#p-432-australia">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/AdelaideHills.webp"
              alt="visit adelaide hills"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://www.visitadelaidehills.com.au/">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/sited.webp"
              alt="Sited"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://www.buildsited.com/">View</Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/hendercare.webp"
              alt="Hendercare"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://www.hendercare.com.au/">View</Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/SAM.webp"
              alt="SA Museum"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://www.samuseum.sa.gov.au/">View</Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/Barossa.webp"
              alt="Barossa"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://www.barossa.com/">View</Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/UC.webp"
              alt="Uniting Communities"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://www.unitingcommunities.org/">View</Button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 block p-4 relative group">
          <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg">
            <img
              className="rounded-md w-full h-auto p-4"
              src="/images/bloom.webp"
              alt="Bloombar Flowers"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Button href="https://bloombarflowers.com/">View</Button>
            </div>
          </div>
        </div>
        {/* <a
          className="md:w-4/12 block p-4"
          href="http://www.actionresearch.com.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/action.webp"
            alt="Action Market Research"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Projects;
