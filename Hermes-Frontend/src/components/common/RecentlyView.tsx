import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react";


const RecentlyView = () => {
  const products = [
    {
      id: 1,
      name: "Xomie Remid 8 Sport Water Resistance Watch",
      price: "$579.00",
      image: "/watch.jpg", // Replace with your image URL or import path
    },
    {
      id: 2,
      name: "Microte Surface 2.0 Laptop",
      price: "$979.00",
      image: "/laptop.jpg",
    },
    {
      id: 3,
      name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
      price: "$979.00 - $1,259.00",
      image: "/tablet.jpg",
    },
    {
      id: 4,
      name: "SROK Smart Phone 128GB, Oled Retina",
      price: "$579.00",
      discountPrice: "$779.00",
      image: "/phone.jpg",
      ratings: 152,
    },
  ];

  return (
    <div className="px-4 sm:px-6  w-[90vw] mx-auto rounded-lg mb-10 sm:mb-20 md:mb-40">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">YOUR RECENTLY VIEWED</h2>
          {/* <Button variant="link" className="text-sm text-blue-500 hover:underline p-0">
            View All
          </Button> */}
        </div>
        {/* Arrow Navigation */}
        {/* <Button
          variant="ghost"
          className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0"
        >
          <ChevronRight size={16} className="sm:size-18" />
        </Button> */}
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 w-full hover:shadow-md transition-shadow"
          >
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h3>
             
              <div className="flex flex-wrap gap-1 items-baseline">
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  {product.price}
                </p>
                {product.discountPrice && (
                  <p className="text-xs sm:text-sm text-gray-500 line-through ml-1">
                    {product.discountPrice}
                  </p>
                )}
                {product.ratings && (
                  <p className="text-xs sm:text-sm text-gray-500 ml-1">
                    ({product.ratings})
                  </p>
                )}
              </div>
            
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentlyView;