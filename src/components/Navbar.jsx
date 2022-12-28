import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import logo from "./assets/image/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  // Ṩuͥຮhͣaͫnτkumar bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
  // SuͥรhͣaͫŇ†kumar
  return (
    <div className="flex justify-between lg:justify-around items-center  h-20 px-4 sticky top-0 z-[100] sm:w-full md:w-full 2xl:h-26 border-b-2 border-gray-200 bg-white">
      <div className="font-semibold">
        <h1 className="text-3xl md:text-5xl font-signature ml-2 2xl:text-5xl">Sushant Kr</h1>
        {/* <img src={logo} alt="logo" width="60px" className="" /> */}
      </div>
      <ul className="hidden lg:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-semibold hover:scale-105 duration-200 2xl:text-lg" >
            <Link to={link} smooth duration={500}> {link} </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 lg:hidden"> {nav ? <FaTimes size={30} /> : <FaBars size={30} />} </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} > {link} </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
