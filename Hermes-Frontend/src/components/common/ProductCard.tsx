import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
// import { CiShoppingCart } from 'react-icons/ci';

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-3 sm:p-4 md:p-6 w-full max-w-xs mx-auto">
      {/* Image Section with Rating Badge */}
      <div className="relative">
        <div className="h-32 sm:h-36 md:h-44 bg-gray-300 rounded-md overflow-hidden">
          {/* Add responsive image if available */}
          {/* <img src="product.jpg" alt="Product" className="w-full h-full object-cover" /> */}
        </div>
        <span className="absolute top-2 left-2 bg-gray-100 text-black text-xs rounded-full px-2 py-1">
          <span className="font-bold">0.0</span> ⭐
        </span>
      </div>

      {/* Title and Rating */}
      <div className="mt-3 sm:mt-4 flex justify-between items-center"> 
        <h2 className="text-xs sm:text-sm md:text-base font-bold truncate">Dummy 1</h2>
        <p className="text-black font-bold text-xs sm:text-sm">0.0</p>
      </div>

      {/* Tags */}
      <div className="flex items-center justify-between mt-2 sm:mt-3">
        <div className='flex flex-wrap gap-1 sm:gap-2'>
          <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg">xyz</span>
          <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg">xyz</span>
        </div>
        {/* Cart Button */}
        <div>
          <button className="bg-[#FCB857] text-white p-1.5 sm:p-2 rounded-full hover:bg-orange-500 transition-colors">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
