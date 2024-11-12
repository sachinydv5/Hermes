import React, { useState } from 'react';
import HeroSection from "../../common/HeroSection"
import PopularNow from "../../common/PopukarNow"

const Landing = () => {
  return (
    <div className=''>
      <section className='bg-orange-100'>
    
        <HeroSection/>
        {/* popular section */}
       <PopularNow/>
      </section>
      {/* feature section */}
      <section className="py-16 mb-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Lorem Impsum</h2>
        <div className="flex items-center justify-around">
          <div className="text-center">
            <img src="logo.png" alt="" className="mx-auto mb-4 max-w-40"/>
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-center">
            <img src="logo.png" alt="" className="mx-auto mb-4 max-w-40"/>
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-center">
            <img src="logo.png" alt="" className="mx-auto mb-4 max-w-40"/>
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Add two more features here */}
        </div>
      </div>
    </section>
    
    {/* about */}
    <section className="relative p-8 lg:p-16 bg-orange-100 mt-20 mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 relative">
        {/* Image Section */}
        <div className="relative lg:mb-0 mb-20 w-full lg:w-1/2 flex justify-center">
          <img
            src="gray.png"
            alt="About us"
            className="rounded-xl shadow-2xl w-full max-w-sm relative z-10 lg:-mt-32"
          />
        </div>
        {/* Text Section */}
        <div className="text-pretty w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            About us
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it.
          </p>
          <button className="bg-gray-900 text-yellow-400 py-3 px-8 rounded-full font-bold shadow-md transition-all hover:bg-yellow-400 hover:text-gray-900">
            Get in touch
          </button>
        </div>
      </div>
    </section>
    {/* footer */}
    </div>
  )
}

export default Landing