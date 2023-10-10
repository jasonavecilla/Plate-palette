/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        dark: {
          DEFAULT: "#212427",
          300: "#464D53",
          400: "#34383D",
          500: "#212427",
          600: "#070809",
          700: "#000000",
        },
        yellowgreen: {
          DEFAULT: "#D2DE32",
          300: "#E1E978",
          400: "#DAE455",
          500: "#D2DE32",
          600: "#AFBA1E",
          700: "#828A16",
        },
        olive: {
          DEFAULT: "#A2C579",
          300: "#CADEB2",
          400: "#B6D195",
          500: "#A2C579",
          600: "#87B452",
          700: "#6A903E",
        },
        peach: {
          DEFAULT: "#FFFFDD",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFFFDD",
          600: "#FFFFA5",
          700: "#FFFF6D",
        },
        blue: {
          DEFAULT: "#016A70",
          300: "#02B7C1",
          400: "#019098",
          500: "#016A70",
          600: "#013538",
          700: "#000101",
        },
      },
    },
  },
  plugins: [],
};
