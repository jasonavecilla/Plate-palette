"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchFilter from "./components/SearchFilter";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Navbar />
      <SearchFilter />
      <Footer />
    </>
  );
}
