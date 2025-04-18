import React, { useState } from 'react'


interface Category {
    imageSrc: string
    label: string
  } 


const PopularCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories: Category[] = [
    { imageSrc: "/category-images/Game.svg", label: "Gaming" },
    { imageSrc: "/category-images/Sports.svg", label: "Sport Equip" },
    { imageSrc: "/category-images/Kitchen.svg", label: "Kitchen" },
    { imageSrc: "/category-images/Cleaner.svg", label: "Robot Cleaner" },
    { imageSrc: "/category-images/Mobiles.svg", label: "Mobiles" },
    { imageSrc: "/category-images/Office.svg", label: "Office" },
    { imageSrc: "/category-images/Camera.svg", label: "Cameras" },
    { imageSrc: "/category-images/10.svg", label: "Computers" },
    { imageSrc: "/category-images/Television.svg", label: "Televisions" },
    { imageSrc: "/category-images/Audio.svg", label: "Audios" },
    
  ]

  const handleCategorySelect = (label: string) => {
    setSelectedCategory(label === selectedCategory ? null : label)
  }
  return (
    <div>
       <section className="w-full py-8 ">
      <div className="w-[90vw] mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Popular Categories</h2>
          <button 
            onClick={() => console.log('View all categories')} 
            className="text-xl text-gray-600 hover:text-gray-900 transition-colors"
          >
            {/* View All */}
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 ">
          {categories.map((category) => (
            <div
              key={category.label}
              onClick={() => handleCategorySelect(category.label)}
              className={`
                flex flex-col items-center space-y-2 cursor-pointer transition-transform duration-300 hover:scale-125
                ${selectedCategory === category.label ? 'scale-125' : ''}
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
                w-30 h-30 rounded-full  flex items-center justify-center 
                ${selectedCategory === category.label ? 'ring-2 ring-primary ring-offset-2' : ''}
              `}>
                <img 
                  src={category.imageSrc}
                  alt={`${category.label} icon`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-center text-[#313131]">
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
