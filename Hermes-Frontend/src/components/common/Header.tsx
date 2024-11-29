// import { IoSearch } from "react-icons/io5";
import React from 'react';
import { Search, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Link } from "react-router-dom";
import LoginForm from '../pages/home/LoginForm';

// import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  return (
    <div className='w-full bg-[#F6EBDA]'>
    <nav className="  px-4 sm:px-6 py-4 sm:py-5 lg:py-7">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="vivarent.png"
            alt="Vivarrent logo"
            className="h-6 sm:h-8"
          />
        </div>

        {/* Links */}
        <div className=" md:block lg:flex lg:items-center lg:w-auto gap-10">
        <ul className="flex  md:flex-row md:gap-6 lg:gap-10">
            <li className="text-gray-700 hover:text-[#f8a93a] font-semibold"><Link to='/home'>Home</Link></li>
            <li className="text-gray-700 hover:text-[#f8a93a] font-semibold"><Link to='/market'>Market</Link></li>
            <li className="text-gray-700 hover:text-[#f8a93a] font-semibold">Company</li>
            </ul>
      

        {/* Search and Cart */}
        <div className="md:flex items-center space-x-4 mt-4 md:mt-0 gap-2">
          {/* Search */}
          {/* <div className="relative">
          <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Lorem ipsum rento"
              className="px-10 py-2 w-48 lg:w-64  rounded-full border border-gray-300 focus:outline-none"
            />
          
          </div> */}

          {/* Cart Icon */}
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <ShoppingCart className="" />
            <ShoppingCart className="h-6 w-6" />
          </Button>

          {/* Create Listing Button */}
          <button className="bg-white text-[#f8a93a] px-3 py-1 lg:px-4 lg:py-2 rounded-full font-semibold hover:text-black text-sm lg:text-base">
           <Link to='/creatinglist'>Create listing</Link> 
          </button>

          {/* Log In Button */}
          <Dialog>
            <DialogTrigger asChild>
    
              <Button variant="outline" className="border border-[#f8a93a] text-black px-4 py-2 rounded-full font-semibold">
                Log In
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#313131] text-white border-none">
              <LoginForm/>
            </DialogContent>
          </Dialog>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
