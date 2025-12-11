import React from "react";
import { Button } from "../components/Button";

const CompanyCard = ({
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

const Companies = () => {
  return (
    <div id="companies" className="py-8">
      <h3 className="text-xl flex justify-center">Companies</h3>
      <div className="flex flex-wrap justify-center mt-8">
        <CompanyCard
          href="https://www.selfpsy.com/"
          imageUrl="/images/selfpsy.png"
          alt="Selfpsy"
        ></CompanyCard>
        <CompanyCard
          href="https://aethercraft.online/"
          imageUrl="/images/aethercraft.png"
          alt="Aethercraft"
        ></CompanyCard>
      </div>
    </div>
  );
};

export default Companies;
