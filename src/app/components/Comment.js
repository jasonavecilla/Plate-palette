import React from "react";

const commentData = [
  {
    id: 1,
    imgUrls:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jennifer Spark",
    dateTime: "July 24, 2023",
    content:
      "This recipe is fantastic! The flavors are perfectly balanced, and it's so easy to make. I added a bit of extra garlic for a more robust taste, and it turned out amazing. My family loved it!",
  },
  {
    id: 2,
    imgUrls:
      "https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    name: "Michael Ho",
    dateTime: "June 29, 2023",
    content:
      "I tried this recipe last night, and it was a hit. The step-by-step instructions were easy to follow, and the dish looked and tasted just like the picture. I'll definitely be making this again!",
  },
  {
    id: 3,
    imgUrls:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    name: "Hayley Lawrence",
    dateTime: "May 15, 2023",
    content:
      "This recipe is a game-changer! I'm not usually a fan of [ingredient], but this dish has completely converted me. The combination of spices is on point, and the presentation is restaurant-quality. Thank you for sharing!",
  },
];

export default function Comment() {
  return (
    <section className="my-10">
      <h1 className="text-center font-bold text-3xl">Join the Conversation</h1>
      <div className="dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold dark:text-white md:pl-0 pl-4">
              Discussion ({commentData.length})
            </h2>
          </div>
          <form className="mb-6 md:px-0 px-4" id="form">
            <div className="p-4 flex items-center justify-center mb-4 rounded-lg rounded-t-lg border border-gray-200 dark:border-gray-700">
              <textarea
                id="comment"
                rows="6"
                className="p-3 rounded-lg w-full text-sm text-gray-900 border-0 focus:ring-dark focus:outline-none"
                placeholder="Write a comment..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-dark bg-yellowgreen rounded-lg focus:ring-4 focus:ring-yellowgreen-300 dark:focus:ring-primary-900 hover:bg-yellowgreen-600"
            >
              Post comment
            </button>
          </form>
          {commentData.map((comment) => (
            <article
              key={comment.id}
              className="p-6 text-base rounded-lg dark:bg-gray-900"
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm dark:text-white font-semibold">
                    <img
                      className="mr-2 w-7 h-7 rounded-full"
                      src={comment.imgUrls}
                      alt={comment.name}
                    />
                    {comment.name}
                  </p>
                  <p className="text-sm dark:text-white">{comment.dateTime}</p>
                </div>
              </footer>
              <p className="dark:text-white">{comment.content}</p>

              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
