import React from "react";
import chatstrology from "../assets/chatstrology.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#B6BBC4] text-[#161A30]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#161A30] border-[#F0ECE5]">
            My Work
          </p>
          <p className="text-2xl py-6 text-extrabold">
            Check out some of my recent work!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#333333] group container rounded-md flex justify-center items-center content-div">
            <div>
              <span>

              </span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className="hidden text-4xl font-bold flex-col">
          <li>Chatstrology</li>
          <li>Weather App</li>
          <li>Note Taker</li>
          <li>Workday Planner</li>
          <li>README Generator</li>
          <li>Horiseon Refactor</li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
