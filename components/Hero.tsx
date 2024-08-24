"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className='text-5xl font-bold text-black'>Nextjs Master with Muhammad Mudasir Chandio</h1>
    <br/>
    <p className="mb-8 leading-relaxed font-bold text-purple-400">Hi</p>
<h1 className='text-3xl mx-2 font-bold'>
<Typewriter
  options={{
    strings: ['I am a frontend developer and web developer with over 2 years of experience.', ' I am passionate about creating intuitive and visually appealing user experiences.'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

     
      <div className="flex">
        <button className="mt-9 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg -mx-1 font-bold">
           <a href="https://github.com/Mudasic1"> Visit My Git hub</a> 
            </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://cdn-icons-png.flaticon.com/512/122/122474.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
