import React from 'react';
// import { CiShoppingCart } from 'react-icons/ci';

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 max-w-xs">
      {/* Image Section with Rating Badge */}
      <div className="relative">
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <span className="absolute top-2 left-2 bg-gray-100 text-black text-xs rounded-full px-2 py-1">
          <span className="font-bold">0.0</span> ⭐
        </span>
      </div>

      {/* Title and Rating */}
      <div className="mt-4 flex justify-between items-center"> 
        <h2 className="text-sm font-bold">Dummy 1</h2>
        <p className=" text-black font-bold">0.0</p>
      </div>

      {/* Tags */}
      <div className="flex items-center justify-between mt-2">
        <div className='space-x-6'>
        <span className="bg-orange-100 text-orange-600 text-xs font-medium px-4 py-2 rounded-lg">xyz</span>
        <span className="bg-orange-100 text-orange-600 text-xs font-medium px-4 py-2 rounded-lg">xyz</span>
        </div>
        {/* Cart Button */}
        <div className="">
        <button className="bg-orange-400 text-white p-2 rounded-full">
        {/* <CiShoppingCart /> */}
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
