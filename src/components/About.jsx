import React from "react";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300 border">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className='sm:text-right pb-8 pl-4'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500"> About </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Sushant Kumar, nice to meet you. Please take a look around.</p>
          </div>
          <div className="mb-8">
            <p>I am a Full stack web developer doing militry style coding and learning MERN Stack at Masai School. I have done various group as well as individual projects in my coding journey. I also did B.tech in Mechanical Engineering from Aryabhatta Knowledge University. My interests are coding, browsing, exploring new gadjets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
