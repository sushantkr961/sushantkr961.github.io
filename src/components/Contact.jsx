import React from "react";
import { BsFillPersonLinesFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white" >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Contact </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className=" flex justify-center items-center">
        <div className="mr-20 text-gray-300 text-lg mb-8">
            <li className="flex font-bold gap-3 mb-10"><BsFillTelephoneFill color="#1970F1" fontSize="25px"/> +91 7544909637</li>
            <a className='flex font-bold gap-3 mb-10' href="mailto:sushantonly961@gmail.com" target="_blank" rel="noreferrer noopener"><HiMail color="#1970F1" fontSize="25px" /> sushantonly961@gmail.com </a>
            <a href="https://maps.app.goo.gl/rabJmcs6zaJs2HaY6" target="_blank" rel="noreferrer noopener" className="flex font-bold gap-3 mb-24"> <ImLocation color="#1970F1" fontSize="25px" /> Patna,Bihar</a>
            <div className="flex justify-evenly">
              <a className='flex font-bold gap-3' href="https://www.linkedin.com/in/sushantkr961/" target="_blank" rel="noreferrer noopener"><FaLinkedin color="#1970F1" fontSize="30px" /></a>
              <a className='flex font-bold gap-3' href="https://github.com/sushantkr961" target="_blank" rel="noreferrer noopener"><FaGithub color="#1970F1" fontSize="30px" /></a>
              <a className='flex font-bold gap-3' href="https://drive.google.com/uc?id=1vgTTQpxYPYJ22vHrKxWeDOwul_pDONSd&export=download" target="_blank" rel="noreferrer noopener"><BsFillPersonLinesFill color="#1970F1" fontSize="30px" /></a>
            </div>
          </div>
          <form action="https://getform.io/f/a2faa1c8-8f78-4e02-8bed-5379f15866dc" method="POST" className=" flex flex-col w-full md:w-1/2" >
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"> Let's talk </button>
          </form>
        </div>
      </div>
      <p className="text-xs text-gray-300 text-center">Created by Sushant Kumar</p>
    </div>
  );
};

export default Contact;
