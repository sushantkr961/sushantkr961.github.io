import React from "react";

const Card = ({
  id,
  src,
  name,
  description,
  demo,
  code,
  tech1,
  tech2,
  tech3,
}) => {
  return (
    <div>
      <div key={id} className="shadow-md shadow-gray-600 rounded-lg pb-3 m-2">
        <img
          src={src}
          alt=""
          className="rounded-md duration-200 hover:scale-105 w-full h-44"
        />
        <div className="flex items-center justify-center">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer noopener"
            className="w-[100px] px-6 py-3 m-4 duration-200 hover:scale-105"
          >
            <button className="border px-3 py-2 rounded-md"> Demo </button>
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer noopener"
            className="w-[100px] px-6 py-3 m-4 duration-200 hover:scale-105"
          >
            <button className="border px-3 py-2 rounded-md" > Code </button>
          </a>
        </div>
        <div>
          <p className="text-lg font-bold underline text-center">{name}</p>
          <p className="text-center p-3"> {description} </p>
          <div className="flex justify-center gap-1">
            <img src={tech1} alt="" className="h-7 w-7" />
            <img src={tech2} alt="" className="h-7 w-7" />
            <img src={tech3} alt="" className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
