import React from 'react'
import Hero from '../hero/Hero'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <nav class="relative mx-auto container bg-transparent p-6 border-b" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="pt-2 text-gray-100">
            <a href="/" className="font-medium">ETECH</a>
          </div>
          <div className="flex hidden md:flex space-x-6 text-gray-100">
            <a href="/" className="text-base font-medium hover:text-gray-900">Pricing</a>
            <a href="/" className="text-base font-medium hover:text-gray-900">Docs</a>
            <a href="/" className="text-base font-medium hover:text-gray-900">Company</a>
            <a href="/" className="text-base font-medium hover:text-gray-900">About Us</a>
            <a href="/" className="text-base font-medium hover:text-gray-900">Contact</a>
          </div>
          <a href="#" 
          className="hidden md:block p-3 px-6 pt-2 text-white baseline font-medium bg-red-600 hover:bg-red-400 rounded-full">CONTACT US</a>
        </div>
      </nav>
      <Hero />
  </div>
  )
}

export default Header