import React from 'react';
// import { CiShoppingCart } from 'react-icons/ci';

const HeroSection = () => {
  return (
    <section className=" py-16 mb-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-balance font-[popins]">
          <h1 className="text-5xl font-semibold text-gray-800 ">
            Lorem Ipsum is simply dummy text
          </h1>
          <p className="text-lg text-gray-600 mt-4 ">
            Lorem ipsum has been the industry standard dummy text ever since the 1500s lorem.
          </p>
          <div className="mt-6">
            <button className="bg-black text-white px-4 py-2 rounded-full mr-4">Order Now</button>
            <button className="border-none border-orange-500 text-orange-500 px-4 py-2 rounded">Explore More</button>
          </div>
        </div>
        <div className="relative right-40 w-64 h-64 rounded-full flex items-center justify-center">
        {/* Background image for the circle */}
        <img 
          src="herocircle.png" 
          alt="Circle Background" 
          className="absolute object-cover" 
        />
        
        {/* Center logo/icon */}
        <div className="text-6xl text-yellow-500 z-10">
          {/* Placeholder for the logo */}
          <img 
          src="logo.png" 
          alt="Circle Background" 
          className="max-h-36" 
        />
        </div>
        
        {/* Top-left label */}
        
        <div className="absolute top-5 left-8 transform -translate-x-2/3 bg-white rounded-full px-4 py-1 z-10">
        <p className="text-sm">lorem Ipsum</p>   
        </div>

        {/* Top-right rating */}
        <div className="absolute top-8  right-8  transform translate-x-2/3 bg-white rounded-full px-4 py-1 shadow-lg flex items-center z-10">
          <p className="text-sm">0.0</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927a1 1 0 011.902 0l1.15 3.536a1 1 0 00.95.69h3.708a1 1 0 01.588 1.81l-3.002 2.18a1 1 0 00-.364 1.118l1.15 3.536a1 1 0 01-1.54 1.118L10 13.236a1 1 0 00-1.178 0l-3.002 2.18a1 1 0 01-1.54-1.118l1.15-3.536a1 1 0 00-.364-1.118l-3.002-2.18a1 1 0 01.588-1.81h3.708a1 1 0 00.95-.69l1.15-3.536z"/>
          </svg>
        </div>

        {/* Bottom-left label */}
        <div className="absolute bottom-5 left-10 transform -translate-x-2/3 bg-white rounded-full px-4 py-1 shadow-lg z-10">
          <p className="text-sm">Dummy</p>
        </div>
      </div>
</div>
    </section>
  );
};

export default HeroSection;
