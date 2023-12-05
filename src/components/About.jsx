import React from "react";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#B6BBC4] text-[#161A30]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-extrabold inline border-b-4 text-[#31304D]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-5xl font-bold">
            <p>My name is Anthony. Nice to meet you!</p>
          </div>
          <div>
            <p>
              I am a recent graduate of the 2023 Case Western Reserve University
              full stack course. I plan to continue my education and practice
              honing my skills as a full stack developer. Through my studies I
              found I have an interest in UI as well as frontend coding, but I
              definitely also enjoy learning and getting more efficient with
              Javascript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
