"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import SlideShow from "./components/SlideShow";
=======
import SearchFilter from "./components/SearchFilter";
>>>>>>> 32eb1a1aea8a9437f0068b98023366c1d740ce20

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <SlideShow />
=======
      <SearchFilter />
>>>>>>> 32eb1a1aea8a9437f0068b98023366c1d740ce20
      <Footer />
    </>
  );
}
