"use client";
import { useEffect } from "react";
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
      <SlideShow />
      <SearchFilter />
      <RecipeGrid />
      <Blog />
      <Newsletter />
      <FAQAccordian />
    </>
  );
}
