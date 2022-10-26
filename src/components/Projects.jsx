import React from 'react';
import Naukri from '../assests/Naukri.jpeg';
import Orbitz from '../assests/Orbitz.jpeg';
import Jefit from '../assests/Jefit.jpeg';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                {/* <p className='py-6'>// Check out some of my recent projects</p> */}
            </div>

            {/* container for projects */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Naukri})`}} className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect for images */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* eslint-disable-next-line */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Naukri})`}} className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect for images */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* eslint-disable-next-line */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Naukri})`}} className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect for images */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* eslint-disable-next-line */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Naukri})`}} className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect for images */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* eslint-disable-next-line */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Naukri})`}} className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect for images */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* eslint-disable-next-line */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Naukri})`}} className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect for images */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* eslint-disable-next-line */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects;