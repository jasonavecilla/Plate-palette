import React from "react";

const values = [
  {
    name: "Quality Recipes",
    description:
      "Provide users with high-quality, tested, and diverse recipes that cater to various tastes and dietary preferences. Our recipes are carefully curated and tested to ensure they are easy to follow and result in delicious meals.",
  },
  {
    name: "Ingredient Variety",
    description:
      "Offer a wide range of fresh and seasonal ingredients to inspire users' culinary creativity. From everyday staples to exotic specialty items, our app ensures you can find the perfect ingredients for your recipes.",
  },
  {
    name: "User-Generated Content",
    description:
      "Encourage users to contribute their own recipes, cooking tips, and photos. Create a supportive community where home cooks and professional chefs can share their passion for food and help others discover new flavors and techniques.",
  },
  {
    name: "Cooking Techniques",
    description:
      "Provide comprehensive guidance on cooking techniques, from the basics to advanced skills. Our app empowers users to sharpen their culinary skills and try new cooking methods with confidence.",
  },
  {
    name: "Nutritional Information",
    description:
      "Offer detailed nutritional information for each recipe, including calorie counts, macronutrient breakdowns, and dietary labels. Help users make informed choices to meet their health and dietary goals.",
  },
  {
    name: "Meal Planning",
    description:
      "Support users in planning their weekly meals. Our app allows users to create meal plans, generate shopping lists, and save favorite recipes for quick access. Streamline the meal preparation process and reduce food waste.",
  },
];

export default function Values() {
  return (
    <section>
      {/* Values section */}
      <div className="mx-auto mt-32 max-w-5xl px-6 sm:mt-40 lg:px-8 mb-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-yellowgreen-600 text-black sm:text-3xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            From everyday staples to exotic specialties, we offer a wide array
            of fresh, seasonal ingredients, inspiring your culinary creativity
            and guaranteeing you find the perfect components for your dishes.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-yellowgreen-600">
                {value.name}
              </dt>
              <dd className="mt-1 text-black">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
