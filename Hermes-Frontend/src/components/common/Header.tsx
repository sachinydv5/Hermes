import React, { useEffect, useState } from 'react';
import { Menu, Search, ShoppingCart, X } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Link, NavLink, useLocation } from "react-router-dom";
import LoginForm from '../pages/home/LoginForm';
import { useAppDispatch, useAppSelector} from '../../app/hooks';
import { isUserLoggedIn, userData } from '../../app/store/user';


const Header = () => {
  const[isMenuOpen , setIsMenuOpen] = useState(false);
  const isLogIn: boolean = useAppSelector(isUserLoggedIn)
  const firstName: string = useAppSelector(userData)
  console.log(firstName)

  const location = useLocation(); // Get the current location

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className='w-full bg-[#F6EBDA]'>
      <nav className="w-full px-2 py-2 sm:px-3 sm:py-3 md:px-6 md:py-5 lg:px-8 lg:py-7">
        <div className="container mx-auto flex items-center justify-between">
          {/* Mobile Navigation Items - Left */}
          <div className="flex items-center sm:md:hidden">
            <Button variant="ghost" size="icon" onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className="p-1 mr-1 sm:mr-2">
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <Link to="/">
                <img
                  src="vivarent.png"
                  alt="Vivarrent logo"
                  className="h-7 sm:h-8 md:h-10"
                />
              </Link>
            </div>
          </div>
          
          {/* Desktop Logo - Only visible on desktop */}
          <div className="hidden md:flex md:items-center md:space-x-2 cursor-pointer">
            <Link to="/">
              <img
                src="vivarent.png"
                alt="Vivarrent logo"
                className="h-10 lg:h-12"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between gap-2 lg:gap-10">
            <ul className="flex md:flex-row md:gap-2 lg:gap-8 xl:gap-10">
              <NavLinks/>
            </ul>
            
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
              <NavLink to="/cart" className={({isActive}) => 
                `hover:text-[#f8a93a] font-semibold ${isActive ? "text-[#f8a93a]": ""}`}>
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </NavLink> 
              {/* Create Listing Button */}
              <button className="bg-white text-[#f8a93a] px-2 py-1 sm:px-3 md:px-3 lg:px-4 md:py-1 lg:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:text-black transition-colors">
                <Link to='/creatinglist'>Create Listing</Link> 
              </button>

              {/* Login/Profile Button */}
              {!isLogIn ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-2 border-[#FCB857] text-black px-2 py-1 md:px-3 lg:px-4 md:py-1 lg:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#F6EBDA]">
                      Log In
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-[#313131] text-white border-none">
                    <LoginForm/>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button
                  variant="outline"
                  className="flex items-center gap-1 lg:gap-2 p-1 md:p-2 lg:p-3 rounded-full border-orange-400 text-black"
                >
                  <Link to="/userprofile" className="flex items-center gap-1 lg:gap-2">
                    {/* Avatar */}
                    <Avatar className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                      <AvatarImage
                        src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png" 
                        alt="User Profile"
                      />
                      <AvatarFallback>{firstName.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-xs md:text-sm hidden sm:inline">{ firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()}</span>
                  </Link>
                </Button>
              )}  
            </div>
          </div>

          {/* Mobile Navigation Items - Right */}
          <div className="flex items-center space-x-2 md:hidden">
            <NavLink to="/cart" className={({isActive}) => 
              `hover:text-[#f8a93a] font-semibold ${isActive ? "text-[#f8a93a]": ""}`}>
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            </NavLink>
            
            {/* Mobile Login/Profile Button */}
            {!isLogIn ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-2 border-[#FCB857] text-black px-1 py-1 sm:px-2 rounded-full text-xs font-medium hover:bg-[#F6EBDA]">
                    Log In
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[90vw] sm:max-w-[425px] bg-[#313131] text-white border-none">
                  <LoginForm/>
                </DialogContent>
              </Dialog>
            ) : (
              <Button
                variant="outline"
                className="flex items-center p-1 rounded-full border-orange-400 text-black"
              >
                <Link to="/userprofile">
                  <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                    <AvatarImage
                      src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png" 
                      alt="User Profile"
                    />
                    <AvatarFallback>{firstName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Link>
              </Button>
            )}
          </div>
        </div>
          
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 right-0 bg-[#F6EBDA] z-50 md:hidden overflow-y-auto max-h-[80vh] shadow-lg rounded-b-xl"> 
            <div className="container mx-auto px-3 py-12 pb-6 flex flex-col gap-4 sm:gap-6">
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              
              <ul className="flex flex-col gap-4 sm:gap-6 text-center mb-4 sm:mb-6">
                <NavLinks />
              </ul>
              
              <div className="flex flex-col gap-3 sm:gap-4">
                <button className="bg-white text-[#f8a93a] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm font-medium hover:text-black">
                  <Link to='/creatinglist' onClick={() => setIsMenuOpen(false)}>Create listing</Link> 
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

const NavLinks = () => (
  <>
    <NavLink to='/' 
      className={({ isActive }) => 
        isActive ? "text-[#f8a93a] font-normal text-sm sm:text-base md:text-lg" : "text-[#000000] hover:text-[#f8a93a] font-normal text-sm sm:text-base md:text-lg"
      }>Home</NavLink>
    <NavLink to='/market' 
      className={({ isActive }) => 
        isActive ? "text-[#f8a93a] font-normal text-sm sm:text-base md:text-lg" : "text-[#000000] hover:text-[#f8a93a] font-normal text-sm sm:text-base md:text-lg"
      }>Market</NavLink>
    <NavLink to='/about' 
      className={({ isActive }) => 
        isActive ? "text-[#f8a93a] font-normal text-sm sm:text-base md:text-lg" : "text-[#000000] hover:text-[#f8a93a] font-normal text-sm sm:text-base md:text-lg"
      }>Company</NavLink>
  </>
)

export default Header;
