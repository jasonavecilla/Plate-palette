function RecipeModal({recipe, rating, numReviews}) {
  return (
    <>    
        <div id={`hs-scroll-inside-body-modal-${recipe.slug}`} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto ">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
                <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl ">
                    <div className="p-4 overflow-y-auto">
                        <div>
                            {/* image */}
                            <img src={recipe.thumbnail_url} className='object-cover w-full h-44 mb-2 rounded-lg' />

                            <div className=' sm:flex '>
                                {/* title */}
                                <h3 className="text-2xl font-semibold text-gray-800  mb-1 sm:w-2/3">{recipe.name}</h3>
                                <div className='flex gap-2 sm:w-1/3 sm:justify-end sm:items-start mb-2'>
                                    
                                    {/* time */}
                                    <div className='flex flex-col text-sm justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"/></svg>
                                        <p>{recipe.total_time_minutes ? recipe.total_time_minutes + ' mins' : '- mins' } </p>
                                    </div>
                                    
                                    {/* num serves */}
                                    <div className='flex flex-col text-sm justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                                        <p>Serves {recipe.num_servings}</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='flex  gap-2 flex-row justify-between'>  
                                <div className='flex flex-col gap-2'>
                                    {/* author */}
                                    <p className='text-sm'>{recipe.credits[0].name ? recipe.credits[0].name : ' anonymous' }</p>
                                    
                                    {/* star */}
                                    <div className='flex  text-xs'>
                                        <i className='fa-solid fa-star text-yellow-500 mr-[6px]'></i>
                                        <p>{rating}({numReviews})</p> 
                                    </div>  
                                </div>
                            </div>   

                            {/* ingredients */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mt-4">Ingredients</h3>
                                <ul>
                                {recipe.sections[0].components.map((item, index) => (
                                    <li key={index} className="mt-1 text-gray-800 list-none">
                                        {item.raw_text} 
                                    </li>
                                ))} 
                                </ul>                              
                            </div>

                            {/* procedure */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mt-4">Procedure</h3>
                                 <ul>  
                                {recipe.instructions.map((item, index) => (
                                    <li key={index} className="mt-1 text-gray-800 ">{item.position}. {item.display_text}</li> 
                                ))} 
                                </ul>   
                            <div>          
                                        
                            {/* video link */}
                            <div className='relative mt-5 flex justify-center items-center '>
                                <div>     
                                    <a href={recipe.original_video_url } target='_blank'>
                                        <div className=''>
                                            <img src={recipe.thumbnail_url} className='object-scale-down w-1/2 mx-auto rounded-lg  hover:opacity-80'/> 
                                        </div>
                                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><path fill="gray" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4l-8 4V6z" /></svg> 
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
  )
}

export default RecipeModal

