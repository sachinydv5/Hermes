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
      <nav className="w-full px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:py-7">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Link to="/">
              <img
                src="vivarent.png"
                alt="Vivarrent logo"
                className="h-8 sm:h-10 md:h-12"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between gap-4 lg:gap-10">
            <ul className="flex md:flex-row md:gap-4 lg:gap-10">
              <NavLinks/>
            </ul>
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              <NavLink to="/cart" className={({isActive}) => 
                `hover:text-[#f8a93a] font-semibold ${isActive ? "text-[#f8a93a]": ""}`}>
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              </NavLink> 
              {/* Create Listing Button */}
              <button className="bg-white text-[#f8a93a] px-2 py-1 sm:px-3 md:px-4 lg:px-4 md:py-1 lg:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:text-black transition-colors">
                <Link to='/creatinglist'>Create listing</Link> 
              </button>

              {/* Login/Profile Button */}
              {!isLogIn ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-2 border-[#FCB857] text-black px-3 py-1 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#F6EBDA]">
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
                  className="flex items-center gap-2 p-2 md:p-3 rounded-full border-orange-400 text-black"
                >
                  <Link to="/userprofile" className="flex items-center gap-2">
                    {/* Avatar */}
                    <Avatar className="w-6 h-6 md:w-8 md:h-8">
                      <AvatarImage
                        src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png" 
                        alt="User Profile"
                      />
                      <AvatarFallback>{firstName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-xs md:text-sm hidden sm:inline">{firstName}</span>
                  </Link>
                </Button>
              )}  
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className="p-1">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
          
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 right-0 bg-[#F6EBDA] z-50 md:hidden overflow-y-auto max-h-[80vh] shadow-lg rounded-b-xl"> 
            <div className="container mx-auto px-4 py-16 pb-6 flex flex-col gap-6">
              <button
                className="absolute top-4 right-4 p-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              
              <ul className="flex flex-col gap-6 text-center mb-6">
                <NavLinks />
              </ul>
              
              <div className="flex flex-col gap-4">
                <NavLink 
                  to="/cart" 
                  className={({isActive}) => 
                    `flex items-center gap-2 justify-center hover:text-[#f8a93a] font-semibold py-2 ${isActive ? "text-[#f8a93a]": ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5 inline mr-2" />
                  Cart
                </NavLink> 
                
                <button className="bg-white text-[#f8a93a] px-4 py-2 rounded-full font-medium hover:text-black">
                  <Link to='/creatinglist' onClick={() => setIsMenuOpen(false)}>Create listing</Link> 
                </button>
                
                {!isLogIn ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-2 border-[#FCB857] text-black px-4 py-2 rounded-full font-medium hover:bg-[#F6EBDA]">
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
                    className="flex items-center gap-3 p-3 rounded-full border-orange-400 text-black w-full"
                  >
                    <Link to="/userprofile" className="flex items-center gap-3 w-full justify-center" onClick={() => setIsMenuOpen(false)}>
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png" 
                          alt="User Profile"
                        />
                        <AvatarFallback>{firstName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold">{firstName}</span>
                    </Link>
                  </Button>
                )}
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
      className={({ isActive}) =>
        `hover:text-[#f8a93a] font-normal text-base md:text-lg ${isActive ? "text-[#f8a93a]": "text-[#000000]"}`
      }>Home</NavLink>
    <NavLink to='/market' 
      className={({ isActive}) =>
        `hover:text-[#f8a93a] font-normal text-base md:text-lg ${isActive ? "text-[#f8a93a]": "text-[#000000]"}`
      }>Market</NavLink>
    <NavLink to='/company' 
      className={({ isActive}) =>
        `hover:text-[#f8a93a] font-normal text-base md:text-lg ${isActive ? "text-[#f8a93a]": "text-[#000000]"}`
      }>Company</NavLink>
  </>
)

export default Header;
