import React from 'react'
import { ChevronDown, ChevronRight, CircleHelp, Heart, Headphones, RefreshCw, ShoppingBag } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


const categories = [
    "Computer & Laptop",
    { name: "Computer Accessories", hasSubmenu: true },
    "SmartPhone",
    "Headphone",
    "Mobile Accessories",
    "Gaming Console",
    "Camera & Photo",
    "TV & Homes Appliances",
    "Watchs & Accessories",
    "GPS & Navigation",
    "Warable Technology"
  ]
  
const NavBar = () => {
  return (
    <nav className="w-full  bg-[#F4F5F6]">
    <div className="container mx-auto flex h-12 items-center justify-between px-4 text-[#313131] font-[poppins]">
      <div className="flex items-center space-x-6 ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 space-x-1 hover:bg-transparent">
              <span>All Category</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            {categories.map((category, index) => (
              <DropdownMenuItem key={index} className="flex justify-between py-2 text-gray-600">
                {typeof category === 'string' ? (
                  category
                ) : (
                  <>
                    {category.name}
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" className="h-8 hover:bg-transparent">
          Recently Viewed
        </Button>

        <Button variant="ghost" className="h-8 space-x-2 hover:bg-transparent">
          <ShoppingBag className="h-4 w-4 text-orange-500" />
          <span>Order Tracking</span>
        </Button>

        <Button variant="ghost" className="h-8 space-x-2 hover:bg-transparent">
          <RefreshCw className="h-4 w-4 text-orange-500" />
          <span>Compare</span>
        </Button>
      </div>

      <div className="flex items-center space-x-6">
        <Button variant="ghost" className="h-8 space-x-2 hover:bg-transparent">
          <Headphones className="h-4 w-4 text-orange-500" />
          <span>Customer Support</span>
        </Button>

        <Button variant="ghost" className="h-8 space-x-2 hover:bg-transparent">
          <CircleHelp className="h-4 w-4 text-orange-500" />
          <span>Need Help</span>
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="ghost" className="h-8 px-2 hover:bg-transparent">
          <Heart className="h-4 w-4 text-orange-500" />
        </Button>

        <Button variant="ghost" className="h-8 hover:bg-transparent">
          USD
        </Button>

        <Button variant="ghost" className="h-8 hover:bg-transparent">
          Eng
        </Button>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
