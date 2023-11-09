"use client";

import React from "react";
import { useState } from "react";
import { useContext } from "react";
import logo from "../../../public/assets/logo.svg";
import footerLogo from "../../../public/assets/footerLogo.svg";
import menu from "../../../public/assets/menu.svg";
import menuClose from "../../../public/assets/menu-close.svg";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";
import DarkMode from "./DarkMode";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { mode } = useContext(ThemeContext);

  return (
    <nav className='sticky top-0 z-50 w-full'>
      <div className='justify-between px-4 mx-auto  md:items-center md:flex md:px-8 pb-9 pt-5 '>
        <div>
          <div className='flex items-center justify-between'>
            <a href='/'>
              <div className='flex flex-wrap drop-shadow-xl'>
                <Image src={mode === "dark" ? footerLogo : logo} alt='Logo' />
              </div>
            </a>
            <div className='md:hidden'>
              <button className='p-2  rounded-md outline-none focus:border-gray-400 focus:border' onClick={() => setNavbar(!navbar)}>
                {navbar ? <Image src={menu} alt='menu' /> : <Image src={menuClose} alt='menuClose' />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pr-24 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 '>
              <li className='text-Brown font-medium hover:text-blue-300 text-base'>
                <a href='/'>HOME</a>
              </li>
              <li className='text-Brown font-medium hover:text-blue-300 text-base'>
                <a href='/recipe'>RECIPE</a>
              </li>
              <li className='text-Brown font-medium hover:text-blue-300 text-base'>
                <a href='/blog'>BLOG</a>
              </li>
              <li className='text-Brown font-medium hover:text-blue-300 text-base'>
                <a href='/about'>ABOUT US</a>
              </li>
              <li className='text-Brown font-medium hover:text-blue-300 text-base'>
                <a href='/contact'>CONTACT US</a>
              </li>

              <div className='flex space-x-4 mt-2'>
                <DarkMode />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
