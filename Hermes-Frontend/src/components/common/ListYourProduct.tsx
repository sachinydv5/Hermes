import React from 'react'
import { Wallet } from 'lucide-react'
import { Button } from "@/components/ui/button"

const ListYourProduct = () => {
  return (
    <div className="container mx-auto px-4 py-12 mb-20">
    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
      <div className="space-y-16">
        <h1 className=" text-[#22262e] text-5xl font-bold font-['Poppins'] leading-[56px]">List your product</h1>
        
        <div className="space-y-14">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="w-64 text-[#22262e] text-2xl font-semibold font-['Poppins'] leading-loose">Create a profile</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="w-64 text-[#22262e] text-2xl font-semibold font-['Poppins'] leading-loose">Get verified</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="w-64 text-[#22262e] text-2xl font-semibold font-['Poppins'] leading-loose">Upload product</span>
          </div>
        </div>

        <Button className=" text-[#fcb857] text-base font-medium font-['Roboto'] leading-normal tracking-wide  rounded-[50px] border-2 border-[#f8d9a9]" variant="outline">
          Create listing
        </Button>
      </div>

      <div className="relative w-full md:w-1/2 lg:w-1/3 aspect-square top-20">
        <img
          src="geometricshapes.png"
          alt="Decorative illustration showing geometric shapes"
          className="h-5/6 object-contain"
        />
      </div>
    </div>
  </div>
  )
}

export default ListYourProduct

