"use client";

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

export default function About() {
  return (
    <section className="mb-20">
      <main className="">
        {/* Hero section */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-6 pb-32 pt-36 sm:pt-60 lg:px-4 lg:pt-32">
              <div className="mx-auto max-w-xl gap-x-10 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-lg lg:shrink-0 xl:max-w-lg">
                  <h1 className="text-2xl font-bold tracking-tight text-yellowgreen-600 dark:text-white sm:text-2xl">
                    We’re changing the way people prepare food.
                  </h1>
                  <p className="relative mt-6 text-md leading-8 dark:text-white sm:max-w-md lg:max-w-none">
                    Our mission is to empower people to explore, create, and
                    enjoy delicious, homemade meals through our recipe app. We
                    are dedicated to providing a user-friendly platform that
                    offers a diverse range of recipes, supports healthy eating
                    choices, and promotes culinary creativity. Our goal is to
                    inspire and assist individuals in their culinary journeys,
                    fostering a deeper connection with food and cooking, and
                    ultimately enhancing their overall well-being.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1617389818199-097c84c783f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-5xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-yellowgreen-600 dark:text-white sm:text-2xl">
              Our values
            </h2>
            <p className="mt-6 text-md leading-8 dark:text-white">
              From everyday staples to exotic specialties, we offer a wide array
              of fresh, seasonal ingredients, inspiring your culinary creativity
              and guaranteeing you find the perfect components for your dishes.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-sm leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-yellowgreen-600">
                  {value.name}
                </dt>
                <dd className="mt-1 dark:text-white">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </section>
  );
}
