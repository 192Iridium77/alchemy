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
      className="p-8 block shadow-lg rounded-md border-solid border-gray-100 border mt-8"
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
    <div id="projects" className="py-8">
      <h3 className="text-xl flex justify-center"> Projects </h3>
      <div className="flex flex-wrap justify-center mt-8">
        <ProjectCard
          href="https://www.hireup.com.au/"
          imageUrl="/images/hireup.webp"
          alt="Hireup"
        ></ProjectCard>
        <ProjectCard
          href="https://www.sine.co/"
          imageUrl="/images/honeywell.webp"
          alt="Sine Honeywell"
        ></ProjectCard>
        <ProjectCard
          href="https://www.novasystems.com/au"
          imageUrl="/images/novasystems.webp"
          alt="Nova Systems"
        ></ProjectCard>
        <a className="md:w-4/12 block p-4" href="https://sahmri.org.au/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/sahmri.webp"
            alt="SAHMRI"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.naval-group.com/en/worldwide-presence#p-432-australia"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/navalgroup.webp"
            alt="Naval Group"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.visitadelaidehills.com.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/AdelaideHills.webp"
            alt="visit adelaide hills"
          />
        </a>
        <a className="md:w-4/12 block p-4" href="https://www.buildsited.com/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/sited.webp"
            alt="Sited"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.hendercare.com.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/hendercare.webp"
            alt="Hendercare"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.samuseum.sa.gov.au/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/SAM.webp"
            alt="SA Museum"
          />
        </a>
        <a className="md:w-4/12 block p-4" href="https://www.barossa.com/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/Barossa.webp"
            alt="Barossa"
          />
        </a>
        <a
          className="md:w-4/12 block p-4"
          href="https://www.unitingcommunities.org/"
        >
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/UC.webp"
            alt="Uniting Communities"
          />
        </a>
        <a className="md:w-4/12 block p-4" href="https://bloombarflowers.com/">
          <img
            className="rounded-md border border-gray-50 p-4 shadow-lg"
            src="/images/bloom.webp"
            alt="Bloombar Flowers"
          />
        </a>
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
