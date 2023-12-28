import React from "react";

const certificatesData = [
  "graphql-by-example",
  "go-the-complete-developers-guide",
  "design-patterns-in-javascript",
  "creating-accessible-websites",
  "webpack-5-in-2023-optimizing-for-production",
];

const Certificates = () => {
  return (
    <div id="credentials">
      <h3 className="text-xl flex justify-center mt-8">Credentials</h3>
      <div className="flex flex-wrap mt-8">
        {certificatesData.map((certificate, index) => (
          <a
            key={index}
            className="md:w-6/12 p-4 block"
            href={`/certificates/${certificate}.pdf`}
          >
            <img
              src={`/certificates/${certificate}.jpeg`}
              alt={`Certificate ${index + 1}`}
              className="shadow-md p-2"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
