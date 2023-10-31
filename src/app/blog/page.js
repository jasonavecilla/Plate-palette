import React from "react";
import BlogHero from "../components/BlogHero";
import Blog from "../components/BlogItems";
import Newsletter from "../components/Newsletter";

export default function page() {
  return (
    <section>
      <BlogHero />
      <Blog />
      <div className='-my-10'>
        <Newsletter />
      </div>
    </section>
  );
}
