const mockData2 = [
  {
    id: "n1",
    author: "Michael Ford",
    description:
      "Spaghetti Aglio e Olio is a classic Italian pasta dish known for its simple yet incredibly flavorful preparation. It consists of al dente spaghetti noodles tossed with sautéed garlic, red pepper flakes, and extra virgin olive oil, creating a delectable and aromatic combination that's both quick to make and a true taste of Italy.",
    image:
      "https://images.unsplash.com/photo-1673442635965-34f1b36d8944?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Spaghetti Aglio e Olio",
    serves: 2,
    difficulty: "Easy",
    ingredients: [
      "200g spaghetti",
      "4 cloves garlic, thinly sliced",
      "1/2 teaspoon red pepper flakes (adjust to taste)",
      "1/4 cup extra-virgin olive oil",
      "Salt, to taste",
      "Freshly ground black pepper, to taste",
      "2 tablespoons fresh parsley, chopped",
      "Grated parmesan cheese for garnish (optional)",
    ],
    procedure: [
      "Cook the spaghetti in a large pot of salted boiling water according to package instructions until al dente. Drain and set aside.",
      "While the pasta is cooking, heat the olive oil in a large skillet over low heat. Add the sliced garlic and red pepper flakes. Cook, stirring occasionally, until the garlic turns golden brown. Be careful not to burn the garlic, as it can become bitter.",
      "Add the cooked and drained spaghetti to the skillet with the garlic and oil. Toss to coat the pasta with the infused oil. Season with salt and black pepper to taste.",
      "Remove from heat and garnish with chopped fresh parsley. You can also sprinkle some grated parmesan cheese on top if desired.",
      "Serve immediately and enjoy!",
    ],
  },
];

import Image from "next/image";



export default function RecipeImage() {

  const mockData2 = [
    {
      id: "n1",
      author: "Michael Ford",
      description:
        "Spaghetti Aglio e Olio is a classic Italian pasta dish known for its simple yet incredibly flavorful preparation. It consists of al dente spaghetti noodles tossed with sautéed garlic, red pepper flakes, and extra virgin olive oil, creating a delectable and aromatic combination that's both quick to make and a true taste of Italy.",
      image:
        "https://images.unsplash.com/photo-1673442635965-34f1b36d8944?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Spaghetti Aglio e Olio",
      serves: 2,
      difficulty: "Easy",
      ingredients: [
        "200g spaghetti",
        "4 cloves garlic, thinly sliced",
        "1/2 teaspoon red pepper flakes (adjust to taste)",
        "1/4 cup extra-virgin olive oil",
        "Salt, to taste",
        "Freshly ground black pepper, to taste",
        "2 tablespoons fresh parsley, chopped",
        "Grated parmesan cheese for garnish (optional)",
      ],
      procedure: [
        "Cook the spaghetti in a large pot of salted boiling water according to package instructions until al dente. Drain and set aside.",
        "While the pasta is cooking, heat the olive oil in a large skillet over low heat. Add the sliced garlic and red pepper flakes. Cook, stirring occasionally, until the garlic turns golden brown. Be careful not to burn the garlic, as it can become bitter.",
        "Add the cooked and drained spaghetti to the skillet with the garlic and oil. Toss to coat the pasta with the infused oil. Season with salt and black pepper to taste.",
        "Remove from heat and garnish with chopped fresh parsley. You can also sprinkle some grated parmesan cheese on top if desired.",
        "Serve immediately and enjoy!",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-5 mt-10   ">
      <div className=" pl-0 md:pl-10 flex-col md:flex-row md:gap-x-10 flex  ">
        <div className=" xs:w-full lg:w-1/2  md:w-1/2 flex flex-shrink-0">
          <img
            src={mockData2[0].image}
            className=" bg-cover "
            alt="spaghetti"
          />
        </div>
        <div className="flex flex-col gap-y-8 pt-10 p-8 md:p-0 w-full h-full max-w-lg ">
          <div>
            <p className="font-bold text-xl">{mockData2[0].name}</p>
          </div>
          <div className=" banner ">
            <p className="font-base text-md  ">{mockData2[0].description}</p>
          </div>
          <div className="flex md:flex-row md:gap-x-24 md:pl-5 md:divide-x justify-center items-center p-5 max-w-lg">
            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-clock-exclamation"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20.986 12.502a9 9 0 1 0 -5.973 7.98" />
                <path d="M12 7v5l3 3" />
                <path d="M19 16v3" />
                <path d="M19 22v.01" />
              </svg>

              <div className="gap-y-10 whitespace-nowrap">
                <p className="font-sans-serif font-medium text-lg  text-center">
                  Active Time
                </p>
                <p className="font-sans-serif text-base  text-center">
                  20 mins
                </p>
              </div>
            </div>
            <div className="px-5 flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-clock-check"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
                <path d="M12 7v5l3 3" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
              <div className="gap-y-10 whitespace-nowrap">
                <p className="font-sans-serif font-medium text-lg  text-center">
                  Total Time
                </p>
                <p className="font-sans-serif text-base  text-center">
                  20 mins
                </p>
              </div>
            </div>
            <div className="px-5 flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <div className="gap-y-10 whitespace-nowrap">
                <p className="font-sans-serif font-medium text-lg  text-center">
                  Serving
                </p>
                <p className="font-sans-serif text-base  text-center">4</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-sans-serif text-md font-md md:pt-6 md:pb-3">
              Created by {mockData2[0].author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
