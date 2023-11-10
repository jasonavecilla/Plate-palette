import React from "react";
import Card from "./Card";


const blogData = [
  {
    image: "https://source.unsplash.com/OW_7yIgVXz0",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    date: "Oct 1, 2023",
    author: "John Smith",
    title: "Marvelous macarons",
    summary:
      "Dive into the world of exquisite sweets with John's guide to crafting the perfect macarons. Learn the art of achieving that delightful crunch and smooth, flavorful fillings that will leave your taste buds dancing.",
  },
  {
    image: "https://source.unsplash.com/MytHEJlzdcM",
    avatar: "https://source.unsplash.com/mEZ3PoFGs_k",
    date: "Sept 16, 2023",
    author: "Jane Doe",
    title: "Healthy fruit pancakes",
    summary:
      "Join Jane on a health-conscious culinary journey with her recipe for wholesome fruit pancakes. Discover a delightful balance of flavors and textures that make breakfast a nutritious and indulgent experience.",
  },
  {
    image: "https://source.unsplash.com/4LZPmKbgQiQ",
    avatar: "https://source.unsplash.com/iFgRcqHznqg",
    date: "Sept 3, 2023",
    author: "Michael Jones",
    title: "Homemade Burgers",
    summary:
      "Uncover the secrets to creating the juiciest homemade burgers with Michael's foolproof recipe. From selecting the right blend of meats to mastering the grill, elevate your burger game to a whole new level.",
  },
  {
    image:
      "https://source.unsplash.com/a-couple-of-bowls-of-food-on-a-table-QCnvLhKv4is",
    avatar: "https://source.unsplash.com/LaK153ghdig",
    date: "Aug 24, 2023",
    author: "Claire Fraser",
    title: "Fresh and Tasty Pho",
    summary:
      "Claire invites you to savor the fragrant aroma and rich flavors of her fresh pho recipe. Immerse yourself in the world of Vietnamese cuisine as you learn the art of preparing this comforting and nourishing dish.",
  },
];

function Blog() {
  const blogElements = blogData.map((blog) => (
    <Card key={blog.title} blog={blog} />
  ));

  return (
    <section>
      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Explore Latest Blog Posts
          </h2>
          <p className="mt-1 dark:text-white">
            Discover game-changing flavours and make the most from the recipes
            brought to you by PlatePalette.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 dark:text-white">
          {blogElements}
        </div>
      </div>
    </section>
  );
}

export default Blog;
