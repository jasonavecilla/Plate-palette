import React from "react";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section
      className='h-full w-full bg-center bg-cover'
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/delicious-healthy-asian-food-gray-textured-background-with-copy-space_24972-1024.jpg?w=1380&t=st=1698725818~exp=1698726418~hmac=c4d355d7eec4085ee5f04be0e49ff3d0afce8df8dc399256b4fd9fbab1b38ded)`,
      }}
    >
      <div className='container h-[70vh] w-[80%] mx-auto  flex items-center justify-center lg:justify-start'>
        <div className='bg-white w-fit p-5 rounded ring-8 max-w-prose'>
          <h1 className='text-xl md:text-3xl font-bold mb-3'>Vegetarian Pho</h1>
          <p className='text-sm md:text-lg mb-3'>
            Vegetarian pho is a Vietnamese noodle soup that offers a plant-based twist on the classic beef pho. It features a flavorful and aromatic vegetable broth infused with traditional pho spices like star anise and cinnamon. The soup is served with rice noodles, and it's generously topped with
            an assortment of fresh vegetables, tofu, and herbs.
          </p>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='w-10 h-10 rounded-full bg-red-300'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
