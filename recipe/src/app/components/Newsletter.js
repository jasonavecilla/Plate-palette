export default function Newsletter() {
  return (
    <div
      className="bg-cover bg-center py-16 sm:py-24"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
      }}
    >
      <div className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Stay Updated with Our Latest Recipe.
      </div>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-white font-semibold">
        Join our newsletter to stay updated with our latest and most delicious
        recipes, culinary tips, and mouthwatering meal ideas delivered straight
        to your inbox!
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
  );
}
