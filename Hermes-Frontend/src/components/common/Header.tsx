import React, { useEffect, useState } from 'react';
import { Menu, Search, ShoppingCart, X } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  const[isSearchVisible, setIsSearchVisible] = useState(false);
  const isLogIn: boolean = useAppSelector(isUserLoggedIn)
  const firstName: string = useAppSelector(userData)
  console.log(firstName)

  const location = useLocation(); // Get the current location

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchVisible(false);
  }, [location]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

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
                  src="logo.png"
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
                src="vivarent_logo_vertical.png"
                alt="Vivarrent logo"
                className="h-10 lg:h-14 pb-4"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <ul className="flex md:flex-row md:gap-2 lg:gap-8 xl:gap-10">
              <NavLinks/>
            </ul>
          </div>
          
          {/* Desktop Right Items */}
          <div className="hidden md:flex md:items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Search Icon and Search Bar */}
            <div className="relative flex items-center h-10">
              {/* Search bar with fixed position */}
              <div className={`absolute right-0 top-0 transform transition-all duration-200 ease-in-out ${isSearchVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{minWidth: '36px'}}>
                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 outline-none w-[200px] lg:w-[250px] text-sm"
                    autoFocus={isSearchVisible}
                  />
                  <Button variant="ghost" size="icon" className="p-2" onClick={toggleSearch}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Search Icon with fixed position */}
              <div className={`transition-all duration-200 ease-in-out ${isSearchVisible ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <Button variant="ghost" size="icon" className="p-1" onClick={toggleSearch}>
                  <Search className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </Button>
              </div>
            </div>
            
            {/* Cart Icon */}
            <NavLink to="/cart" className={({isActive}) => 
              `hover:text-[#f8a93a] font-semibold ${isActive ? "text-[#f8a93a]": ""}`}>
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </NavLink> 

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

          {/* Mobile Navigation Items - Right */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Search Icon for Mobile and Search Bar */}
            <div className="relative flex items-center h-8">
              {/* Search bar with fixed position */}
              <div className={`absolute right-0 top-0 transform transition-all duration-200 ease-in-out ${isSearchVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{minWidth: '36px'}}>
                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-1 outline-none w-[150px] sm:w-[180px] text-xs sm:text-sm"
                    autoFocus={isSearchVisible}
                  />
                  <Button variant="ghost" size="icon" className="p-1" onClick={toggleSearch}>
                    <X className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Search Icon with fixed position */}
              <div className={`transition-all duration-200 ease-in-out ${isSearchVisible ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <Button variant="ghost" size="icon" className="p-1" onClick={toggleSearch}>
                  <Search className="h-6 w-6 sm:h-5 sm:w-5 font-medium" />
                </Button>
              </div>
            </div>
            
            <NavLink to="/cart" className={({isActive}) => 
              `hover:text-[#f8a93a] font-semibold ${isActive ? "text-[#f8a93a]": ""}`}>
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            </NavLink>
            
            {/* Mobile Login/Profile Button */}
            {!isLogIn ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-2 border-[#FCB857] text-black px-1 py-1 sm:px-2 rounded-full text-base sm:text-lg md:text-xl font-medium hover:bg-[#F6EBDA]">
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
        isActive ? "text-[#f8a93a] font-medium  text-base sm:text-lg md:text-xl" : "text-[#000000] hover:text-[#f8a93a] font-medium text-base sm:text-lg md:text-xl"
      }>Home</NavLink>
    <NavLink to='/market' 
      className={({ isActive }) => 
        isActive ? "text-[#f8a93a] font-medium  text-base sm:text-lg md:text-xl" : "text-[#000000] hover:text-[#f8a93a] font-medium  text-base sm:text-lg md:text-xl"
      }>Market</NavLink>
    <NavLink to='/about' 
      className={({ isActive }) => 
        isActive ? "text-[#f8a93a] font-medium  text-base sm:text-lg md:text-xl" : "text-[#000000] hover:text-[#f8a93a] font-medium  text-base sm:text-lg md:text-xl"
      }>Company</NavLink>
  </>
)

export default Header;
