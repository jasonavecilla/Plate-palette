import React from "react";
import Card from "./Card";

const blogData = [
  {
    image: "https://source.unsplash.com/OW_7yIgVXz0",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    date: "Oct 1, 2023",
    author: "John Smith",
    title: "Marvelous macarons",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    image: "https://source.unsplash.com/MytHEJlzdcM",
    avatar: "https://source.unsplash.com/mEZ3PoFGs_k",
    date: "Sept 16, 2023",
    author: "Jane Doe",
    title: "Healthy fruit pancakes",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    image: "https://source.unsplash.com/4LZPmKbgQiQ",
    avatar: "https://source.unsplash.com/iFgRcqHznqg",
    date: "Sept 3, 2023",
    author: "Michael Jones",
    title: "Homemade Burgers",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    image: "https://source.unsplash.com/a-couple-of-bowls-of-food-on-a-table-QCnvLhKv4is",
    avatar: "https://source.unsplash.com/LaK153ghdig",
    date: "Aug 24, 2023",
    author: "Claire Fraser",
    title: "Fresh and Tasty Pho",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    image: "https://images.pexels.com/photos/718739/pexels-photo-718739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatar: "https://images.pexels.com/photos/8209334/pexels-photo-8209334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "June 23, 20223",
    author: "Dakota Kelly",
    title: "Good Old-Fashioned Pancakes",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    image: "https://sudachirecipes.com/wp-content/uploads/2021/11/homemade-miso-soup-thumb.png",
    avatar: "https://images.pexels.com/photos/3763155/pexels-photo-3763155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "July 1, 2023",
    author: "Juliana Hale",
    title: "Miso Noodle Soup",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    image: "https://images.pexels.com/photos/14016727/pexels-photo-14016727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatar: "https://images.pexels.com/photos/17756805/pexels-photo-17756805/free-photo-of-portrait-of-a-young-beautiful-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "July 15, 2023",
    author: "Kenzie Cook",
    title: "Greek Couscous Salad",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35XFXC1VLwnJImg06BMUQDs71pSQAIqUmPIaRRmcuWXXyHVjKhW0RgqZx_lJhGoFvZ2A&usqp=CAU",
    avatar: "https://images.pexels.com/photos/14169903/pexels-photo-14169903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "September 4, 2023",
    author: "Brenda Venable",
    title: "Chicken Fra Diovolo",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

function Blog() {
  const blogElements = blogData.map((blog) => <Card key={blog.title} blog={blog} />);

  return (
    <>
      {/* <!-- Card Blog --> */}
      <div className='max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10'>
        {/* <!-- Title --> */}
        <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>Explore Latest Blog Posts</h2>
          <p className='mt-1 dark:text-white'>Discover game-changing flavours and make the most from the recipes brought to you by PlatePalette.</p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 dark:text-white'>{blogElements}</div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
}

export default Blog;
