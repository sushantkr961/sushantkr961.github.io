import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0 2xl:text-xl 2xl:font-semibold'>
      <ul>
        <li className='w-40 h-14 flex px-4 justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5] rounded-tr-lg 2xl:h-16'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/sushantkr961/" target="_blank" rel="noreferrer noopener"> Linkedin <FaLinkedin size={30} /></a>
        </li>
        <li className='w-40 h-14 px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] 2xl:h-16'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/sushantkr961" target="_blank" rel="noreferrer noopener"> Github <FaGithub size={30} /></a>
        </li>
        <li className='w-40 h-14 px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 2xl:h-16'>
          <a className='flex justify-between items-center w-full text-gray-300' href="mailto:sushantonly961@gmail.com" target="_blank" rel="noreferrer noopener"> Email <HiOutlineMail size={30} /></a>
        </li>
        <li className='w-40 h-14 px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#974063] 2xl:h-16'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/uc?id=14Qq1p4eUGvDNjziaUtVvT7HynPCK1jtx&export=download" target="_blank" rel="noreferrer noopener"> Resume <BsFillPersonLinesFill size={30} /></a>
        </li>
        <li className='w-40 h-14 px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f4c75] rounded-br-lg 2xl:h-16'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/sushantkr961" target="_blank" rel="noreferrer noopener"> Twitter <FaTwitter size={30} /></a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
