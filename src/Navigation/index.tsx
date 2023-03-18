import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-white">
      <div className="container">
        <header className="flex w-full items-center space-between py-8">
          <div className="w-2/12 md:w-4/12 flex justify-start">
            <a href="/">
              <img src="/AlchemyTechLogo.png" className="h-12" alt="logo" />
            </a>
          </div>
          <div className="w-10/12 md:w-4/12 flex gap-8 justify-center">
            <Link to="/" className="border-b border-primary-200">
              Articles
            </Link>
            <Link to="/apps" className="border-b border-primary-200">
              Apps
            </Link>
            <Link to="/about" className="border-b border-primary-200">
              About
            </Link>
          </div>
          <div className="hidden md:flex w-4/12 justify-end">
            <a
              className="bg-primary-200 rounded text-white px-4 py-2"
              href="mailto:matt.martin0108@gmail.com"
            >
              Contact
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
