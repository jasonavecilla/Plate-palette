"use client";
import { useEffect } from "react";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { News_Cycle } from "next/font/google";
import Newsletter from "./components/Newsletter";

import SlideShow from "./components/SlideShow";

import SearchFilter from "./components/SearchFilter";
import Blog from "./components/Blog";
import FAQAccordian from "./components/FAQAccordian";
import Newsletter from "./components/Newsletter";
import RecipeGrid from "./components/RecipeGrid";


export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>

      <Navbar />
      <Newsletter />
      <Footer />

      <SlideShow />
      <SearchFilter />
      <RecipeGrid />
      <Blog />
      <Newsletter />
      <FAQAccordian />

    </>
  );
}
