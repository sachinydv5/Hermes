import { ShoppingCart } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-6 px-4 sm:p-8 md:p-16 mb-20 sm:mb-32 md:mb-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 text-balance">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#313131]">
            Lorem <span className='text-[#FCB857]'> Ipsum </span> is simply dummy text
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#7E7D7A] mt-2 sm:mt-4">
            Lorem ipsum has been the industry standard dummy text ever since the 1500s lorem.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full">
              Order Now <ShoppingCart className="bg-[#FCB857] rounded-full p-1" />
            </button>
            <button className="w-full sm:w-auto border-none font-bold text-[#F4AE26] px-4 py-2 rounded">
              Explore More
            </button>
          </div>
        </div>
        
        {/* Image section - Responsive for all devices */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end md:right-20 lg:right-40">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center">
            {/* Background image for the circle */}
            <img 
              src="herocircle.png" 
              alt="Circle Background" 
              className="absolute object-cover w-full h-full" 
            />
            {/* Center logo/icon */}
            <div className="z-10 w-24 sm:w-28 md:w-36">
              <img 
                src="logo.png" 
                alt="Logo" 
                className="w-full"
              />
            </div>
            
            {/* Labels and ratings - Responsive for all screens */}
            <div className="absolute top-2 sm:top-5 left-0 sm:left-8 transform -translate-x-1/2 bg-white bg-opacity-45 rounded-full p-0.5 sm:p-1">
              <p className="text-xs sm:text-sm px-2 sm:px-4 py-0.5 sm:py-1 bg-white rounded-full">Lorem Ipsum</p>   
            </div>
            <div className="absolute top-2 sm:top-8 right-0 sm:right-8 transform translate-x-1/2 bg-white bg-opacity-45 rounded-full p-0.5 sm:p-1 shadow-lg flex items-center z-10">
              <p className="text-xs sm:text-sm bg-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full">0.0 <span className="text-yellow-400 ml-1">★</span></p>
            </div>
            <div className="absolute bottom-2 sm:bottom-5 left-4 sm:left-10 transform -translate-x-1/2 bg-white bg-opacity-45 p-0.5 sm:p-1 rounded-full shadow-lg">
              <p className="text-xs sm:text-sm bg-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full">Dummy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
