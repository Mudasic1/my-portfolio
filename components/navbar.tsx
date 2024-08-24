import React from 'react'
import Image from 'next/image'
const navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      
     
     <img src='https://cdn-icons-png.flaticon.com/512/206/206876.png' width={50} className='fill-none rounded' />
      
      <span className="ml-3 text-xl">Mudasir Chandio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
      <a className="mr-5 hover:text-gray-900 hover:text-purple-500">Home</a>
      <a className="mr-5 hover:text-gray-900  hover:text-purple-500">About Us</a>
      <a className="mr-5 hover:text-gray-900  hover:text-purple-500">Contact</a>
      <a className="mr-5 hover:text-gray-900  hover:text-purple-500">Privacy Policy</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Projects
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default navbar
