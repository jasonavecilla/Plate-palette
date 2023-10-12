"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchFilter from "./components/SearchFilter";
import Blog from "./components/Blog";
import FAQAccordian from "./components/FAQAccordian";
import Newsletter from "./components/Newsletter";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Navbar />
      <SearchFilter />
      <Blog />
      <Newsletter />
      <FAQAccordian />
    </>
  );
}
