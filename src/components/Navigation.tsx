"use client";

import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/80 border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-20 px-2 md:px-4">
        <div className="flex items-center">
          <img
            src="/Logo.png"
            className="h-16"
            alt="logo"
            style={{ filter: "invert(1)" }}
          />
        </div>
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
