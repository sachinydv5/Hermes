import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-6 px-4 sm:p-8 md:p-16 mb-60 sm:mb-72 md:mb-80 lg:mb-96 relative">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Text Content - Always centered with higher z-index */}
        <div className="w-full text-center text-balance relative z-20 mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#313131]">
             Get What You Need <br /> from<span className='text-[#FCB857]'> Vivarent</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#7E7D7A] mt-2 sm:mt-4">
          Save money by renting and earn money renting items <br /> with our vetted Minneapolis-St. Paul network!
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl">
            <Link to='/productlist' className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:text-[#F4AE26]">
             Rent Now
            </Link>
            <button className="w-full sm:w-auto hover:underline text-[#F4AE26] px-4 py-2 rounded-full">
            <Link to='/creatinglist'>List Now</Link> 
            </button>
          </div>
        </div>
        {/* Empty spacer div to ensure proper spacing */}
        <div className="h-40 sm:h-48 md:h-56 lg:h-64"></div>  
        {/* Hero image positioned to be half in, half out of section */}
        <div className="absolute -bottom-12 left-0 right-0 translate-y-1/2 flex justify-center z-10">
          <div className="w-full max-w-[300px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1081px]">
            <img 
              src="/HeroImage.svg" 
              alt="Featured Products" 
              className="w-full h-auto object-contain" 
             
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
