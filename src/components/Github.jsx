import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-gray-900 mt-[50px] md:mt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full ">
        <div className="">
          <div className="max-w-[1000px] sm:grid sm:grid-cols-2 gap-8">
            <div className="sm:text-left pb-8 pl-4 w-fit">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                GitHub Calendar
              </p>
            </div>
          </div>
          <GitHubCalendar
            username="sushantkr961"
            color="#000000"
            style={{ margin: "auto" }}
            responsive={true}
          />
        </div>

        <div className="mt-10">
          <div className="max-w-[1000px] sm:grid sm:grid-cols-2 gap-8">
            <div className="sm:text-left pb-8 pl-4 w-fit">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                My Statistics
              </p>
            </div>
          </div>

          <div className=" lg:flex">
            <img
              className="m-auto mb-5 md:w-[400px]  lg:w-[480px] rounded"
              alt="sushantkr961's GitHub stats"
              src="https://github-readme-stats.vercel.app/api?username=sushantkr961&show_icons=true&theme=transparent"
            />
            <img
              className="m-auto md:w-[300px] lg:w-[360px] rounded"
              alt="Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sushantkr961&layout=compact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
