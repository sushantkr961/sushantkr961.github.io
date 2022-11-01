import React from 'react';
import profilePic from '../assests/sushant.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 font-medium'>
      
      <div className='flex flex-col justify-center items-center w-full h-full border'>
      <div>
        <img src={profilePic} alt="dp" className='rounded-full w-[200px] mb-3 m-auto' />
      </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 border'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Sushant Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage them to solve real-life problems ✨. I'm currently into Web Development 🕸️ and working on my Data Structures and Algorithms 🤓.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;