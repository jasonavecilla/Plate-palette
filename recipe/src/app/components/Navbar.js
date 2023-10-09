import React from "react";
import Image from "next/image";
import PlatePalette from "../assets/PlatePalette.svg";

export default function Navbar() {
  return (
    <div className="text-xl font-bold bg-gray-200">
      <div className="flex justify-between px-7 py-7">
        <div>
          <Image src={PlatePalette} alt="Plate Palette" />
        </div>
        <div>
          <ul className="text-gray-600 font-semibold font-quicksand  text-sm flex gap-x-10 pt-2 pr-16">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">RECIPE</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
