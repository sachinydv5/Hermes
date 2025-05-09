import React, { useState } from 'react'
import { Button } from '../ui/button'
import { SearchIcon, X } from 'lucide-react'
import useSearch from '@/hooks/useSearch'
import { Product } from '@/api/common.types'
import { Link } from 'react-router-dom'

interface SearchBarProps {
    isSearchVisible: boolean;
    toggleSearch: () => void;
}

export const SearchBar = ({isSearchVisible, toggleSearch}: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');
  const { isLoading, productData, error } = useSearch(searchText);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="relative">
      <div className="relative flex items-center h-10">
        {/* Search bar with fixed position */}
        <div className={`absolute right-0 top-0 transform transition-all duration-200 ease-in-out ${isSearchVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{minWidth: '36px'}}>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 outline-none w-[200px] lg:w-[250px] text-sm"
              autoFocus={isSearchVisible}
              value={searchText}
              onChange={handleSearchChange}
            />
            <Button variant="ghost" size="icon" className="p-2" onClick={toggleSearch}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Search Icon with fixed position */}
        <div className={`transition-all duration-200 ease-in-out ${isSearchVisible ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <Button variant="ghost" size="icon" className="p-1" onClick={toggleSearch}>
            <SearchIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </Button>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isSearchVisible && searchText && (
        <div className="absolute right-0 mt-2 w-[200px] lg:w-[250px] bg-white rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="p-4 text-center text-red-500">{error}</div>
          ) : productData.length > 0 ? (
            <div className="py-2">
              {productData.map((product: Product) => (
                <Link
                  key={product.id}
                  to={`/productdetail/${product.id}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={toggleSearch}
                >
                  <div className="flex items-center gap-2">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                    )}
                    <div>
                      <div className="font-medium text-sm">{product.name}</div>
                      <div className="text-xs text-gray-500">${product.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">No products found</div>
          )}
        </div>
      )}
    </div>
  )
}
