import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-t from-slate-900 via-gray-700 to-zinc-500 text-gray-100"
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
          <div className="mt-8 m-auto md:flex md:justify-around md:align-middle">
            <img
            className="m-auto mb-5 md:w-[400px] rounded"
              alt="sushantkr961's GitHub stats"
              src="https://github-readme-stats.vercel.app/api?username=sushantkr961&show_icons=true&count_private=true&theme=chartreuse-dark&hide_border=true&bg_color=0D1117"
            />
            <img
            className="m-auto md:w-[320px] rounded"
              alt="Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sushantkr961&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
// 0D1117