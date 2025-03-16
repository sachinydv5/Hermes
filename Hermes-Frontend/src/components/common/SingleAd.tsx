import React from 'react'
import { Button } from '../ui/button'

const SingleAd = () => {
  return (
    <div className="relative w-[90vw] mx-auto bg-black overflow-hidden rounded-3xl mt-20 mb-20">
    <div className="container relative mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="z-10 mb-8 md:mb-0 ">
        <h2 className="text-amber-400 text-2xl md:text-3xl font-bold mb-1">
          RENT OUT
        </h2>
        <p className="text-zinc-400 text-sm mb-2">
          JOIN THE CLUB
        </p>
        <p className="text-white text-lg">
          From $99
        </p>
      </div>

      {/* Center Section - Watch Image */}
      
      <div className="z-10 my-8 md:my-0 md:w-1/3 flex justify-center">
        <img
          src="/ads-images/banner.png"
          alt="Opplo Watch Sport Series 8"                                                                              
          className="object-contain"
        />
      </div>
      {/* Right Section */}
      <div className="z-10">
        <p className="text-amber-400 text-sm md:text-base mb-1">
          Opplo Watch Sport
        </p>
        <p className="text-amber-400 text-sm md:text-base mb-2">
          Series 8
        </p>
        <h1 className="text-white text-xl md:text-3xl font-medium mb-4">
          A healthy leap ahead
        </h1>
      </div>
      <Button
          
          className="bg-white text-black hover:bg-zinc-100 rounded-full "
        >
            Discover Now
        </Button>
    </div>
  </div>
  )
}

export default SingleAd