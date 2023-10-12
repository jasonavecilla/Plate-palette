export default function Newsletter() {
  return (
    <div className="max-w-full mx-auto py-16 sm:py-24">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className=" bg-olive px-6 py-24 sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-dark sm:text-4xl font-quicksand">
            Stay Updated with Our Latest Recipe.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-dark-400 font-semibold font-quicksand">
            Join our newsletter to stay updated with our latest and most
            delicious recipes, culinary tips, and mouthwatering meal ideas
            delivered straight to your inbox!
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-yellowgreen px-3.5 py-2.5 text-sm font-semibold text-dark-700 shadow-sm hover:bg-yellowgreen-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
