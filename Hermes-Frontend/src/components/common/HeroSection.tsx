import { ShoppingCart } from 'lucide-react';
import React from 'react';
// import { CiShoppingCart } from 'react-icons/ci';

const HeroSection = () => {
  return (
    <section className=" p-16 mb-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-balance">
          <h1 className="text-5xl font-semibold text-[#313131]">
            Lorem <span className='text-[#FCB857]'> Ipsum </span> is simply dummy text
          </h1>
          <p className="text-lg text-[#7E7D7A] mt-4">
            Lorem ipsum has been the industry standard dummy text ever since the 1500s lorem.
          </p>
          <div className="mt-6 flex items-center ">
            <button className="flex items-center  gap-2 bg-black text-white px-4 py-2 rounded-full mr-4">Order Now<ShoppingCart className=" bg-[#FCB857] rounded-full p-1" /></button>
            <button className="border-none font-bold text-[#F4AE26] px-4 py-2 rounded">Explore More</button>
          </div>
        </div>
        <div className="relative right-40 w-64 h-64 rounded-full flex items-center justify-center ">
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
        
        <div className="absolute top-5 left-8 transform -translate-x-2/3  bg-white bg-opacity-45 rounded-full p-1">
        <p className="text-sm  px-4 py-1 bg-white rounded-full">lorem Ipsum</p>   
        </div>

        {/* Top-right rating */}
        <div className="absolute top-8  right-8  transform translate-x-2/3 bg-white bg-opacity-45 rounded-full  p-1 shadow-lg flex items-center z-10">
          <p className="text-sm bg-white px-4 py-1  rounded-full">0.0 <span className="text-yellow-400 ml-1">★</span></p>
          
        </div>

        {/* Bottom-left label */}
        <div className="absolute bottom-5 left-10 transform -translate-x-2/3 bg-white bg-opacity-45 p-1 rounded-full shadow-lg ">
          <p className="text-sm bg-white px-4 py-1 rounded-full ">Dummy</p>
        </div>
      </div>
</div>
    </section>
  );
};

export default HeroSection;
