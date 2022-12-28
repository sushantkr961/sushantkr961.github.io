import React from "react";
import HeroImage from "./assets/heroImage1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-fit w-full pt-20 sm:pt-10 md:pt-0 md:h-screen font-semibold"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-black flex shadow-">
            Hi,{" "}
            <img
              src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
              alt="img"
              className="w-5 h-5"
            />{" "}
            my name is
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-900">
            Sushant Kumar
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
            I'm a Full Stack Web Developer.
          </h2>
          <p className="text-black py-4 max-w-lg">
            Dedicated and efficient Full Stack Web Developer capable of writing
            Production-Ready Code Using React JS,Redux,and CSS on the Frontend
            and Node JS,Express JS,and Mongo DB on the Backend to build
            optimized applications. Passionate about Coding and learning new
            Technologies.
          </p>
          <div className="w-fit m-auto sm:m-0">
            <a
              href="https://drive.google.com/file/d/14Qq1p4eUGvDNjziaUtVvT7HynPCK1jtx/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-gray-300 to-gray-500 cursor-pointer smooth duration={500}">
                View Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight
                    size={25}
                    className="ml-1"
                  />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-lg mx-auto w-2/3 md:w-full border-2 border-gray-800"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
