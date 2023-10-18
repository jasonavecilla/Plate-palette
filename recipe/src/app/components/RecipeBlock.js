export default function RecipeBlock() {
  const mockData = [
    {
      id: "n1",
      name: "Spaghetti Aglio e Olio",
      serves: 2,
      difficulty: "Easy",
      ingredients: [
        "200g spaghetti",
        "4 cloves garlic, thinly sliced",
        "1/2 teaspoon red pepper flakes (adjust to taste)",
        "1/4 cup extra-virgin olive oil",
        "Salt, to taste",
        "Freshly ground black pepper, to taste",
        "2 tablespoons fresh parsley, chopped",
        "Grated parmesan cheese for garnish (optional)",
      ],
      procedure: [
        "1. Cook the spaghetti in a large pot of salted boiling water according to package instructions until al dente. Drain and set aside.",
        "2. While the pasta is cooking, heat the olive oil in a large skillet over low heat. Add the sliced garlic and red pepper flakes. Cook, stirring occasionally, until the garlic turns golden brown. Be careful not to burn the garlic, as it can become bitter.",
        "3. Add the cooked and drained spaghetti to the skillet with the garlic and oil. Toss to coat the pasta with the infused oil. Season with salt and black pepper to taste.",
        "4. Remove from heat and garnish with chopped fresh parsley. You can also sprinkle some grated parmesan cheese on top if desired.",
        "5. Serve immediately and enjoy!",
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-x-10 px-5 md:px-2  ">
        <div className="bg-gray-500 bg-opacity-10 md:order-first order-last col-span-2">
          <h1 className="font-quicksand uppercase pt-10 md:pt-5 px-5 font-bold text-2xl underline">
            Procedure
          </h1>
          <ul className=" p-5  font-sans-serif">
            {mockData[0].procedure.map((procedures, index) => (
              <li className="py-2" key={index}>
                {procedures}
              </li>
            ))}
          </ul>
        </div>
        <div className=" md:order-last order-first  ">
          <h1 className="font-quicksand uppercase pt-10 md:pt-5 font-bold text-2xl underline">
            Ingredients
          </h1>
          <ul className="list-disc p-5 font-sans-serif">
            {mockData[0].ingredients.map((ingredient, index) => (
              <li className="py-2" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
