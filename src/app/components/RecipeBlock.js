import NutritionRecipeMain from "./NutritionRecipeMain";
import React, { useState, useEffect } from "react";

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
      "Cook the spaghetti in a large pot of salted boiling water according to package instructions until al dente. Drain and set aside.",
      "While the pasta is cooking, heat the olive oil in a large skillet over low heat. Add the sliced garlic and red pepper flakes. Cook, stirring occasionally, until the garlic turns golden brown. Be careful not to burn the garlic, as it can become bitter.",
      "Add the cooked and drained spaghetti to the skillet with the garlic and oil. Toss to coat the pasta with the infused oil. Season with salt and black pepper to taste.",
      "Remove from heat and garnish with chopped fresh parsley. You can also sprinkle some grated parmesan cheese on top if desired.",
      "Serve immediately and enjoy!",
    ],
  },
];

function CheckboxList({ instructions }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = instructions.map((item, index) => ({
      id: `step-${index}`,
      label: item,
      checked: false,
    }));

    setItems(newItems);
  }, [instructions]);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  return (
    <section className="container mx-auto px-12 max-w-7xl mt-20">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-x-10 px-5 md:px-2 gap-y-5 w-full h-full pb-2">

        {/* Procedure Part */}
        <div className="bg-gray-500 bg-opacity-10 md:order-first order-last col-span-2 w-full pb-20 pr-0 md:pr-10">
          <h1 className="uppercase pt-10 md:pt-5 px-5 font-bold text-xl mb-5">How to make it</h1>

          <div className="w-full">
            {items.map((item, index) => (
              <div key={item.id}>
                <div className="flex p-5 md:pl-10 pt-5 flex-row gap-x-2 md:gap-x-8">
                  {/* Checkbox*/}
                  <label>
                    <input 
                      type="checkbox" 
                      className="form-checkbox bg-blue border-4 border-olive-300 ring-offset-purple-500 rounded-full h-6 w-6 text-blue-500" 
                      checked={item.checked} 
                      onChange={() => handleCheckboxChange(item.id)} 
                    />
                  </label>

                  {/* Procedure */}
                  <div className={item.checked ? "text-gray-400" : "text-gray-900"}>
                    <div>
                      <h1 className="text-md font-medium mb-2"> 
                        STEP {index + 1} 
                      </h1>
                      <p className="text-sm mt-2 leading-relaxed"> 
                        {item.label} 
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="h-0.5 my-5 bg-gray-300 border-0 rounded ml-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Ingredient and Nutrition Part */}
        <div className="md:order-last order-first">
          {/* Ingredients Part */}
          <div>
            <h1 className="md:px-5 px-5 uppercase pt-10 md:pt-5 font-bold text-xl mb-5">Ingredients</h1>
            <ul className="p-5 text-base md:text-md">
              {mockData[0].ingredients.map((ingredient, index) => (
                <li 
                  className="text-dark font-light" 
                  key={index}
                >
                  {ingredient}
                  <hr className="h-0.5 my-5 pl-20 bg-gray-300 border-0"></hr>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Part */}
          <div className="px-5">
            <NutritionRecipeMain />
          </div>
        </div>

      </div>
    </section>
  );
}

export default function RecipeBlock() {
  return (
    <div>
      <br />
      <CheckboxList instructions={mockData[0].procedure} />
    </div>
  );
}

