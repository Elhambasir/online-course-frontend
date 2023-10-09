import React from 'react'
import Signup from '../signup/Signup'
function Hero() {
  return (
    <section id='hero'>
    {/* FLEX CONTAINER */}
    <div className="container flex flex-col reverse md:flex-row justify-between items-center px-6 mx-auto mt-10  space-y-0 md:space-y-0">
      {/* LEFT SIDE */}
      <div className="flex flex-col mb-12 md:mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold font-medium text-center md:text-5xl md:text-left">The best way to manage projects and tasks</h1>
        <p className="max-w-sm textcenter font-medium text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
        <a href="#" 
      className="md:block p-3 px-6 pt-2 text-white font-medium baseline bg-red-600 hover:bg-red-400 rounded-full">ADMISSION NOW</a>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="md:w-1/3">
        <Signup />
    </div>
    </div>
  </section>
  )
}

export default Hero