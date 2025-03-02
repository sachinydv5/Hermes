import React from 'react'

const ProductDetailSkeleton = () => {
  return (
    <div>
         <div className="w-[90vw] mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Skeleton */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="flex-shrink-0 w-20 aspect-[4/3] bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-8">
            {/* Rating and Title */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
                <div className="w-48 h-5 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex justify-between">
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-40 h-4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            {/* Price and Options */}
            <div className="space-y-6">
              <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              <div className="flex items-center gap-4">
                <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
                <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6">
              <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse" />
              <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse" />
              <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t">
              <div className="w-48 h-5 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="h-8 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-2 mt-6">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="mt-8">
          <div className="flex gap-4 border-b">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton