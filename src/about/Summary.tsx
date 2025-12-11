import React from "react";

const Summary = () => {
  return (
    <div
      id="contacts"
      className="bg-stone-50"
      style={{
        height: "100dvh",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-full px-4 md:px-8">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl md:text-4xl uppercase mt-32 md:mt-0">
            Matt
            <br />
            Martin
          </h1>
        </div>
        <div className="relative flex-1 h-full w-full md:w-auto overflow-visible">
          <img
            src="/images/profileimage2.png"
            alt="Matt Martin"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-96 md:w-[400px] md:h-[550px] object-cover bg-white shadow-lg"
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
