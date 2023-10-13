import React from 'react'
import './hero.css'
function Hero() {
  return (
    <section id='hero'>
    {/* FLEX CONTAINER */}
    <div className="container flex flex-col reverse md:flex-row justify-center md:justify-center md:p-10 items-center mx-auto mt-10  space-y-0 md:space-y-0">
      {/* LEFT SIDE */}
      <div className="flex flex-col mb-12 md:mb-16 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-gray-100">
          Learn Your Fovorite Course From Online
          </h1>
        <div className="flex justify-center md:justify-start">
        <a href="#" 
      className="md:block p-3 px-6 pt-2 text-white font-medium baseline bg-red-600 hover:bg-red-400 rounded-full">ADMISSION NOW</a>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="md:w-1/2 edu w-full ">
      </div>
    </div>
  </section>
  )
}

export default Hero