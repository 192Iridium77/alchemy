import React from "react";

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
    <a
      className="p-8 block shadow-lg rounded-md border-solid border-gray-100 border"
      href={href}
    >
      <img
        className="rounded-md border border-gray-50"
        src={imageUrl}
        alt={alt}
      />
    </a>
  );
};

const Projects = () => {
  return (
    <div className="py-8">
      <div className="text-xl flex justify-center"> Projects </div>
      <div className="flex flex-wrap justify-center mt-8">
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
          imageUrl="/images/novasystems.png"
          alt="Nova Systems"
        ></ProjectCard>
        <a className="md:w-4/12 block p-4" href="https://sahmri.org.au/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/sahmri.jpg"
            alt="SAHMRI"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.naval-group.com/en/worldwide-presence#p-432-australia"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/navalgroup.jpg"
            alt="Naval Group"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.visitadelaidehills.com.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/AdelaideHills.jpg"
            alt="visit adelaide hills"
          />
        </a>
        <a className="md:w-4/12 block p-4" href="https://www.buildsited.com/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/sited.jpg"
            alt="Sited"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.hendercare.com.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/hendercare.jpg"
            alt="Hendercare"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.samuseum.sa.gov.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/SAM.jpg"
            alt="SA Museum"
          />
        </a>
        <a className="md:w-4/12 block p-4" href="https://www.barossa.com/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/Barossa.jpg"
            alt="Barossa"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.unitingcommunities.org/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/UC.jpg"
            alt="Uniting Communities"
          />
        </a>
        <a className="md:w-4/12 block p-4" href="https://bloombarflowers.com/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/bloom.jpg"
            alt="Bloombar Flowers"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="http://www.actionresearch.com.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/action.jpg"
            alt="Action Market Research"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
