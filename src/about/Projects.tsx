import React from "react";
import Image from "next/image";
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
    <div className="block shadow-lg rounded-md border-solid border-gray-100 border mt-8 relative group w-full">
      <div className="relative rounded-md border border-gray-50 overflow-hidden w-full">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="rounded-md object-cover w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <Button href={href}>View</Button>
        </div>
      </div>
    </div>
  );
};

const OtherProjectCard = ({
  href,
  alt,
  imageUrl,
}: {
  href: string;
  alt: string;
  imageUrl: string;
}) => {
  return (
    <div className="md:w-4/12 block p-4 relative group w-full">
      <div className="relative rounded-md border border-gray-50 overflow-hidden shadow-lg w-full">
        <div className="relative w-full" style={{ aspectRatio: "9/20" }}>
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="rounded-md object-contain w-full"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <Button href={href}>View</Button>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ limit }: { limit?: number }) => {
  const projects = [
    <ProjectCard
      key="leonardo"
      href="https://leonardo.ai/"
      imageUrl="/images/leonardoai.png"
      alt="Leonardo AI"
    />,
    <ProjectCard
      key="hireup"
      href="https://www.hireup.com.au/"
      imageUrl="/images/hireup.png"
      alt="Hireup"
    />,
    <ProjectCard
      key="honeywell"
      href="https://www.honeywell.com/us/en"
      imageUrl="/images/honeywell.jpg"
      alt="Honeywell"
    />,
    <ProjectCard
      key="novasystems"
      href="https://www.novasystems.com/au"
      imageUrl="/images/novasystems.webp"
      alt="Nova Systems"
    />,
    <OtherProjectCard
      key="sahmri"
      href="https://sahmri.org.au/"
      imageUrl="/images/sahmri.webp"
      alt="SAHMRI"
    />,
    <OtherProjectCard
      key="navalgroup"
      href="https://www.naval-group.com/en/worldwide-presence#p-432-australia"
      imageUrl="/images/navalgroup.webp"
      alt="Naval Group"
    />,
    <OtherProjectCard
      key="adelaidehills"
      href="https://www.visitadelaidehills.com.au/"
      imageUrl="/images/AdelaideHills.webp"
      alt="visit adelaide hills"
    />,
    <OtherProjectCard
      key="sited"
      href="https://www.buildsited.com/"
      imageUrl="/images/sited.webp"
      alt="Sited"
    />,
    <OtherProjectCard
      key="hendercare"
      href="https://www.hendercare.com.au/"
      imageUrl="/images/hendercare.webp"
      alt="Hendercare"
    />,
    <OtherProjectCard
      key="sam"
      href="https://www.samuseum.sa.gov.au/"
      imageUrl="/images/SAM.webp"
      alt="SA Museum"
    />,
    <OtherProjectCard
      key="barossa"
      href="https://www.barossa.com/"
      imageUrl="/images/Barossa.webp"
      alt="Barossa"
    />,
    <OtherProjectCard
      key="uc"
      href="https://www.unitingcommunities.org/"
      imageUrl="/images/UC.webp"
      alt="Uniting Communities"
    />,
    <OtherProjectCard
      key="bloom"
      href="https://bloombarflowers.com/"
      imageUrl="/images/bloom.webp"
      alt="Bloombar Flowers"
    />,
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div id="projects" className="py-8">
      <h3 className="text-xl flex justify-center">Projects</h3>
      <div className="flex flex-wrap justify-center mt-8">
        {displayedProjects}
      </div>
    </div>
  );
};

export default Projects;
