import React, { useEffect, useState } from 'react'
import Search from '../../common/SearchBar'
import PopularCategory from '../../common/PopularCategory'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductCard from '../../common/ProductCard'
import NavBar from '../../common/NavBar'
import ListYourProduct from '../../common/ListYourProduct'
import PopularSellers from '../../common/PopularSellers'
import Collection from '../../common/HotCollection'
import RecentlyView from '../../common/RecentlyView'
import { Link } from 'react-router-dom'
import ProductCardTwo from '../../common/ProductCardTwo'
import { Product } from '@/api/common.types'
import { GetProductResponse } from '@/api/types'
import { getProduct } from '@/api/api'
import { Skeleton } from "@/components/ui/skeleton"


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

const ProductSkeleton = () => (
  <div className="rounded-2xl bg-white p-4 shadow">
    <Skeleton className="h-[200px] w-full rounded-xl" />
    <div className="mt-4 space-y-3">
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  </div>
)

const Market = () => {

    const [selectedCategory, setSelectedCategory] = useState('Kitchen')
    const [productData, setProductData] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Filter products based on the selected category
    // const filteredProducts = allProducts.filter(product => product.category === selectedCategory)
  
    const categories = ['Kitchen', 'Televisions', 'Electronics', 'Cleaning', 'Cameras', 'Computers','Audio',]

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response: GetProductResponse = await getProduct("", "/product/getProduct");
          if ("error_code" in response) {
            setError(response.description);
          } else if ("status" in response) {
            setProductData(response.products);
          }
        } catch (err) {
          console.error("Product fetch error:", err);
          setError("Failed to fetch products. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchData();
    }, []);

    if (isLoading) {
      return (
        <div className=''>
          <section className='mb-10 mt-10'>
            {/* Search Bar Skeleton */}
            <div className="w-[90vw] mx-auto flex justify-center">
              <Skeleton className="h-14 w-[600px] rounded-full" />
            </div>
          </section>

          {/* Weekly Deals Section Skeleton */}
          <section className=''>
            <div className="w-[90vw] mb-10 p-6 mx-auto bg-[#F6EBDA] space-y-6 rounded-3xl">
              {/* Title Skeleton */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Skeleton className="h-10 w-64" />
              </div>

              {/* Categories Skeleton */}
              <div className="flex items-center justify-around overflow-hidden gap-4 pb-2 -mx-2 px-2">
                {[...Array(7)].map((_, index) => (
                  <Skeleton key={index} className="h-14 w-32 rounded-lg" />
                ))}
              </div>

              {/* Products Grid Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => (
                  <ProductCardTwo key={index} product={undefined} />
                ))}
              </div>

              {/* See All Button Skeleton */}
              <div className="flex justify-center">
                <Skeleton className="h-10 w-32 rounded-full" />
              </div>
            </div>
          </section>

          {/* Trending Search Section Skeleton */}
          <section className='w-[90vw] mx-auto mb-10'>
            <div className="p-6 text-black">
              <Skeleton className="h-10 w-48 mb-6" />
              <div className="flex flex-wrap gap-3">
                {[...Array(10)].map((_, index) => (
                  <Skeleton key={index} className="h-8 w-24 rounded-full" />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }

  
  return (
    <div className=''>
      <section className='mb-10 mt-10'>
      <Search/>
      </section>

        <section className='mb-10'>
        <PopularCategory/>
        </section>

        {/* AD SECTION*/}
        <section className=''>
        <div className="w-[90vw] mx-auto mb-24">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* EKO TV Card */}
          <div className="relative rounded-3xl overflow-hidden w-full lg:w-[calc(67%-1rem)] h-[450px] lg:h-[450px]">
            <img
              src="/ads-images/head_1.png"
              alt="EKO TV Background"
              className="absolute inset-0 w-full h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}
            <div className="relative z-20 p-8 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  EKO 40"
                  <br />
                  Android
                  <br />
                  TV
                </h2>
                <p className="text-sm text-gray-300 uppercase tracking-wider">
                  SMART FULL HD
                  <br />
                  ANDROID TV WITH
                  <br />
                  GOOGLE ASSISTANT
                </p>
              </div>
              <button
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors self-start"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Humidifying Fan Card */}
          <div className="relative  rounded-3xl overflow-hidden w-full lg:w-[calc(33%-1rem)] h-[450px]">
            <img
              src="/ads-images/head_2.png"
              alt="Humidifying Fan Background"
              className="absolute inset-0 w-full object-cover z-0"
            />
            {/* <div className="absolute inset-0 bg-[#6366F1] bg-opacity-70 z-10"></div> */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between items-center">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">Humidifying</h2>
                <h3 className="text-3xl font-bold text-white">Fan</h3>
                <p className="text-sm text-white opacity-90">From $299</p>
              </div>
              <button
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Discover Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
          {/* iPad Mini Card */}
          <div className="relative rounded-3xl overflow-hidden w-full sm:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] h-[230px]">
            <img
              src="/ads-images/head_3.png"
              alt="iPad Mini Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FFB067] to-[#FFEDD4] bg-opacity-70 z-10"></div> */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-black">
                  iPad
                  <br />
                  mini
                  <br />
                  2022
                </h2>
                <p className="text-sm text-gray-700">Mega Power in mini size</p>
              </div>
              {/* <button
                className="inline-block bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-80 transition-colors self-start"
              >
                Shop Now
              </button> */}
            </div>
          </div>

          {/* Air Purifier Card */}
          <div className="relative rounded-3xl overflow-hidden w-full sm:w-[calc(25%-0.5rem)] lg:w-[calc(30%-1rem)] h-[230px]">
            <img
              src="/ads-images/head_4.png"
              alt="Air Purifier Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div> */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Air</h2>
                <h3 className="text-2xl font-bold text-white">Purifier</h3>
                <p className="text-sm text-white opacity-70">FROM</p>
                <p className="text-xl font-bold text-[#FFD39F]">$169</p>
              </div>
            </div>
          </div>

          {/* Washing Machine Card */}
          <div className="relative bg-gray-200 rounded-3xl overflow-hidden w-full sm:w-[calc(25%-0.5rem)] lg:w-[calc(30%-1rem)] h-[230px]">
            <img
              src="/ads-images/head_5.png"
              alt="Anatico Max 2 Washing Machine Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gray-200 bg-opacity-70 z-10"></div> */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-600 uppercase">WASHING MACHINE</p>
                <h2 className="text-2xl font-bold text-gray-900">
                  Anatico
                  <br />
                  Max 2
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>
  
  {/* weekly deals section */}
   <section className=''>
      <div className="w-[90vw] mb-10 p-6 mx-auto bg-[#F6EBDA] space-y-6 rounded-3xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-4xl font-bold text-gray-900">Best Weekly Deals</h2>
          {/* <Button
                      variant="outline"
                      size="icon"
                      // onClick={() => scroll("right")}
                      className="rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button> */}
        </div>

        <div className="flex items-center justify-around overflow-hidden gap-4 pb-2 -mx-2 px-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`  rounded-lg  font-semibold text-2xl text-[#313131] py-6 ${selectedCategory === category ? 'bg-gray-900 text-[#F9D9AA]' : 'border-none bg-transparent shadow-none'}`}
              onClick={() => setSelectedCategory(category)}
            >

              {category}
            </Button>
          ))}
        </div>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {error ? (
            <div className="col-span-full text-center text-red-500">{error}</div>
          ) : productData.length > 0 ? (
            productData.slice(0, 8).map((product) => (
              <ProductCardTwo key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No products available in this category.</div>
          )}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full">
            <Link to='/productlist'>See All Products</Link>
          </Button>
        </div>
      </div>
    </section>

     {/* Trending Search */}
     <section className='w-[90vw] mx-auto mb-10'>
    <div className="p-6  text-black">
      <h2 className="text-4xl font-bold">Trending Search</h2>
      <div className="flex flex-wrap gap-3 mt-10">
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
   <PopularSellers/>

  {/* HOT COLLECTION */}
  <Collection/>

  {/* AD  */}
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

    {/* RECENTLY VIEW */}
    <RecentlyView/>

  {/* list your product */}
  <ListYourProduct/>
                 
    </div>
  )
}

export default Market
