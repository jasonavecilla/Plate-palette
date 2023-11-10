"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";
import DarkMode from "./DarkMode";
import logo from "../../../public/assets/logo.svg";
import navbarLogo_dark from "../../../public/assets/navbarLogo_dark.svg";
import menu from "../../../public/assets/menu.svg";
import menuClose from "../../../public/assets/menu-close.svg";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollingDown(scrollTop > 0 && scrollTop > document.body.clientHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-filter backdrop-blur-sm ${
        scrollingDown ? "bg-gray-900 bg-opacity-30" : ""
      }`}
    >
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8 pb-6 pt-5">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex flex-wrap drop-shadow-xl">
              <Image
                src={mode === "dark" ? navbarLogo_dark : logo}
                alt="Logo"
              />
            </div>
          </a>
          <div className="md:hidden">
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
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

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-Brown font-medium hover:text-blue-300 md:text-base">
              <a href="/">HOME</a>
            </li>
            <li className="text-Brown font-medium hover:text-blue-300 md:text-base">
              <a href="/recipe">RECIPE</a>
            </li>
            <li className="text-Brown font-medium hover:text-blue-300 md:text-base">
              <a href="/blog">BLOG</a>
            </li>
            <li className="text-Brown font-medium hover:text-blue-300 md:text-base">
              <a href="/about">ABOUT US</a>
            </li>
            <li className="text-Brown font-medium hover:text-blue-300 md:text-base">
              <a href="/contact">CONTACT US</a>
            </li>
            <div className="flex space-x-4 mt-2">
              <DarkMode />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
