"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function DarkMode() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className="relative flex items-center w-[48px] h-[24px] border border-gray-500 border-solid rounded-full cursor-pointer"
      onClick={toggle}
    >
      <div>🌙</div>
      <div>☀️</div>
      <div
        className="absolute w-[20px] h-[18px] rounded-full bg-gray-600"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
