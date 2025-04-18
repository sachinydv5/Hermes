import React from 'react';
import ProductCard from './ProductCard';
import ProductCardTwo from './ProductCardTwo';

const PopularNow = () => {
  return (
    <section className="relative bg-[#F9D9AA] p-4 sm:p-6 md:p-8 mx-4 sm:mx-8 
    md:mx-20 my-10 sm:my-16 md:my-28 -bottom-16 sm:-bottom-20 md:-bottom-36 
    rounded-3xl sm:rounded-[40px] md:rounded-[60px]">
      <div className="container mx-auto relative z-10 -mt-8 sm:-mt-12 md:-mt-16"> 
        {/* Heading */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl  mb-6 sm:mb-8 md:mb-10 text-gray-900 -mt-20 sm:-mt-32 md:-mt-44 relative z-20"> 
          Popular <span className="relative inline-block">
              Now
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#FCB857] rounded"></span>
           </span>
          {/* <span className="block w-12 h-1 bg-yellow-500 mx-auto mt-2" /> */}
        </h2>

        {/* Grid for Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 relative z-20"> 
          <ProductCard/>
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default PopularNow;
