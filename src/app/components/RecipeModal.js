import NutritionTable from "./NutritionTable";

function RecipeModal({ recipe, rating, numReviews }) {
  const categoryElements = recipe.topics.map((topic, index) => (
    <span
      key={index}
      className="mr-1 text-xs border bg-gray-400 rounded-full p-1"
    >
      {topic.name}
    </span>
  ));

  return (
    <>
      <div
        id={`hs-scroll-inside-body-modal-${recipe.slug}`}
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto "
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
          <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl ">
            <div className="p-4 overflow-y-auto">
              <div>
                {/* image */}
                <img
                  src={recipe.thumbnail_url}
                  className="object-cover w-full h-44 mb-2 rounded-lg"
                />

                <div className="sm:grid sm:grid-cols-3 ">
                  <div className="sm:col-span-2">
                    {/* title */}
                    <h3 className="text-2xl font-semibold text-gray-800  mb-1 ">
                      {recipe.name}
                    </h3>
                  </div>

                  {/* category */}
                  <div className="flex flex-wrap gap-1 mb-2 sm:row-start-2 sm:col-span-3 ">
                    {categoryElements}
                  </div>

                  <div className="flex gap-2 sm:col-start-3 mb-2 justify-self-end">
                    {/* time */}
                    <div className="flex flex-col text-sm justify-center items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="icon icon-tabler icon-tabler-clock" 
                      width="30" 
                      height="30" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                      <p>
                        {recipe.total_time_minutes
                          ? recipe.total_time_minutes + " mins"
                          : "- mins"}{" "}
                      </p>
                    </div>

                    {/* num serves */}
                    <div className="flex flex-col text-sm justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-users"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#000000"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                      <p>Serves {recipe.num_servings}</p>
                    </div>
                  </div>
                </div>

                <div className="flex  gap-2 flex-row justify-between">
                  <div className="flex flex-col gap-2">
                    {/* author */}
                    <p className="text-sm">
                      {recipe.credits[0].name
                        ? recipe.credits[0].name
                        : " anonymous"}
                    </p>

                    {/* star */}
                    <div className="flex  text-xs">
                      <i className="fa-solid fa-star text-yellow-500 mr-[6px]"></i>
                      <p>
                        {rating}({numReviews})
                      </p>
                    </div>
                  </div>
                </div>

                {/* nutrition table */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    Nutrition
                  </h3>
                  <NutritionTable nutrition={recipe.nutrition} />
                </div>

                {/* ingredients */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    Ingredients
                  </h3>
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
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    Procedure
                  </h3>
                  <ul>
                    {recipe.instructions.map((item, index) => (
                      <li key={index} className="mt-1 text-gray-800 ">
                        {item.position}. {item.display_text}
                      </li>
                    ))}
                  </ul>
                  <div>
                    {/* video link */}
                    <div className="relative mt-5 flex justify-center items-center ">
                      <a
                        href={recipe.original_video_url}
                        target="_blank"
                        className="hover:opacity-80 "
                      >
                        <img
                          src={recipe.thumbnail_url}
                          className="object-cover w-full h-32  rounded-lg  "
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="gray"
                              d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4l-8 4V6z"
                            />
                          </svg>
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
    </>
  );
}

export default RecipeModal;
