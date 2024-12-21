import React from 'react'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const ProductCardTwo = ({product}) => {
    const [isHovered, setIsHovered] = useState(false)

    const images = [
      "https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png",
    ]
  
    return (
      <Card 
        className="overflow-hidden bg-white rounded-2xl border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-4 rounded-lg ">
          <div className="relative mb-3 rounded-lg border-2 border-orange-100">
            {isHovered ? (
              <Carousel className="w-full aspect-square">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={src}
                        alt={`Product view ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : (
              <img
                src={images[0]}
                alt="TOZO T6 True Wireless Earbuds"
                className="w-full aspect-square object-cover rounded-lg "
              />
            )}
            
            <div className="absolute top-2 left-2 flex items-center bg-white rounded-md px-2 py-1 shadow-sm">
              <span className="font-semibold text-sm">4.8</span>
              <span className="text-yellow-400 ml-1">★</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 h-8 w-8 bg-white rounded-full"
            >
              <Heart className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
  
          <h3 className="font-medium text-sm mb-2 line-clamp-2">
           {product?.name}
          </h3>
  
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-gray-400 line-through text-sm"></span>
            <span className="text-2xl font-semibold text-[#f4a340]">${product?.price}</span>
            <span className="text-sm text-gray-500">/per week</span>
          </div>
  
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              3 Available in stock
            </span>
            <Button 
              size="sm" 
              className="bg-[#f4a340] hover:bg-[#e59635] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="sr-only">Add to cart</span>
              🛒
            </Button>
          </div>
        </div>
      </Card>
  )
}

export default ProductCardTwo
