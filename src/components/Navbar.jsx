import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from '../styles';
import { navLinks } from "../constants";
import logo from '../assets/logo.png'
import downloadcv from '../assets/downloadcv.png'
import resume from '../assets/Resume.pdf'

import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX} 
        w-full flex items-center py-5 fixed top-0 z-20 
        bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >
            <img style={{width: 60, height:40}} src={logo} alt='logo' className='w-9 h-9 object-contain' />
            {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Shashank | &nbsp;
            <span className='sm:block hidden'>Kumar</span>
          </p> */}
        </Link>

        <div className="flex fex-shrink-0 items-center">
      {/* <a href=""><img className="m-2 w-11" src= {logo} alt="logo" /></a> */}
    </div>
     <div className="flex items-center justify-center gap-5 text-2xl">
            {/* <a href={resume} download='resume'>
              <img style= {{ width: 150, height: 28 }} className="m-2 w-11" src= {img2} alt="logo" />
            </a> */}
            <a href={resume} download='resume'>
              <img style= {{ width: 110, height: 24 }} className="m-2 w-11" src= {downloadcv} alt="logo" />
            </a>

      <a href="https://www.linkedin.com/in/theshashankkumar/" target="_blank">
        <FaLinkedin/> </a>
      <a href="https://github.com/s7sidofficial" target="_blank">
        <FaGithub/> </a>
      <a href="https://discord.com/users/988818310722359366" target="_blank">
        <BsDiscord/> </a>
      <a href="https://www.instagram.com/s7_sid.official/" target="_blank">
        <FaInstagram/> </a>
        
    </div> 


        {/* <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul> */}

        {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar