"use client";

import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/70 shadow-md z-50">
      <div className="flex items-center justify-between h-12 md:h-20 px-4 md:px-8">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex flex-col items-center text-white hover:text-gray-300"
          >
            <img
              src="/images/mattmartinlogo.png"
              className="h-6 md:h-8"
              alt="logo"
            />
            <span className="hidden md:block text-xs mt-1 uppercase">
              Matt Martin
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-6 text-xs md:text-base">
          <Link href="/companies" className="text-white hover:text-gray-300">
            Companies
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="/books" className="text-white hover:text-gray-300">
            Books
          </Link>
          <Link
            href="/certifications"
            className="text-white hover:text-gray-300"
          >
            Credentials
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
