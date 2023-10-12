"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchFilter from "./components/SearchFilter";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Navbar />
      <SearchFilter />
      <RecipeGrid />
      <Footer />
    </>
  );
}
