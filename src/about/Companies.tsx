import React from "react";

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
    <a
      className="block shadow-lg rounded-md border-solid border-gray-100 border mt-8"
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
