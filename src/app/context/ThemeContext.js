"use client"

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // Default to "light" if localStorage is not available

  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      // Check if localStorage is available (client side)
      const storedMode = localStorage.getItem("themeMode");
      if (storedMode) {
        setMode(storedMode);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
