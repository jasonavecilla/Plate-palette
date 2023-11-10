"use client";

import React, { useEffect } from "react";
import BlogHero from "../components/BlogHero";
import Blog from "../components/BlogItems";
import Newsletter from "../components/Newsletter";
import FAQAccordian from "../components/FAQAccordian";

export default function page() {
  useEffect(() => {
    import("preline");
  }, []);
  
  return (
    <section>
      <BlogHero />
      <Blog />
      <div className="-my-10">
        <Newsletter />
        <FAQAccordian />
      </div>
    </section>
  );
}
