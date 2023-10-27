"use client";

import React from "react";
import { useState } from "react";
import logo from "../../../public/assets/logo.svg"
import menu from "../../../public/assets/menu.svg"
import menuClose from "../../../public/assets/menu-close.svg"
import Image from "next/image";



export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" sticky top-0 z-50 w-full bg-white  ">
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8 pb-9 pt-5 ">
        <div>
          <div className="flex items-center justify-between">
            <a href="/">
              <div className="flex flex-wrap drop-shadow-xl">
                <Image src={logo} alt="Logo" />
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src={menu} alt="menu" />
                ) : (
                  <Image src={menuClose} alt="menuClose" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pr-24 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-Brown hover:text-black font-medium text-base">
                <a href="/">HOME</a>
              </li>
              <li className="text-Brown hover:text-black font-medium text-base">
                <a href="/recipe">RECIPE</a>
              </li>
              <li className="text-Brown hover:text-black font-medium text-base">
                <a href="/about">ABOUT US</a>
              </li>
              <li className="text-Brown hover:text-black font-medium text-base">
                <a href="/contact">CONTACT US</a>
              </li>
              <li className="text-Brown hover:text-black font-medium text-base">
                <a href="/blog">BLOG</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
