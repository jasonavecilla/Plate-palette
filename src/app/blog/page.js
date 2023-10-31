import React from "react";
import BlogHero from "../components/BlogHero";
import Blog from "../components/BlogItems";

export default function page() {
  return (
    <section>
      <BlogHero />
      <Blog />
    </section>
  );
}
