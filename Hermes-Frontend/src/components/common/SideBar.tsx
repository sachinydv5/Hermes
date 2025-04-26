import React from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

const categories = [
    "Electronic Devices",
    "Computer & Laptop",
    "Smartphone",
    "Headphone",
    "Mobile Accessories",
  ]
  
  const brands = [
    "Apple",
    "Samsung",
    "Google",
    "Sony",
    "LG",
  ]
  
  const priceRanges = [
    "All Price",
    "Under $50",
    "$50 to $100",
    "$100 to $200",
    "$200 to $500",
    "$500 to $1,000",
    "$1,000 to $10,000",
  ]
  
  const popularTags = [
    "Wireless",
    "Bluetooth",
    "Noise Cancelling",
    "In-Ear",
    "Over-Ear",
    "Sport",
    "Waterproof",
  ]
  
  
const SideBar = () => {
  return (
    <div className="w-full lg:w-64 space-y-6 pb-6">
      <div>
        <h3 className="font-medium text-base mb-3">CATEGORY</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} className="rounded-full"/>
              <label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium text-base mb-3">PRICE</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range} className="flex items-center justify-between text-sm">
              <label htmlFor={range} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox id={range} className="rounded-full"/>
                <span>{range}</span>
              </label>
            </div>
          ))}
        </div>
       </div> 

      <div>
        <h3 className="font-medium text-base mb-3">POPULAR BRANDS</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-base mb-3">POPULAR TAGS</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
