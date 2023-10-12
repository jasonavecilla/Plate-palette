"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SlideShow from "./components/SlideShow";

import SearchFilter from "./components/SearchFilter";

import RecipeGrid from "./components/RecipeGrid";


export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Navbar />
      <SlideShow />
      <SearchFilter />
      <RecipeGrid />
      <Footer />
    </>
  );
}
