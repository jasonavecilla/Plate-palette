"use client";

import { useEffect } from "react";
import Contact from "../components/Contact";
import FAQAccordian from "../components/FAQAccordian";

export default function page() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Contact />
      <FAQAccordian />
    </>
  );
}
