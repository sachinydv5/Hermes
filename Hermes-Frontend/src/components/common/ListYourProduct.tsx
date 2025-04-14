import React from 'react'
import { Wallet } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const ListYourProduct = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-8 sm:py-12 mb-10 sm:mb-20">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center lg:items-start justify-between">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 w-full lg:w-auto">
          <h1 className="text-[#22262e] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-[56px] text-center lg:text-left">List your product</h1>
          
          <div className="space-y-8 sm:space-y-10 lg:space-y-14">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-[#22262e] text-xl sm:text-2xl font-semibold leading-relaxed sm:leading-loose">Create a profile</span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-[#22262e] text-xl sm:text-2xl font-semibold leading-relaxed sm:leading-loose">Get verified</span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-[#22262e] text-xl sm:text-2xl font-semibold leading-relaxed sm:leading-loose">Upload product</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button className="text-[#fcb857] text-sm sm:text-base font-medium font-['Roboto'] leading-normal tracking-wide rounded-[50px] border-2 border-[#f8d9a9] px-6 py-2 sm:px-8 sm:py-3" variant="outline">
            <Link to='/creatinglist'>Create listing</Link> 
            </Button>
          </div>
      </div>
      <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 aspect-square mt-8 lg:mt-0 lg:top-10 flex justify-center">
          <img
            src="geometricshapes.png"
            alt="Decorative illustration showing geometric shapes"
            className="h-full sm:h-5/6 object-contain"
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default ListYourProduct

