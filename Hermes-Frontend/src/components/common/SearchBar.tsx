import React from 'react'
import { Button } from '../ui/button'
import { SearchIcon, X } from 'lucide-react'

interface SearchBarProps {
    isSearchVisible: boolean;
    toggleSearch: () => void;
  }

export const SearchBar = ({isSearchVisible,toggleSearch}: SearchBarProps) => {
  return (
    <div> <div className="relative flex items-center h-10">
    {/* Search bar with fixed position */}
    <div className={`absolute right-0 top-0 transform transition-all duration-200 ease-in-out ${isSearchVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{minWidth: '36px'}}>
      <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 outline-none w-[200px] lg:w-[250px] text-sm"
          autoFocus={isSearchVisible}
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
  </div></div>
  )
}
