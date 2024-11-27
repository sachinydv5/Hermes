
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
  image: "/placeholder.svg?height=100&width=100"
}))

const PopularSellers = () => {
  
  return (
    <div className="bg-[#F4F5F6] p-10">
    <div className=" w-[90vw] mx-auto p-8 ">
      <div className="mb-8 flex items-center justify-between ">
        <h2 className="text-3xl font-bold">
          Popular <span className="text-orange-500">Sellers</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">TIMEFRAME</span>
          <Select defaultValue="today">
            <SelectTrigger className="w-[180px]">
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
        className="w-full "
      >
        
        <CarouselContent>
          {sellers.map((seller, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 xl:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <span className={`rounded-full ${seller.color} px-3 py-1 text-sm text-white`}>
                        {seller.rank}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative">
                        <img
                          src={seller.image}
                          alt={seller.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 rounded-full bg-orange-500 p-1.5 text-white">
                          <ShoppingCart className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="mt-4 font-semibold">{seller.name}</h3>
                      <p className="text-sm text-gray-500">{seller.items} items</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className=" flex items-center justify-center mt-10">
            <CarouselPrevious className="relative translate-y-0"/>
            <CarouselNext className="relative translate-y-0"/>
          </div>
          <Button variant="link" className="text-orange-500 absolute right-0">
            See all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
      

      </Carousel>
      
    </div>
    </div>
  )
}

export default PopularSellers
