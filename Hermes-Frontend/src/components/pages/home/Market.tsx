import React, { useState } from 'react'
import Search from '../../common/SearchBar'
import PopularCategory from '../../common/PopularCategory'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductCard from '../../common/ProductCard'
import NavBar from '../../common/NavBar'


const trendingItems = [
  "Vacuum Robot",
  "Bluetooth Speaker",
  "OLED TV",
  "Security Camera",
  "MacBook M1",
  "Smart Washing Machine",
  "iPad Mini 2023",
  "PS5",
  "Earbuds",
  "Air Condition Inverter",
  "Flycam",
  "Electric Bike",
  "Gaming Computer",
  "Smart Air Purifier",
  "Apple Watch",
];

const Market = () => {

    const [selectedCategory, setSelectedCategory] = useState('Kitchen')

    // Filter products based on the selected category
    // const filteredProducts = allProducts.filter(product => product.category === selectedCategory)
  
    const categories = ['Kitchen', 'Televisions', 'Electronics', 'Cleaning', 'Cameras', 'Computers','Audio',]
  
  return (
    <div>
      <NavBar/>
      <section className=' mb-10 mt-10'>
      <Search/>
      </section>
        <section className=' mb-10'>
        <PopularCategory/>
        </section>
  
   <section className=' mb-10'>
      <div className="max-w-screen-2xl p-6 mx-auto bg-[#F6EBDA] space-y-6 rounded-3xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Best Weekly Deals</h2>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-2 -mx-2 px-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-lg whitespace-nowrap ${selectedCategory === category ? 'bg-gray-900 text-white' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
 <Button variant="outline" className="rounded-lg" aria-label="More categories" >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Map through filtered products and render ProductCard for each */}
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          {/* {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No products available in this category.</div>
          )} */}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full">
            See All Products
          </Button>
        </div>
      </div>
    </section>
     {/* Trending Search */}
     <section className='container mx-auto mb-10'>
    <div className="p-6  text-black">
      <h2 className="text-xl font-bold mb-4">Trending Search</h2>
      <div className="flex flex-wrap gap-3">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 border border-[#FCB857] rounded-full text-sm hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    </section>
    
  {/* Popular Seller */}
                 
    </div>
  )
}

export default Market
