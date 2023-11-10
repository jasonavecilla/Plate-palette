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
  {
    image:
      "https://images.pexels.com/photos/718739/pexels-photo-718739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatar:
      "https://images.pexels.com/photos/8209334/pexels-photo-8209334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "June 23, 20223",
    author: "Dakota Kelly",
    title: "Good Old-Fashioned Pancakes",
    summary:
      "Dakota shares a classic pancake recipe that stands the test of time. Indulge in the simplicity of golden, fluffy pancakes that evoke a sense of nostalgia and warmth, perfect for lazy Sunday mornings.",
  },
  {
    image:
      "https://sudachirecipes.com/wp-content/uploads/2021/11/homemade-miso-soup-thumb.png",
    avatar:
      "https://images.pexels.com/photos/3763155/pexels-photo-3763155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "July 1, 2023",
    author: "Juliana Hale",
    title: "Miso Noodle Soup",
    summary:
      "Warm your soul with Juliana's recipe for Miso Noodle Soup. Discover the umami-rich flavors of miso combined with the comfort of noodles, creating a bowl of nourishment that soothes both body and mind.",
  },
  {
    image:
      "https://images.pexels.com/photos/14016727/pexels-photo-14016727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatar:
      "https://images.pexels.com/photos/17756805/pexels-photo-17756805/free-photo-of-portrait-of-a-young-beautiful-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "July 15, 2023",
    author: "Kenzie Cook",
    title: "Greek Couscous Salad",
    summary:
      "Kenzie brings the vibrant flavors of the Mediterranean to your table with her Greek Couscous Salad. Immerse yourself in a refreshing combination of crisp vegetables, hearty couscous, and zesty dressing that screams summer.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35XFXC1VLwnJImg06BMUQDs71pSQAIqUmPIaRRmcuWXXyHVjKhW0RgqZx_lJhGoFvZ2A&usqp=CAU",
    avatar:
      "https://images.pexels.com/photos/14169903/pexels-photo-14169903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "September 4, 2023",
    author: "Brenda Venable",
    title: "Chicken Fra Diovolo",
    summary:
      "Join Brenda in creating a culinary masterpiece with her Chicken Fra Diavolo recipe. Experience the perfect balance of spicy and savory as you prepare this classic Italian dish that's sure to impress even the most discerning palates.",
  },
];

function BlogItems() {
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

export default BlogItems;
