import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import bg from '../assests/bg.png'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] font-medium'
    style={{ backgroundImage: `url(${bg})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'  }} 
    >
      
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sushant Kumar</h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full Stack Web Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Dedicated and efficient Full Stack Web Developer capable of writing Production-Ready Code Using React JS,Redux,and CSS on the Frontend and Node JS,Express JS,and Mongo DB on the Backend to build optimized applications. Passionate about Coding and learning new Technologies.</p>
          <div className='flex flex-row'>
            <a href="https://drive.google.com/file/d/1vgTTQpxYPYJ22vHrKxWeDOwul_pDONSd/view?usp=sharing" target="_blank" rel="noreferrer noopener">
            <button className='text-white group border-2 px-6 py-3 my-2 mr-5 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Resume 
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
            </button>
            </a>
            <a href="https://drive.google.com/uc?id=1Yk51owMojUN_AA-5i_7OCn1r4GIq5K_b&export=download" target="_blank" rel="noreferrer noopener">
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              Download Resume 
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
            </button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home;