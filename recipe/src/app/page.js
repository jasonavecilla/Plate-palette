"use client";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { News_Cycle } from "next/font/google";
import Newsletter from "./components/Newsletter";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Navbar />
      <Newsletter />
      <Footer />
    </>
  );
}
