import React from "react";

export default function BlogHero() {
  return (
    <section
      className='h-full w-full bg-center bg-cover'
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/delicious-healthy-asian-food-gray-textured-background-with-copy-space_24972-1024.jpg?w=1380&t=st=1698725818~exp=1698726418~hmac=c4d355d7eec4085ee5f04be0e49ff3d0afce8df8dc399256b4fd9fbab1b38ded)`,
      }}
    >
      <div className="container h-[70vh] w-[80%] mx-auto  flex items-center justify-center lg:justify-start">
        <div className="bg-white w-fit p-5 rounded ring-8 max-w-prose">
          <h1 className="text-xl text-black dark:text-white md:text-3xl font-bold font-quicksand mb-3">Vegetarian Pho</h1>
          <p className="text-sm md:text-lg mb-5 text-black dark:text-white">
            Vegetarian pho is a Vietnamese noodle soup that offers a plant-based twist on the classic beef pho. It features a flavorful and aromatic vegetable broth infused with traditional pho spices like star anise and cinnamon. The soup is served with rice noodles, and it's generously topped with
            an assortment of fresh vegetables, tofu, and herbs.
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
                <p className="text-black dark:text-white">Mary Dickson</p>
                <p className="text-black dark:text-white">October 31, 2023</p>
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