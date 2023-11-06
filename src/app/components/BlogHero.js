import React from "react";

export default function BlogHero() {
  return (
    <section
      className='h-full w-full bg-center bg-cover'
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className='container h-[70vh] w-[80%] mx-auto  flex items-center justify-center lg:justify-start'>
        <div className='bg-white w-fit p-5 rounded ring-8 max-w-prose'>
          <h1 className='text-xl text-black dark:text-white md:text-3xl font-bold font-quicksand mb-3'>Spring Rolls</h1>
          <p className='text-sm md:text-lg mb-5 text-black dark:text-white'>
            Spring rolls, those delightful, translucent bites, have captured taste buds worldwide for centuries. Their rich history spans cultures and offers diverse flavors. Whether you love Asian cuisine or crave a light, refreshing snack, spring rolls are your go-to choice.
          </p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div
                className='w-12 h-12 rounded-full bg-center bg-cover'
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/2587112/pexels-photo-2587112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              ></div>
              <div className='text-sm md:text'>
                <p className='text-black dark:text-white'>Mary Dickson</p>
                <p className='text-black dark:text-white'>October 31, 2023</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-full text-black dark:text-white bg-slate-200 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer'>
                <i className='fa-solid fa-share-nodes'></i>
              </div>
              <div className='w-10 h-10 rounded-full text-black dark:text-white bg-slate-200 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer'>
                <i className='fa-solid fa-bookmark'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
