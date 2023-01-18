import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit md:h-screen text-gray-700 font-semibold mt-[50px] md:mt-0">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 w-52">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-black">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Sushant Kumar, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div className="mb-8 ">
            <p>
              I am a Full stack web developer doing militry style coding and
              learning MERN Stack at Masai School. I have done various group as
              well as individual projects in my coding journey. I also did
              B.tech in Mechanical Engineering from Aryabhatta Knowledge
              University. My interests are coding, browsing, exploring new
              gadjets.
            </p>
          </div>
        </div>
        <div className="mt-5 w-[90%] sm:grid sm:grid-cols-2 lg:flex justify-between">
          <div className="flex flex-col items-center justify-center p-1 m-1">
            <p className="border-[8px] rounded-[50%] p-10 w-16 h-16 flex justify-center items-center text-xl font-medium m-3 border-[#ff4500]">1000+</p>
            <p className="text-lg font-bold">Hours of Coding</p>
          </div>
          <div className="flex flex-col items-center justify-center p-1 m-1">
            <p className="border-[8px] rounded-[50%] p-10 w-16 h-16 flex justify-center items-center text-xl font-medium m-3 border-[#d1bea8]">400+</p>
            <p className="text-lg font-bold">Hours of DSA</p>
          </div>
          <div className="flex flex-col items-center justify-center p-1 m-1">
            <p className="border-[8px] rounded-[50%] p-10 w-16 h-16 flex justify-center items-center text-xl font-medium m-3 border-[#008000]">5+</p>
            <p className="text-lg font-bold">Projects Done</p>
          </div>
          <div className="flex flex-col items-center justify-center p-1 m-1">
            <p className="border-[8px] rounded-[50%] p-10 w-16 h-16 flex justify-center items-center text-xl font-medium m-3 border-[#483d8b]">100+</p>
            <p className="text-lg font-bold">Hours of Soft skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
