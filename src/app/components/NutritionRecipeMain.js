// sample nutrition information only

import React from "react";
export default function NutritionRecipeMain() {
  return (
    <section className='flex flex-col'>
      <div className='font-bold text-xl mb-7 uppercase'>Nutrition</div>
      <div className='flex bg-gray-100 p-2'>
        <div className='w-1/2'>
          <span>Sugar</span>
        </div>
        <div className='w-1/'>
          <span>9g</span>
        </div>
      </div>
      <div className='flex p-2'>
        <div className='w-1/2'>
          <span>Carbohydrates</span>
        </div>
        <div className='w-1/2'>
          <span>9g</span>
        </div>
      </div>
      <div className='flex p-2 bg-gray-100'>
        <div className='w-1/2'>
          <span>Fiber</span>
        </div>
        <div className='w-1/2'>
          <span>9g</span>
        </div>
      </div>
      <div className='flex p-2'>
        <div className='w-1/2'>
          <span>Protein</span>
        </div>
        <div className='w-1/2'>
          <span>9g</span>
        </div>
      </div>
      <div className='flex p-2 bg-gray-100'>
        <div className='w-1/2 '>
          <span>Fat</span>
        </div>
        <div className='w-1/2'>
          <span>9g</span>
        </div>
      </div>
      <div className='flex p-2'>
        <div className='w-1/2 '>
          <span>Calories</span>
        </div>
        <div className='w-1/2'>
          <span>1000 calories</span>
        </div>
      </div>
    </section>
  );
}
