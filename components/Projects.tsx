import React from 'react'

const Projects = () => {
  return (
    <div>
<section className="text-black bg-white body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-800">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mt-6">
          <span className="font-semibold title-font text-black text-2xl">Javascript</span>
          <span className=" text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font">Banking System</h2>
          <p className="leading-relaxed">Developed Banking System with Javascript</p>
          <a className="text-indigo-400 inline-flex items-center mt-4 cursor-pointer">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-black text-2xl mt-8">Typescript</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2020</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2">School Management System</h2>
          <p className="leading-relaxed">Developed CLI-based School Management System with Typescript.</p>
          <a className="text-indigo-400 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
     
    </div>
  </div>
</section>
  </div>

    
  )
}

export default Projects
