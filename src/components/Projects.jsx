import React from "react";
import Jefit from "../assets/projects/Jefit.jpeg";
import Naukri from "../assets/projects/Naukri.jpeg";
import Orbitz from "../assets/projects/Orbitz.jpeg";
import html from "../assets/html.png"

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Jefit,
      name: "Jefit Clone",
      description: "An online store for personal trainers and training guides, jefit.com, offers a wide variety of exercise categories that target particular muscle regions.",
      demo: `https://shimmering-starburst-c610de.netlify.app/`,
      code: `https://github.com/sudip40/incompetent-string-8638`,
      tech1: html,
      tech2: html,
      tech3: html,
    },
    {
      id: 2,
      src: Naukri,
      name: "Jefit Clone",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio delectus officiis dolorem quisquam odit nostrum quidem, impedit, tempora exercitationem ea natus pariatur corrupti soluta perferendis error ipsa similique saepe!",
      demo:``,
      code: ``,
      tech1:"",
      tech2: "",
      tech3: "",
    },
    {
      id: 3,
      src: Orbitz,
      name: "Jefit Clone",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio delectus officiis dolorem quisquam odit nostrum quidem, impedit, tempora exercitationem ea natus pariatur corrupti soluta perferendis error ipsa similique saepe!",
      demo:``,
      code: ``,
      tech1:"",
      tech2: "",
      tech3: "",
    },
    {
      id: 4,
      src: Jefit,
      name: "Jefit Clone",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio delectus officiis dolorem quisquam odit nostrum quidem, impedit, tempora exercitationem ea natus pariatur corrupti soluta perferendis error ipsa similique saepe!",
      demo:``,
      code: ``,
      tech1:"",
      tech2: "",
      tech3: "",
    },
    {
      id: 5,
      src: Naukri,
      name: "Jefit Clone",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio delectus officiis dolorem quisquam odit nostrum quidem, impedit, tempora exercitationem ea natus pariatur corrupti soluta perferendis error ipsa similique saepe!",
      demo:``,
      code: ``,
      tech1:"",
      tech2: "",
      tech3: "",
    },
    {
      id: 6,
      src: Orbitz,
      name: "",
      description: "",
      demo:``,
      code: ``,
      tech1:"",
      tech2: "",
      tech3: "",
      
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto border" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full border">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Projects </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, description,demo, code, tech1, tech2, tech3 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg pb-3">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 w-full h-44" />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer noopener" className="w-[100px] px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center" >
                <button > Demo </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer noopener" className="w-[100px] px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center">
                <button > Code </button>
                </a>
              </div>
              <div>
                <p className="text-lg font-bold underline text-center">{name}</p>
                <p className="text-center p-3"> {description} </p>
                <div className="flex justify-center gap-1">
                  <img src={tech1} alt="" className="h-7 w-7" />
                  <img src={tech2} alt="" className="h-7 w-7" />
                  <img src={tech3} alt="" className="h-7 w-7" />
                  <img src={tech3} alt="" className="h-7 w-7" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
