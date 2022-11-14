import React from "react";
import Jefit from "../assets/projects/Jefit.jpeg";
import Naukri from "../assets/projects/Naukri.jpeg";
import Orbitz from "../assets/projects/Orbitz.jpeg";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
// import github from "../assets/github.png"

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Jefit,
      name: "Jefit Clone",
      description: "A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions.",
      demo: `https://shimmering-starburst-c610de.netlify.app/`,
      code: `https://github.com/sushantkr961/incompetent-string-8638`,
      tech1: html,
      tech2: css,
      tech3: javascript,
      // tech4: github,
    },
    {
      id: 2,
      src: Naukri,
      name: "Naukri.com Clone",
      description: "Naukri.com is an Indian employment website operting in India founded by Indian bussinessman Sanjeev Bikhchandani.It is the largest employment website in India.",
      demo:`https://superlative-klepon-42d3bf.netlify.app/`,
      code: `https://github.com/sushantkr961/delicious-vacation-7867`,
      tech1: html,
      tech2: css,
      tech3: javascript,
      // tech4: github,
    },
    {
      id: 3,
      src: Orbitz,
      name: "Orbitz Clone",
      description: "Kimaya is a online website thats offers to purchase fresh Indian & exotic fruits.It is hassle free online fruit ordering platform in Mumbai and Delhi.",
      demo:`https://dynamic-peony-8ff545.netlify.app/`,
      code: `https://github.com/Vishal-508/Orbitz.com-clone-`,
      tech1: html,
      tech2: css,
      tech3: javascript,
      // tech4: github,
    },
    // {
    //   id: 4,
    //   src: Jefit,
    //   name: "Jefit Clone",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio delectus officiis dolorem quisquam odit nostrum quidem, impedit, tempora exercitationem ea natus pariatur corrupti soluta perferendis error ipsa similique saepe!",
    //   demo:``,
    //   code: ``,
    //   tech1:"",
    //   tech2: "",
    //   tech3: "",
    // },
    // {
    //   id: 5,
    //   src: Naukri,
    //   name: "Jefit Clone",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio delectus officiis dolorem quisquam odit nostrum quidem, impedit, tempora exercitationem ea natus pariatur corrupti soluta perferendis error ipsa similique saepe!",
    //   demo:``,
    //   code: ``,
    //   tech1:"",
    //   tech2: "",
    //   tech3: "",
    // },
    // {
    //   id: 6,
    //   src: Orbitz,
    //   name: "",
    //   description: "",
    //   demo:``,
    //   code: ``,
    //   tech1:"",
    //   tech2: "",
    //   tech3: "",
      
    // },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto " >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Projects </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, description,demo, code, tech1, tech2, tech3, tech4 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg pb-3">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 w-full h-44" />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer noopener" className="w-[100px] px-6 py-3 m-4 duration-200 hover:scale-105" >
                <button > Demo </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer noopener" className="w-[100px] px-6 py-3 m-4 duration-200 hover:scale-105">
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
                  {/* <img src={tech4} alt="" className="h-7 w-7" /> */}
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
