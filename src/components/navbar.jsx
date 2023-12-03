import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#161A30] text-gray-300">
      <div>{/*insert logo */}</div>

      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/*mobile menu*/}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/*social media icons*/}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
