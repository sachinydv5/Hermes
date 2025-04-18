import React from 'react'
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

const TreandingSearch = () => {
  return (
    <div><div className="p-6  text-black">
    <h2 className="text-4xl font-bold">Trending Search</h2>
    <div className="flex flex-wrap gap-3 mt-10">
      {trendingItems.map((item, index) => (
        <div
          key={index}
          className="px-4 py-2 border border-[#FCB857] rounded-full text-xl hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default TreandingSearch
