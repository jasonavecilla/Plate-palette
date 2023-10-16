"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SlideShow from "./components/SlideShow";

import SearchFilter from "./components/SearchFilter";
import Blog from "./components/Blog";
import FAQAccordian from "./components/FAQAccordian";
import Newsletter from "./components/Newsletter";
import RecipeGrid from "./components/RecipeGrid";
import { useState } from "react";


export default function Home() {

  const [recipes, setRecipes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log(recipes)

  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <SlideShow />
      <SearchFilter setRecipes={setRecipes} setLoading={setLoading} setError={setError}/>
      <RecipeGrid recipes={recipes} loading={loading} error={error}/>
      <Blog />
      <Newsletter />
      <FAQAccordian />
    </>
  );
}
