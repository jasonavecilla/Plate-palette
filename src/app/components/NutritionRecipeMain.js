import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function NutritionRecipeMain() {
  const { mode } = useContext(ThemeContext);
  return (
    <section className="flex flex-col">
      <div className="font-bold text-sm mb-7 uppercase">Nutrition</div>
      <div
        className={`flex ${
          mode === "dark" ? "bg-dark-500" : "bg-gray-200"
        } p-2`}
      >
        <div className="w-1/2 text-sm">
          <span>Sugar</span>
        </div>
        <div className="w-1/2 text-sm">
          <span>9g</span>
        </div>
      </div>
      <div className="flex p-2 text-sm">
        <div className="w-1/2 text-sm">
          <span>Carbohydrates</span>
        </div>
        <div className="w-1/2 text-sm">
          <span>9g</span>
        </div>
      </div>
      <div
        className={`flex ${
          mode === "dark" ? "bg-dark-500" : "bg-gray-200"
        } p-2`}
      >
        <div className="w-1/2 text-sm">
          <span>Fiber</span>
        </div>
        <div className="w-1/2 text-sm">
          <span>9g</span>
        </div>
      </div>
      <div className="flex p-2 text-sm">
        <div className="w-1/2">
          <span>Protein</span>
        </div>
        <div className="w-1/2 text-sm">
          <span>9g</span>
        </div>
      </div>
      <div
        className={`flex ${
          mode === "dark" ? "bg-dark-500" : "bg-gray-200"
        } p-2`}
      >
        <div className="w-1/2 ">
          <span>Fat</span>
        </div>
        <div className="w-1/2">
          <span>9g</span>
        </div>
      </div>
      <div className="flex p-2">
        <div className="w-1/2 text-sm">
          <span>Calories</span>
        </div>
        <div className="w-1/2 text-sm">
          <span>1000 calories</span>
        </div>
      </div>
    </section>
  );
}
