import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/logoW1.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300 shadow-md shadow-[#040c16]'>
        <div className='m-5'>
            <img src={Logo} alt="Logo" style={{width: '50px'}} />
        </div>

        {/* menu */}
            <ul className='hidden lg:flex mr-5 text-lg font-medium'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home 
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='resume' smooth={true} duration={500}>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger icon */}
        <div onClick={handleClick} className='lg:hidden z-10'>
            {!nav ? <FaBars fontSize='30px' /> : <FaTimes fontSize='30px' />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home 
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
                    Resume
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#0077B5]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/sushantkr961/" target="_blank" rel="noreferrer noopener">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/sushantkr961" target="_blank" rel="noreferrer noopener">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e65c4f]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:sushantonly961@gmail.com" target="_blank" rel="noreferrer noopener">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#974063]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://drive.google.com/uc?id=1vgTTQpxYPYJ22vHrKxWeDOwul_pDONSd&export=download" target="_blank" rel="noreferrer noopener">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f4c75]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://twitter.com/sushantkr961" target="_blank" rel="noreferrer noopener">
                        Twitter <FaTwitter size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;