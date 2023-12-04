import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#B6BBC4]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#31304D]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#161A30]">
          Anthony Kahly
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#31304D]">
          Full Stack Web Developer.
        </h2>
        <p className="text-[#4f4d81] py-4 max-w-[700px]">
          I am a recent graduate of the 2023 CWRU full stack course. 
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#161A30] hover:[#31304D]">
            View My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
