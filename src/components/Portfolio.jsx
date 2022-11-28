import React from "react";
import Slider from "./Carousel/Slider";

const Portfolio = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white h-fit w-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Portfolio{" "}
          </p>
          <p className="py-3">
            Check out some of collaborative and solo projects right here
          </p>
        </div>
        <div className="">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
