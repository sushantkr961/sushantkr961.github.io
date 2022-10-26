import React from 'react'
import profilePic from '../assests/sushant.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300'>
      <form method="POST" action="https://getform.io/f/a2faa1c8-8f78-4e02-8bed-5379f15866dc" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          {/* <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - sushantonly961@gmail.com</p> */}
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>

      <div className='ml-10'>
          <img src={profilePic} alt="self Pic" className='rounded-full w-[200px] mb-3 m-auto' />
            <ul className='flex flex-row mt-7'>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#0077B5] rounded-full'>
                <a href="https://www.linkedin.com/in/sushantkr961/" target="_blank" rel="noreferrer noopener"><FaLinkedin size={30} /></a>
              </li>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#333333] rounded-full ml-3'>
                <a href="https://github.com/sushantkr961" target="_blank" rel="noreferrer noopener"><FaGithub size={30} /></a>
              </li>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#0f4c75] rounded-full ml-3'>
                <a href="https://twitter.com/sushantkr961" target="_blank" rel="noreferrer noopener"><FaTwitter size={30} /></a>
              </li>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#e65c4f] rounded-full ml-3'>
                <a href="mailto:sushantonly961@gmail.com" target="_blank" rel="noreferrer noopener"><HiOutlineMail size={30} /></a>
              </li>
            </ul>
      </div>

    </div>
  )
}
