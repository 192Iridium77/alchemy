import React from "react";
import Image from "next/image";
import { Button } from "../components/Button";

const CompanyCard = ({
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

const Companies = () => {
  return (
    <div id="companies" className="py-8">
      <h2 className="text-xl flex justify-center">Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <CompanyCard
          href="https://www.selfpsy.com/"
          imageUrl="/images/selfpsy.png"
          alt="Selfpsy"
          title="Selfpsy"
          description="Selfpsy is a Big Five personality assessment suite that helps you understand and develop your psychological traits with a gamified AI journal that tracks your growth, emotional states and provides deep psychological insights into your unconscious mind."
        ></CompanyCard>
        <CompanyCard
          href="https://aethercraft.online/"
          imageUrl="/images/aethercraft.png"
          alt="Aethercraft"
          title="Aethercraft"
          description="AetherCraft is a dark fantasy RTS/RPG game where you channel the Aether to control your custom hero and conquer the celestial battlefield."
        ></CompanyCard>
      </div>
    </div>
  );
};

export default Companies;
