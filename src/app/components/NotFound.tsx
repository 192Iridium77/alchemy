import React from "react";

const NotFound = () => {
  return (
    <div className="container mt-12">
      <div className="flex flex-col justify-center items-center">
        <img src="/404.webp" alt="404" className="h-64" />
        <p>The page you were looking for was not found.</p>
        <a className="text-black px-4 py-2 my-12" href="/">
          <div className="border-b border-black">Back to Home</div>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
