import React from 'react'

export default function FAQ({faq}) {

  return (
    <>
        <div className="hs-accordion hs-accordion-active:bg-peach-600 rounded-xl p-6 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-blue-700 transition hover:text-blue-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                {faq.question}
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-blue-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-blue-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
            <p className="text-blue-700">
                {faq.answer}
            </p>
            </div>
        </div>

    </>
  )
}

