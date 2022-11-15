import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import expressjs from "../assets/expressJs.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import typescript from "../assets/typescript.png";

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
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mongodb,
      title: "mongodb",
      style: "shadow-green-600",
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
      style: "shadow-green-300",
    },
    {
      id: 12,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen sm:h-auto" >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Skills </p>
          {/* <p className="py-6">These are the technologies I've worked with</p> */}
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"> {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
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
