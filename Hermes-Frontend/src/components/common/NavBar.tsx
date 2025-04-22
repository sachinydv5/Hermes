import React, { useState } from 'react'
import { ChevronDown, ChevronRight, CircleHelp, Heart, Headphones, RefreshCw, ShoppingBag, Menu, X } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Link, NavLink } from 'react-router-dom'


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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F4F5F6]">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-12 items-start md:items-center justify-between px-3 sm:px-4 py-2 md:py-0 text-[#313131]">
        {/* Mobile menu toggle */}
        <div className="w-full flex justify-between items-center md:hidden mb-2">
          <Button variant="ghost" className="p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5 text-orange-500" /> : <Menu className="h-5 w-5 text-orange-500" />}
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="p-1 hover:bg-orange-100">
              <NavLink to='/wishlist' className={({isActive}) => 
                `hover:text-[#f8a93a] font-semibold ${isActive ? "text-[#f8a93a]": "text-gray-700"}`}>
                <Heart className="h-4 w-4" />
              </NavLink>
            </Button>
            <Button variant="ghost" className="text-xs sm:text-sm p-1 hover:bg-transparent">USD</Button>
            <Button variant="ghost" className="text-xs sm:text-sm p-1 hover:bg-transparent">Eng</Button>
          </div>
        </div>

        {/* Left section - responsive */}
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-1 w-full md:w-auto`}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-full md:w-auto justify-between md:justify-start space-x-1 text-xs sm:text-sm md:text-base hover:bg-transparent">
                <span>All Categories</span>
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full md:w-64">
              {categories.map((category, index) => (
                <DropdownMenuItem key={index} className="flex justify-between py-1 sm:py-2 text-xs sm:text-sm text-gray-600">
                  {typeof category === 'string' ? (
                    category
                  ) : (
                    <>
                      {category.name}
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/trackorder" className="flex items-center justify-center gap-3 h-7 sm:h-8 w-full md:w-auto space-x-1 text-xs sm:text-sm md:text-base hover:bg-transparent">
            <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
            Order Tracking
          </Link>
          
          <Button variant="ghost" className="h-7 sm:h-8 w-full md:w-auto justify-start space-x-1 text-xs sm:text-sm md:text-base hover:bg-transparent">
            <CircleHelp className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
            <span>Need Help</span>
          </Button>
        </div>

        {/* Right section - desktop only */}
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="h-8 px-2 hover:bg-orange-100">
            <NavLink to='/wishlist' className={({isActive}) => 
              `hover:text-[#f8a93a] font-semibold ${isActive ? "text-[#f8a93a]": "text-gray-700"}`}>
              <Heart className="h-4 w-4" />
            </NavLink>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
