import React from "react";
import { Search} from 'lucide-react'

const SearchBar = () => {
  return (
    <div className=" flex justify-center py-6">
      <div className="bg-white rounded-full shadow-2xl  flex items-center w-full max-w-4xl p-2">
        {/* Input field */}
        <input
          type="text"
          placeholder="Lorem Ipsum"
          className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
        />

        {/* Duration */}
        <div className="border-l border-gray-300 px-6 flex flex-col items-start">
          <label className="text-gray-500 text-sm">Duration</label>
          <select className="text-gray-800 text-sm focus:outline-none">
            <option>Choose dates</option>
          </select>
        </div>

        {/* Distance */}
        <div className="border-l border-gray-300 px-6 flex flex-col items-start">
          <label className="text-gray-500 text-sm">Distance</label>
          <select className="text-gray-800 text-sm focus:outline-none">
            <option>Choose distance</option>
          </select>
        </div>

        {/* Search Icon */}
        <button className="bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-full">
        <Search className="text-gray-400"/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;