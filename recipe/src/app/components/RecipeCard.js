import React from 'react'
import { useState } from 'react'
import RecipeModal from './RecipeModal'


function RecipeCard({recipe}) {

  const [isFav, setIsFav] = useState(false)

  const rating = (recipe.user_ratings.score * 5).toFixed(1)
  const numReviews = recipe.user_ratings.count_positive + recipe.user_ratings.count_negative

  return (
    <>
    <div className='relative flex flex-col hover:cursor-pointer ' >
        {/* image div */}
        <div className='h-[120px] lg:h-44' data-hs-overlay={`#hs-scroll-inside-body-modal-${recipe.slug}`}>
            <img src={recipe.thumbnail_url} className='rounded-xl h-full w-full object-cover ' alt={recipe.thumbnail_alt_text}   />
        </div>
        <div className='p-3 absolute top-0 right-0'>
            <i className={`fa-solid fa-heart  hover:text-red-500 hover:cursor-pointer duration-200 ease-in-out ${isFav ? "text-red-500" : "text-white"}`} onClick={() => setIsFav(prev => !prev)}></i>
        </div>
        <div className=' mt-[10px]' data-hs-overlay={`#hs-scroll-inside-body-modal-${recipe.slug}`}>
            <h3 className='font-medium mb-5' >{recipe.name}</h3>
            <div className='flex justify-between text-xs text-dark-400'>
            <div className='flex items-center'>
                <i className='fa-solid fa-star text-yellow-500 mr-[6px]'></i>
                <span>{rating}({numReviews})</span>
            </div>
            <span>by {recipe.credits[0].name ? recipe.credits[0].name : 'anonymous' }</span>
            </div>
        </div>
    </div>

    <RecipeModal recipe={recipe} rating={rating} numReviews={numReviews}/>
    </>
  )
}

export default RecipeCard