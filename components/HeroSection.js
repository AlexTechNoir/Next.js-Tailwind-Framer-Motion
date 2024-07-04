import React from 'react'

export default function HeroSection() {
  return (
    <div className="
      row-start-1 row-end-2 col-start-2 col-end-3 pl-4
      max-[1023px]:col-end-4 max-[1023px]:text-center max-[1023px]:px-8
    ">
      <h1 className="font-bold text-5xl mt-8 inline-block text-gradient max-[767px]:text-4xl">
        Rapidly build modern websites without ever leaving your HTML
      </h1>
      <h2 className="text-white mt-10 text-xl max-[425px]:text-lg">
        A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
      </h2>
      <button className="rounded-lg bg-sky-500 p-3 text-white mt-8 hover:bg-sky-400">
        Get Started
      </button>
    </div>
  )
}
