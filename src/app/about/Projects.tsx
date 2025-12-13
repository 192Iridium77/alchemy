import React from "react";
import Image from "next/image";
import { Button } from "../components/Button";

const ProjectCard = ({
  href,
  alt,
  imageUrl,
  title,
  description,
}: {
  href: string;
  alt: string;
  imageUrl: string;
  title: string;
  description?: string;
}) => {
  return (
    <div className="block mt-8 relative group w-full">
      <h3 className="text-lg font-semibold mb-2 text-left p-4">{title}</h3>
      <div className="relative rounded-md border border-gray-200 shadow-lg overflow-hidden w-full">
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
      {description && (
        <p className="text-sm text-gray-600 mt-4 px-4 min-h-[100px]">
          {description}
        </p>
      )}
    </div>
  );
};

const OtherProjectCard = ({
  href,
  alt,
  imageUrl,
  title,
  description,
}: {
  href: string;
  alt: string;
  imageUrl: string;
  title: string;
  description?: string;
}) => {
  return (
    <div className="block relative group w-full">
      <h3 className="text-lg font-semibold mb-2 text-left p-4">{title}</h3>
      <div className="relative rounded-md border border-gray-200 shadow-lg overflow-hidden w-full">
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
      {description && (
        <p className="text-sm text-gray-600 mt-4 px-4 min-h-[100px]">
          {description}
        </p>
      )}
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
      title="Canva | Leonardo.Ai"
      description="Senior Frontend Software Engineer (2024) before the Canva acquisition. Worked on UI performance for image feeds, Blueprints, and optimizing GraphQL caching."
    />,
    <ProjectCard
      key="hireup"
      href="https://www.hireup.com.au/"
      imageUrl="/images/hireup.png"
      alt="Hireup"
      title="Hireup"
      description="Senior Fullstack Engineer (2023). Upgraded tooling, reduced build time by 3x by fixing a styling bottleneck, fixed a pre-rendering related password vulnerability, and built features with high accessibility requirements."
    />,
    <ProjectCard
      key="honeywell"
      href="https://www.honeywell.com/us/en"
      imageUrl="/images/honeywell.jpg"
      alt="Honeywell"
      title="Honeywell | Sine"
      description="Worked on large third-party integrations with thousands of Honeywell Global subsidiaries (2021). Created a GraphQL wrapper over microservices and built a scheduling app for 16k Bangalore office workers during the COVID-19 pandemic."
    />,
    <ProjectCard
      key="novasystems"
      href="https://www.novasystems.com/au"
      imageUrl="/images/novasystems.webp"
      alt="Nova Systems"
      title="Nova Systems"
    />,
    <OtherProjectCard
      key="sahmri"
      href="https://sahmri.org.au/"
      imageUrl="/images/sahmri.webp"
      alt="SAHMRI"
      title="SAHMRI"
    />,
    <OtherProjectCard
      key="navalgroup"
      href="https://www.naval-group.com/en/worldwide-presence#p-432-australia"
      imageUrl="/images/navalgroup.webp"
      alt="Naval Group"
      title="Naval Group"
    />,
    <OtherProjectCard
      key="adelaidehills"
      href="https://www.visitadelaidehills.com.au/"
      imageUrl="/images/AdelaideHills.webp"
      alt="visit adelaide hills"
      title="Adelaide Hills"
    />,
    <OtherProjectCard
      key="sited"
      href="https://www.buildsited.com/"
      imageUrl="/images/sited.webp"
      alt="Sited"
      title="Sited"
    />,
    <OtherProjectCard
      key="hendercare"
      href="https://www.hendercare.com.au/"
      imageUrl="/images/hendercare.webp"
      alt="Hendercare"
      title="Hendercare"
    />,
    <OtherProjectCard
      key="sam"
      href="https://www.samuseum.sa.gov.au/"
      imageUrl="/images/SAM.webp"
      alt="SA Museum"
      title="SA Museum"
    />,
    <OtherProjectCard
      key="barossa"
      href="https://www.barossa.com/"
      imageUrl="/images/Barossa.webp"
      alt="Barossa"
      title="Barossa"
    />,
    <OtherProjectCard
      key="uc"
      href="https://www.unitingcommunities.org/"
      imageUrl="/images/UC.webp"
      alt="Uniting Communities"
      title="Uniting Communities"
    />,
    <OtherProjectCard
      key="bloom"
      href="https://bloombarflowers.com/"
      imageUrl="/images/bloom.webp"
      alt="Bloombar Flowers"
      title="Bloombar Flowers"
    />,
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div id="projects" className="py-8">
      <h2 className="text-xl flex justify-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {displayedProjects}
      </div>
    </div>
  );
};

export default Projects;
