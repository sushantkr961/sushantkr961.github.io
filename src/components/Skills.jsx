import React from 'react';
import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import expressJS from '../assests/expressJS.png';
import Javascript from '../assests/javascript.png';
import Mongo from '../assests/mongo.png';
import Node from '../assests/node.png';
import react from '../assests/react.png';
import tailwind from '../assests/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 font-medium' >
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 border border-yellow-700 pl-[150px]'>
                {/* catogries */}
                <div className=''>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Frontend</p>
                    <div className='mt-10 border border-green-900'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="html logo" />
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <img className='w-20 mx-auto' src={HTML} alt="html logo" />
                                <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <img className='w-20 mx-auto' src={HTML} alt="html logo" />
                                <p className='my-4'>TypeScript</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={tailwind} alt="html logo" />
                            <p className='my-4'>tailwindcss</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Backend</p>
                    <div className='mt-10 border border-green-900'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Javascript} alt="html logo" />
                            <p className='my-4'>JavaScript</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Mongo} alt="html logo" />
                            <p className='my-4'>Mongo DB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={expressJS} alt="html logo" />
                            <p className='my-4'>ExpressJS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="html logo" />
                            <p className='my-4'>Node Js</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={react} alt="html logo" />
                            <p className='my-4'>React</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Tools</p>
                    <div className='mt-10 border border-green-900'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;