import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Github = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div>
          <div className="max-w-[1000px] sm:grid sm:grid-cols-2 gap-8">
            {" "}
            <div className="sm:text-right pb-8 pl-4 w-fit">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                {" "}
                My Statistics{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <GitHubCalendar
            username="sushantkr961"
            color="#808a9f"
            style={{ margin: "auto" }}
          />{" "}
          <ReactTooltip />
        </div>
      </div>
    </div>
  );
};

export default Github;
