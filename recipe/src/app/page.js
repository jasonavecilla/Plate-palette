'use client'
import { useEffect } from 'react'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQAccordian from "./components/FAQAccordian"

export default function Home() {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <>
    <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Recipe
      </main>
      <FAQAccordian/>
      <Footer />
    </>
  );
}
