import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#161A30] text-gray-300">
      <div>{/* insert logo */}
    </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div className="md:hidden">
        <FaBars />
      </div>

      {/* mobile menu */}
      <ul className="absolute top-0 left-0 w-full h-screen bg-[#161A30] flex flex-col justify-center items-center">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* social media icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
