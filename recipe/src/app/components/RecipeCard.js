import React from 'react'
import { useState } from 'react'

function RecipeCard({recipe}) {

  const [isFav, setIsFav] = useState(false)

  return (
    <div className='relative flex flex-col'>
        {/* image div */}
        <div className='h-[120px] lg:h-44'>
            <img src={recipe.thumbnail_url} className='rounded-xl h-full w-full object-cover' alt={recipe.thumbnail_alt_text} />
        </div>
        <div className='img-overlay h-[120px] lg:h-44 w-full absolute top-0 left-0 rounded-xl'></div>
        <div className='p-3 absolute top-0 right-0'>
            <i className={`fa-solid fa-heart  hover:text-red-500 hover:cursor-pointer duration-200 ease-in-out ${isFav ? "text-red-500" : "text-white"}`} onClick={() => setIsFav(prev => !prev)}></i>
        </div>
        <div className=' mt-[10px]'>
            <h3 className='font-medium mb-5'>{recipe.name}</h3>
            <div className='flex justify-between text-xs text-dark-400'>
            <div className='flex items-center'>
                <i className='fa-solid fa-star text-yellow-500 mr-[6px]'></i>
                <span>{recipe.user_ratings.count_positive}</span>
            </div>
            <span>by {recipe.credits[0].name}</span>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard