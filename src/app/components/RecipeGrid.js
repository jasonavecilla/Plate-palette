import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

const RecipeGrid = ({ recipes, loading, error }) => {
  const imageUrls = [
    "https://www.ambitiouskitchen.com/wp-content/uploads/fly-images/27298/Monique-Turkey-Sloppy-Joes-1-500x375-c.jpg",
    "https://sweetpeaskitchen.com/wp-content/uploads/2010/10/Easy-Classic-Brown-Sugar-Meatloaf-og.jpg",
    "https://getinspiredeveryday.com/wp-content/uploads/2022/01/Slow-Cooker-Pot-Roast-Get-Inspired-Everyday-4.jpg",
    "https://www.thekitchenmagpie.com/wp-content/uploads/images/2023/05/parmesancrustedtilapiamakelandscape-1200x800.jpg",
    "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2020-12/5-ingredient-baked-chicken-teriyaki-recipe.jpeg",
    "https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/3/2/l328452833.jpg",
    "https://i.pinimg.com/1200x/6d/1e/72/6d1e72f3e53cf5c664bc6efaf54e823c.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/delish-slow-cooker-pulled-pork-horizontal-1539618655.png?crop=1.00xw:0.846xh;0,0.0907xh",
    "https://www.olivetomato.com/wp-content/uploads/2020/01/Greek-Lemon-Chicken-and-Potatoes-1.jpeg",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/Turkey-Posole_exps135726_CW132792D07_09_4b_RMS-5.jpg",
    "https://thecozycook.com/wp-content/uploads/2022/04/Baked-Mac-and-Cheese-f2.jpg",
    "https://www.recipetineats.com/wp-content/uploads/2020/10/General-Tsao-Chicken_1-SQ.jpg",
  ];

  const titles = [
    "Turkey Sloppy Joes",
    "Brown Sugar Meatloaf",
    "Slow Cooker Pot Roast",
    "Broiled Tilapia Parmasean",
    "Baked Teriyaki Chicken",
    "Zesty Slow Cooker Chicken",
    "Rosemary Ranch Chicken Kebabs",
    "Slow Cooker Pulled Pork",
    "Greek Lemon Chicken and Potatoes",
    "Turkey Posole Dinner",
    "Baked Macaroni and Cheese",
    "General Tso Chicken",
  ];

  const ratings = [
    "5.0(24)",
    "3.0(94)",
    "4.2(29)",
    "5.0(24)",
    "3.0(94)",
    "4.2(29)",
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
            <h3 className="font-medium mb-5 dark:text-white">{titles[index]}</h3>
            <div className="flex justify-between text-xs">
              <div className="flex items-center  dark:text-white">
                <i className="fa-solid fa-star text-yellow-500 mr-[6px]"></i>
                <span className="dark:text-white">{ratings[index]}</span>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <section className="container mx-auto px-4 max-w-5xl my-20">
      {loading ?  <Spinner /> 
      : error ? 
      <p className="text-center font-semibold">{error}</p> 
      :
      <div className="grid grid-cols-2 gap-7 lg:gap-10 md:grid-cols-3">
        {generateGridItems()}
      </div>}
    </section>
  );
};

export default RecipeGrid;
