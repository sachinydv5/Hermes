import React, { useEffect, useState } from 'react';
import HeroSection from "../../common/HeroSection";
import PopularNow from "../../common/PopularNow";
import { Link, useSearchParams } from 'react-router-dom';

const Landing = () => {
  const [searchParams] = useSearchParams();

  return (
        <>
          <section className='bg-[#F6EBDA]'>
            <HeroSection />
            {/* popular section */}  
          </section>
          {/* feature section */}
          <section className="p-4 sm:p-8 md:p-12 lg:p-16 mb-6 sm:mb-8 md:mb-10">
  <div className="container mx-auto px-4 py-10">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10">
      How Vivarent <span className="relative inline-block">
        Works
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#FCB857] rounded"></span>
      </span>
    </h2>

    <div className="flex flex-wrap items-center justify-around gap-y-8 gap-x-4">
      <div className="text-center w-full sm:w-[45%] md:w-[30%] lg:w-[28%] ">
        <img src="HowWorks.svg" alt="" className="mx-auto mb-3 sm:mb-4 max-w-56 sm:max-w-60 md:max-w-64 lg:max-w-72" />
        <h3 className="text-xl sm:text-2xl md:text-3xl ">Explore our rentals <br />or list your own</h3>
        <p className="text-[#7E7D7A] text-base sm:text-lg md:text-xl">Find the item you need or list yours <br />on our peer-to-peer rental platform.</p>
      </div>

      <div className="text-center w-full sm:w-[45%] md:w-[30%] lg:w-[28%] ">
        <img src="HowWorks2.svg" alt="" className="mx-auto mb-3 sm:mb-4 max-w-56 sm:max-w-60 md:max-w-64 lg:max-w-72" />
        <h3 className="text-xl sm:text-2xl md:text-3xl ">Connect with the <br /> owner or renter.</h3>
        <p className="text-[#7E7D7A] text-base sm:text-lg md:text-xl">Connect with owners and renters  <br />on our local rental marketplace.</p>
      </div>

      <div className="text-center w-full sm:w-[45%] md:w-[30%] lg:w-[28%]">
        <img src="HowWorks3.svg" alt="" className="mx-auto mb-3 sm:mb-4 max-w-56 sm:max-w-60 md:max-w-64 lg:max-w-72" />
        <h3 className="text-xl sm:text-2xl md:text-3xl f">Make or accept <br /> an offer!</h3>
        <p className="text-[#7E7D7A] text-base sm:text-lg md:text-xl">Share and rent items with the <br />community in just a few clicks!</p>
      </div>
    </div>
  </div>
</section>


          {/* about */}
          <section className="relative p-4 sm:p-8 md:p-12 lg:p-16 bg-[#F6EBDA] mt-8 sm:mt-16 md:mt-20 mb-8 sm:mb-16 md:mb-20">
            <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 relative">
              {/* Image Section */}
              <div className="relative mb-8 sm:mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
                <img
                  src="About-Us.svg"
                  alt="About us"
                  className="rounded-xl shadow-2xl w-full max-w-[220px] sm:max-w-xs md:max-w-sm relative z-10 mt-0 lg:-mt-32"
                />
              </div>
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ">
                  About <span className="relative inline-block">
                    Us
                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#FCB857] rounded"></span>
                  </span>
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl  mb-3 sm:mb-4  break-words tracking-[0.96]">
                You've got the goods. Vivarent connects you with people  who need them.
                </h3>
                <p className="font-normal text-base sm:text-lg md:text-xl text-[#7E7D7A] mb-4 sm:mb-6 break-words">
                Need a pro camera just for the day? Or maybe you've got a truck that could be out hauling. <br />Vivarent lets you rent stuff locally and earn money renting items to your friends and neighbors across the Twin Cities. 
                </p>
                <Link to='/about'className="bg-[#313131] text-[#F4AE26] py-2 sm:py-3 px-4 sm:px-6 rounded-full font-bold text-lg hover:bg-gray-700 cursor-pointer relative z-10">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full hidden sm:flex items-center justify-end">
              <div 
                className="w-1/2 sm:w-2/3 md:w-3/4 h-1/2 sm:h-2/3 md:h-3/4 bg-contain bg-right bg-no-repeat opacity-10"
                style={{ backgroundImage: "url('/logo.png')" }}
              ></div>
            </div>
          </section>
        </>
  );
};

export default Landing;
