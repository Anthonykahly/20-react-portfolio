import React from "react";
import chatstrology from "../assets/chatstrology.png";
import horiseonrefractor from "../assets/horiseonrefractor.png";
import notetaker from "../assets/notetaker.png";
import readmegen from "../assets/readmegen.png";
import weatherapp from "../assets/weatherapp.png";
import workdayplanner from "../assets/workdayplanner.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-[#B6BBC4] text-[#161A30] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-extrabold inline border-b-4 text-[#31304D] ">
            My Work
          </p>
          <p className="text-2xl py-6 text-extrabold">
            Check out some of my recent work!
          </p>
        </div>

        {/*Card container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Project*/}
          <div
            style={{ backgroundImage: `url(${chatstrology})` }}
            className="shadow-lg shadow-[#333333] group container rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-extrabold text-white tracking-wider">
                Chatstrology
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/GameCatCam/Astrology-Board">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-extrabold text-lg">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project 2*/}
          <div
            style={{ backgroundImage: `url(${notetaker})` }}
            className="shadow-lg shadow-[#333333] group container rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-extrabold text-white tracking-wider">
                Note Taker
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Anthonykahly/11-my-note-taker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-extrabold text-lg">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project 3*/}
          <div
            style={{ backgroundImage: `url(${weatherapp})` }}
            className="shadow-lg shadow-[#333333] group container rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-extrabold text-white tracking-wider">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Anthonykahly/my-weather-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-extrabold text-lg">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project 4*/}
          <div
            style={{ backgroundImage: `url(${readmegen})` }}
            className="shadow-lg shadow-[#333333] group container rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-extrabold text-white tracking-wider">
                README Gen
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Anthonykahly/README-Generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-extrabold text-lg">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project 5*/}
          <div
            style={{ backgroundImage: `url(${workdayplanner})` }}
            className="shadow-lg shadow-[#333333] group container rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-extrabold text-white tracking-wider">
                Work Planner
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Anthonykahly/workday-planner">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-extrabold text-lg">
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project 6*/}
          <div
            style={{ backgroundImage: `url(${horiseonrefractor})` }}
            className="shadow-lg shadow-[#333333] group container rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-extrabold text-white tracking-wider">
                Refractor
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Anthonykahly/horiseon-refactor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-extrabold text-lg">
                    GITHUB
                  </button>
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
