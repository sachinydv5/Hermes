import React, { useState } from 'react'


interface Category {
    imageSrc: string
    label: string
  } 


const PopularCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories: Category[] = [
    { imageSrc: "/placeholder.png?height=40&width=40", label: "Gaming" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Sport Equip" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Kitchen" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Robot Cleaner" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Mobiles" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Office" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Cameras" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Computers" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Televisions" },
    { imageSrc: "/placeholder.svg?height=40&width=40", label: "Audios" },
    
  ]

  const handleCategorySelect = (label: string) => {
    setSelectedCategory(label === selectedCategory ? null : label)
  }
  return (
    <div>
       <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Categories</h2>
          <button 
            onClick={() => console.log('View all categories')} 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 ">
          {categories.map((category) => (
            <div
              key={category.label}
              onClick={() => handleCategorySelect(category.label)}
              className={`
                flex flex-col items-center space-y-2 cursor-pointer
                ${selectedCategory === category.label ? 'scale-105' : ''}
                transition-all duration-200 ease-in-out
              `}
              role="button"
              tabIndex={0}
              aria-pressed={selectedCategory === category.label}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategorySelect(category.label)
                }
              }}
            >
              <div className={`
                w-20 h-20 rounded-full bg-[#fbe6d4] flex items-center justify-center
                ${selectedCategory === category.label ? 'ring-2 ring-primary ring-offset-2' : ''}
              `}>
                <image
                  
                  src={category.imageSrc}
                  alt={`${category.label} icon`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-bold text-center text-gray-900">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
   
    </div>
  )
}

export default PopularCategory
