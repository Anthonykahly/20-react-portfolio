import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#161A30] text-gray-300">
      <div>{/* insert logo */}</div>

      {/* main navigation menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mini menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#161A30] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-5xl">Home</li>
        <li className="py-5 text-5xl">About</li>
        <li className="py-5 text-5xl">Work</li>
        <li className="py-5 text-5xl">Contact</li>
      </ul>

      {/* media icon bar */}
      <div className="hidden lg:flex fixed flex-col top-[36%] left-0">
        <ul>
          <li className="w-[158px] h-[58px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={36} />
            </a>
          </li>
          <li className="w-[158px] h-[58px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={36} />
            </a>
          </li>
          <li className="w-[158px] h-[58px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8ACDD7]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={36} />
            </a>
          </li>
          <li className="w-[158px] h-[58px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#A9A9A9]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={36} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
