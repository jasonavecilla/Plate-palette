import React, { useContext } from "react";


export default function NutritionRecipeMain() {

  return (
    <section className="flex flex-col">
      <div className="font-bold text-xl mb-7 uppercase">Nutrition</div>
      <div
        className="flex
           bg-gray-200
        p-2"
      >
        <div className="w-1/2">
          <span>Cholesterol</span>
        </div>
        <div className="w-1/2">
          <span>11mg</span>
        </div>
      </div>
      <div className="flex p-2">
        <div className="w-1/2">
          <span>Carbohydrates</span>
        </div>
        <div className="w-1/2">
          <span>44g</span>
        </div>
      </div>
      <div
        className="flex
           bg-gray-200
        p-2"
      >
        <div className="w-1/2">
          <span>Sodium</span>
        </div>
        <div className="w-1/2">
          <span>229mg</span>
        </div>
      </div>
      <div className="flex p-2">
        <div className="w-1/2">
          <span>Protein</span>
        </div>
        <div className="w-1/2">
          <span>12g</span>
        </div>
      </div>
      <div
        className="flex
           bg-gray-200
        p-2"
      >
        <div className="w-1/2 ">
          <span>Fat</span>
        </div>
        <div className="w-1/2">
          <span>18g</span>
        </div>
      </div>
      <div className="flex p-2">
        <div className="w-1/2 ">
          <span>Calories</span>
        </div>
        <div className="w-1/2">
          <span>389 calories</span>
        </div>
      </div>
    </section>
  );
}
