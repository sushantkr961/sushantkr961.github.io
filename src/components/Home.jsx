import React from "react";
import HeroImage from "../assets/heroImage1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 sm:pt-10 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-blue-400 flex">
            Hi,{" "}
            <img
              src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
              alt="img"
              className="w-5 h-5 "
            />{" "}
            my name is
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Sushant Kumar
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Web Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-lg">
            Dedicated and efficient Full Stack Web Developer capable of writing
            Production-Ready Code Using React JS,Redux,and CSS on the Frontend
            and Node JS,Express JS,and Mongo DB on the Backend to build
            optimized applications. Passionate about Coding and learning new
            Technologies.
          </p>
          <div className="w-fit m-auto sm:m-0">
            <a
              href="https://drive.google.com/file/d/1vgTTQpxYPYJ22vHrKxWeDOwul_pDONSd/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer smooth duration={500}">
                View Resume
                <span className="group-hover:rotate-90 duration-300">
                  {" "}
                  <MdOutlineKeyboardArrowRight
                    size={25}
                    className="ml-1"
                  />{" "}
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-lg mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
