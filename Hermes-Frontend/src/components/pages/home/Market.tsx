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
import TreandingSearch from '@/components/common/TreandingSearch'
import SingleAd from '@/components/common/SingleAd'
import MultipleAd from '@/components/common/MultipleAd'
import MarketSkeleton from '@/components/skeleton/MarketSkeleton'

const Market = () => {
  const [selectedCategory, setSelectedCategory] = useState('Kitchen')
  const [productData, setProductData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
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
      <MarketSkeleton/>
    );
  }

  return (
    <div className='w-full mx-auto'>
      <section className='mb-10 mt-10'>
        <Search/>
      </section>

      <section className='mb-10'>
        <PopularCategory/>
      </section>
      
      {/* AD SECTION*/}
      <section className=''>
        <MultipleAd/>
      </section>
      
      {/* weekly deals section */}
      <section className='mb-6 sm:mb-8 md:mb-10'>
        <div className="w-[90vw] bg-[#F6EBDA] space-y-4 sm:space-y-6 rounded-3xl p-4 sm:p-6 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-4xl font-bold text-gray-900">Best Weekly Deals</h2>
          </div>
          <div className="relative">
              <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 md:gap-4 no-scrollbar">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`whitespace-nowrap rounded-lg font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-[#313131] py-2 sm:py-4 md:py-6 px-3 sm:px-4 flex-shrink-0 ${
                      selectedCategory === category 
                        ? 'bg-gray-900 text-[#F9D9AA]' 
                        : 'border-none bg-transparent shadow-none'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
        
      
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
            <div className="flex justify-center pt-2 sm:pt-4">
              <Button variant="outline" className="rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-4 md:py-6 text-base sm:text-lg font-bold">
                <Link to='/productlist'>See All Products</Link>
              </Button>
            </div>
          </div>
      </section>

      {/* Trending Search */}
      <section className='w-[90vw] mx-auto mb-10'>
        <TreandingSearch/>
      </section>
      
      {/* Popular Seller */}
      <PopularSellers/>

      {/* HOT COLLECTION */}
      <Collection/>

      {/* AD  */}
      <SingleAd/>

      {/* RECENTLY VIEW */}
      <RecentlyView/>

      {/* list your product */}
      <ListYourProduct/>
    </div>
  )
}

export default Market
