import React, { useState } from "react";
import { Search, X } from 'lucide-react';


interface SearchBarProps {
  onSearch?: (query: string) => Promise<void>;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search for products",
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  

  const clearSearch = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <form className={`flex justify-center py-6 ${className}`}>
      <div className="bg-white rounded-full shadow-2xl flex items-center w-full max-w-4xl p-2 relative">
        <input
          type="text"

          value={searchQuery}
          // onChange={handleInputChange}
          placeholder={placeholder}
          className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
          aria-label="Search input"
          role="searchbox"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}

        <button 
          type="submit"
          className={`bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-full transition-all
            ${isLoading ? 'animate-pulse' : ''}`}
          aria-label="Submit search"
        >
          <Search className={`text-gray-400 ${isLoading ? 'animate-spin' : ''}`}/>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;