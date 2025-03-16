import React from 'react'
import { Skeleton } from '../ui/skeleton'
import ProductCardTwo from '../common/ProductCardTwo'

const MarketSkeleton = () => {
  return (<div className=''>
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
  )
}

export default MarketSkeleton