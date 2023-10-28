import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

const SuggestedRecipe = ({ recipes, loading, error }) => {
  const imageUrls = [
    "https://www.ambitiouskitchen.com/wp-content/uploads/fly-images/27298/Monique-Turkey-Sloppy-Joes-1-500x375-c.jpg",
    "https://sweetpeaskitchen.com/wp-content/uploads/2010/10/Easy-Classic-Brown-Sugar-Meatloaf-og.jpg",
    "https://getinspiredeveryday.com/wp-content/uploads/2022/01/Slow-Cooker-Pot-Roast-Get-Inspired-Everyday-4.jpg",
    "https://www.thekitchenmagpie.com/wp-content/uploads/images/2023/05/parmesancrustedtilapiamakelandscape-1200x800.jpg",
    "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2020-12/5-ingredient-baked-chicken-teriyaki-recipe.jpeg",
    "https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/3/2/l328452833.jpg",
  ];

  const titles = [
    "Turkey Sloppy Joes",
    "Brown Sugar Meatloaf",
    "Slow Cooker Pot Roast",
    "Broiled Tilapia Parmasean",
    "Baked Teriyaki Chicken",
    "Zesty Slow Cooker Chicken",
  ];

  const ratings = [
    "5.0(24)",
    "3.0(94)",
    "4.2(29)",
    "5.0(24)",
    "3.0(94)",
    "4.2(29)",
  ];

  const authors = [
    "John Doe",
    "Jane Fritz",
    "Adam Lander",
    "John Doe",
    "Jane Fritz",
    "Adam Lander",
  ];
  const [heartClicks, setHeartClicks] = useState(
    Array(imageUrls.length).fill(false)
  );

  const handleHeartClick = (index) => {
    const newHeartClicks = [...heartClicks];
    newHeartClicks[index] = !newHeartClicks[index];
    setHeartClicks(newHeartClicks);
  };

  const generateGridItems = () => {
    if (recipes) {
      return recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ));
    } else {
      return imageUrls.map((imageUrl, index) => (
        <div key={index} className="relative flex flex-col">
          <div className="h-[100px] lg:h-40">
            <img
              src={imageUrl}
              className="rounded-xl h-full w-full object-cover"
              alt={`Recipe ${index}`}
            />
          </div>
          <div className="img-overlay h-[100px] lg:h-40 w-full absolute top-0 left-0 rounded-xl"></div>
          <div className="p-3 absolute top-0 right-0">
            <i
              className={`fa-solid fa-heart text-white hover:text-red-500 hover:cursor-pointer duration-200 ease-in-out ${
                heartClicks[index] ? "text-red-500" : ""
              }`}
              onClick={() => handleHeartClick(index)}
            ></i>
          </div>
          <div className="mt-[10px]">
            <h3 className="font-medium mb-5">{titles[index]}</h3>
            <div className="flex justify-between text-xs dark:text-white">
              <div className="flex items-center">
                <i className="fa-solid fa-star text-yellow-500 mr-[6px]"></i>
                <span>{ratings[index]}</span>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <>
      <section className="container mx-auto px-6 max-w-7xl my-20">
        <h1 className="text-center font-bold text-3xl">Discover Culinary Inspiration</h1>
        <div className="container mx-auto px-4 max-w-7xl mt-20">
          <div className="grid grid-cols-2 gap-7 lg:gap-10 md:grid-cols-3">
            {generateGridItems()}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuggestedRecipe;
