import * as React from "react"
import { ArrowRight, ChevronDown, ExternalLink, Plus, ShoppingCart } from 'lucide-react'


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"


const sellers = [
  { rank: "#1", color: "bg-blue-500", icon: "🏆" },
  { rank: "#2", color: "bg-purple-500", icon: "⭐" },
  { rank: "#3", color: "bg-green-500", icon: "⚡" },
  { rank: "#4", color: "bg-gray-900", icon: "🎯" },
  { rank: "#5", color: "bg-red-500", icon: "🔥" },
  { rank: "#6", color: "bg-yellow-500", icon: "💡" },
  { rank: "#7", color: "bg-indigo-500", icon: "🌟" },
  { rank: "#8", color: "bg-pink-500", icon: "🎨" },
].map(badge => ({
  ...badge,
  name: "Payton Harris",
  items: "2,456",
  image: "https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png"
}))

const PopularSellers = () => {
  
  return (
    <div className="px-4 py-6 sm:p-6 md:p-8 lg:p-10">
      <div className=" w-[90vw] mx-auto px-2 sm:px-4 md:px-6">
        <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Popular <span className="text-orange-500">Sellers</span>
          </h2>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">TIMEFRAME</span>
            <Select defaultValue="today">
              <SelectTrigger className="w-full sm:w-[140px] md:w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          
          <CarouselContent>
            {sellers.map((seller, index) => (
              <CarouselItem key={index} className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-1 sm:p-2">
                <div className="h-full">
                  <Card className="h-full">
                    <CardContent className="flex flex-col p-4 sm:p-6 h-full">
                      <div className="mb-4 sm:mb-6 flex items-center justify-between border-b-2 pb-2">
                        <span className={`rounded-full ${seller.color} px-2 sm:px-3 py-1 text-xs sm:text-sm text-white`}>
                          {seller.rank}
                        </span>
                        <div className="flex gap-1 sm:gap-2">
                          <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center text-center flex-grow">
                        <div className="relative">
                          <img
                            src={seller.image}
                            alt={seller.name}
                            width={70}
                            height={70}
                            className="rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] object-cover"
                          />
                          <div className="absolute -bottom-1 -right-1 rounded-full bg-orange-500 p-1 sm:p-1.5 text-white">
                            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                          </div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold">{seller.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{seller.items} items</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10">
            <div className="flex gap-4 mb-4 sm:mb-0">
              <CarouselPrevious className="relative translate-y-0 h-9 w-9 sm:h-10 sm:w-10 bg-white border border-gray-200 shadow-sm hover:bg-gray-50"/>
              <CarouselNext className="relative translate-y-0 h-9 w-9 sm:h-10 sm:w-10 bg-white border border-gray-200 shadow-sm hover:bg-gray-50"/>
            </div>
            <div className="sm:absolute sm:right-0 mt-4 sm:mt-0 w-full sm:w-auto flex justify-center sm:justify-end">
              <Button variant="link" className="text-orange-500 text-sm sm:text-base">
                See all
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default PopularSellers
