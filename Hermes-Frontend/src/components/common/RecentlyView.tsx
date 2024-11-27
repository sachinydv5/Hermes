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
    <div className="p-6 w-[90vw] mx-auto bg-white rounded-lg shadow mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">YOUR RECENTLY VIEWED</h2>
          <Button variant="link" className="text-sm text-blue-500 hover:underline p-0">
            View All
          </Button>
        </div>
        {/* Arrow Navigation */}
        <Button
          variant="ghost"
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0"
        >
          <ChevronRight size={18} />
        </Button>
      </div>

      {/* Products List */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex items-center gap-4 p-4 w-full max-w-sm"
          >
            <div className="relative h-20 w-20 flex-shrink-0">
              <img
                src={product.image}
                // alt={}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-medium text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h3>
             
              <div className="flex">
              <p className="text-lg font-semibold text-gray-900">
                {product.price}
              </p>
              {product.discountPrice && (
                <p className="text-sm text-gray-500 line-through">
                  {product.discountPrice}
                </p>
              )}
              {product.ratings && (
                <p className="text-sm text-gray-500">
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