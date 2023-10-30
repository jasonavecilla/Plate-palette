import React from "react";
import FAQItem from "./FAQItem";

// credit to https://preline.co/examples/faq-sections.html

const faqData = [
  {
    question: "Explore the Home Screen",
    answer:
      "At the home screen of this site, you can see featured recipes, categories, search options, and blogs.",
  },
  {
    question: "Search for a Recipe",
    answer:
      "Use the search bar to look for a specific recipe or browse through categories to discover new ideas.",
  },
  {
    question: "Select a Recipe",
    answer:
      "Once you find a recipe you want to try, tap on it to access the detailed recipe page.",
  },
  {
    question: "View Recipe Details",
    answer:
      "On the recipe page, you'll see the recipe name, an image of the dish, and additional information. Review the list of ingredients and the step-by-step cooking instructions.",
  },
];

export default function FAQAccordian() {
  const faqElements = faqData.map((faq) => (
    <FAQItem key={faq.question} faq={faq} />
  ));

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            How to use this recipe app?
          </h2>
          <p className="mt-1 dark:text-white">
            A step-by-step guide on using this app
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="hs-accordion-group ">{faqElements}</div>
        </div>
      </div>
    </>
  );
}
