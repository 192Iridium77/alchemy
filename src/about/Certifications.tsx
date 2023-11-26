import React from "react";

const certificatesData = [
  "graphql-by-example",
  "go-the-complete-developers-guide",
  "design-patterns-in-javascript",
  "creating-accessible-websites",
];

const Certificates = () => {
  return (
    <div>
      <div className="text-xl flex justify-center mt-8">Certificates</div>
      <div className="flex flex-wrap justify-center mt-8 gap-8 -mx-4">
        {certificatesData.map((certificate, index) => (
          <a
            key={index}
            className="md:w-5/12 p-2 block shadow-md"
            href={`/certificates/${certificate}.pdf`}
          >
            <img
              src={`/certificates/${certificate}.jpeg`}
              alt={`Certificate ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
