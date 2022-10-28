import React from 'react';
import { data } from '../data/data';

const Projects = () => {
    const project = data;

  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f] font-medium'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                {/* <p className='py-6'>// Check out some of my recent projects</p> */}
            </div>

            {/* container for projects */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {/* <div className="text-center border"> */}

                {/* Grid Item */}
                {project.map((item, index) => (
                    <div 
                    key={index}
                    style={{ backgroundImage: `url(${item.image})`}}
                    className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500 w-[300px]'
                    >
                    {/* Hover effect for images */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            {item.name}
                            </span>
                            <div className='pt-8 text-center'>
                                {/* eslint-disable-next-line */}
                                <a href={item.live} target="_blank" rel="noreferrer noopener">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>Demo</button>
                                </a>
                                <a href={item.github} target="_blank" rel="noreferrer noopener">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Projects;