import React from 'react';
import ProductCard from './ProductCard';

const PopularNow = () => {
  return (
    <section className="relative bg-[#F9D9AA] p-8 m-20 -bottom-20 rounded-[60px]">
      <div className="container mx-auto relative z-10 -mt-16"> {/* Adjusted the margin-top to lift it up */}
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10 text-gray-900 -mt-44 relative z-20"> {/* Negative margin added */}
          Popular Now
          {/* <span className="block w-12 h-1 bg-yellow-500 mx-auto mt-2" /> */}
        </h2>

        {/* Grid for Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 "> {/* Cards moved up */}
          <ProductCard/>
          <ProductCard />
          <ProductCard  />
        </div>
      </div>
    </section>
  );
};

export default PopularNow;
