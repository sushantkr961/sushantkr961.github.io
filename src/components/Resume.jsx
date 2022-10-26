import React from 'react';
import respic from '../assests/ResPic.jpeg';

const Resume = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f] font-medium'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Resume</p>
            </div>

            {/* container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${respic})`}} className='shadow-lg shadow-[#040c16] group conatainer rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500 w-[300px]'>
                {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Resume 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>View</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>Download</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Resume;