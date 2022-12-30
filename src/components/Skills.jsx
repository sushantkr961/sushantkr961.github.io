import React from "react";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import reactImage from "./assets/react.png";
import expressjs from "./assets/expressJs.png";
import git from "./assets/git.png";
import github from "./assets/github_b.png";
import tailwind from "./assets/tailwind.png";
import mongodb from "./assets/mongodb.png";
import redux from "./assets/redux.png";
import nodejs from "./assets/nodejs.png";
import chakra from "./assets/chakra.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: expressjs,
      title: "express JS",
      style: "shadow-black",
    },
    {
      id: 7,
      src: git,
      title: "git",
      style: "shadow-orange-700",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-700",
    },
    {
      id: 9,
      src: mongodb,
      title: "mongodb",
      style: "shadow-green-900",
    },
    {
      id: 10,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-fit md:h-screen font-semibold mt-[50px] md:mt-0"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Skills{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {" "}
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
