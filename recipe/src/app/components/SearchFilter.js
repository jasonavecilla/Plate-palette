import React from "react";

export default function SearchFilter() {
  return (
    <section>
      <form className="mx-auto mt-10 flex max-w-7xl gap-x-4 relative">
        <label htmlFor="text" className="sr-only">
          text address
        </label>
        <div className="relative flex-grow">
          <div className="relative">
            <input
              id="text"
              name="text"
              type="text"
              required
              className="w-full rounded-md border border-dark-400 bg-white px-3.5 py-3 pl-10 text-dark-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Search recipe"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              className="h-6 w-6 absolute left-3 top-3 text-dark-400"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>
        </div>

        <select className="w-[9%] bg-yellowgreen p-2 border rounded-md">
          <option disabled selected className="mr-2">
            Category
          </option>
          <option>Appetizers</option>
          <option>Salads</option>
          <option>Soups</option>
          <option>Desserts</option>
          <option>Beverages</option>
        </select>
        <select className="w-[8%] bg-yellowgreen p-2 border rounded-md">
          <option disabled selected className="">
            Sort by
          </option>
          <option>Sort by: Latest</option>
          <option>Sort by: Top Rated</option>
          <option>Sort by: Trending</option>
        </select>
      </form>
    </section>
  );
}
