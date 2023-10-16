import React from 'react'

// credit blog section from https://preline.co/examples/blog-sections.html

export default function Card({blog}) {
    return (
      <>
    
        {/* <!-- Card --> */}
        <a className="group sm:relative sm:block" href="#">

          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:h-[350px] sm:before:absolute sm:before:inset-x-0 sm:before:w-full sm:before:h-full sm:before:bg-gradient-to-t sm:before:from-gray-900/[.7] sm:before:z-[1]">
            <img className="w-full h-full absolute top-0 left-0 object-cover" src={blog.image} alt={blog.title}/>
          </div>
    
          <div className="grow">
            <div className="p-4 flex flex-col h-full sm:p-6 ">
          
              <h3 className="text-lg sm:text-2xl font-semibold text-blue-600 group-hover:text-blue-500 sm:text-white sm:group-hover:text-white/[.8] sm:absolute sm:bottom-16  sm:z-10 ">
                {blog.title}
              </h3>
              
              <p className="mt-2 text-blue-600 sm:hidden">
                {blog.summary}
              </p>
    
              <div className="mt-5 sm:mt-auto sm:absolute sm:top-5  sm:z-10">
                {/* <!-- Avatar --> */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-[2.875rem] w-[2.875rem] rounded-full sm:border-2 sm:border-white object-cover" src={blog.avatar} alt={blog.author}/>
                  </div>
                  <div className="ml-2.5 sm:ml-4">
                    <h4 className="font-semibold text-blue-600 sm:text-white">
                      {blog.author}
                    </h4>
                    <p className="text-xs text-blue-500 sm:text-white/[.8]">
                     {blog.date}
                    </p>
                  </div>
                </div>
                {/* <!-- End Avatar --> */}
              </div>

            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
    
      </>
    )
}
