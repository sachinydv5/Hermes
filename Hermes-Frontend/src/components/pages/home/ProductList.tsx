import React, { useEffect, useState } from 'react'
import ProductCardTwo from '../../common/ProductCardTwo'
import { Search, X, Loader2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SideBar from '../../common/SideBar'
import { GetProductRequest, GetProductResponse } from '../../../api/types'
import { getProduct } from '../../../api/api'
import { Product } from '../../../api/common.types'
import { Link, useNavigate } from 'react-router-dom'

// Define type for sort options
type SortOption = 'most-popular' | 'price-low' | 'price-high' ;

// Sample active filters
const activeFilters = ["Wireless", "Under $50", "In Stock"]

const ProductList = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('most-popular');




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

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    // Implementation of sorting logic here
    const sortedProducts = [...productData];
    switch (value) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      // Add other sorting cases as needed
    }
    setProductData(sortedProducts);
  };

  const removeFilter = (filterToRemove: string) => {
    // Implementation of filter removal logic here
    console.log('Removing filter:', filterToRemove);
  };

  const clearAllFilters = () => {
    // Implementation of clear all filters logic here
    console.log('Clearing all filters');
  };

  if (isLoading) {
    return (
      <div className="w-[90vw] mx-auto py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {[...Array(8)].map((_, index) => (
            <ProductCardTwo key={index} product={undefined} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[90vw] mx-auto py-20">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90vw] mx-auto py-10 sm:py-16">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* <div className="hidden lg:block lg:min-w-64">
          <SideBar />
        </div> */}
        <div className="flex-1">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* <div className="relative w-full sm:w-96">
                <Input
                  placeholder="Search for anything..."
                  className="pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div> */}
              
              <Select 
                defaultValue="most-popular" 
                onValueChange={(value: SortOption) => handleSortChange(value)}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="most-popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  {/* <SelectItem value="newest">Newest First</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            {/* <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium">Filters:</span>
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="text-xs">
                  {filter}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-auto p-0 ml-2"
                    onClick={() => removeFilter(filter)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {filter} filter</span>
                  </Button>
                </Badge>
              ))}
              <Button 
                variant="link" 
                size="sm" 
                className="text-xs"
                onClick={clearAllFilters}
              >
                Clear all filters
              </Button>
            </div> */}
          </div>

          {/* Mobile sidebar toggle */}
          <div className="lg:hidden mb-4">
            <Button variant="outline" className="w-full flex items-center justify-between" 
              onClick={() => alert('Mobile sidebar would open here')}>
              <span>Filters</span>
              <span className="text-xs text-muted-foreground">
                {activeFilters.length} active
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {productData.map((item) => (
              <Link key={item.id} to={`/productdetail/${item.id}`}>
                <ProductCardTwo product={item} />
              </Link>
            ))}     
          </div>

          {/* <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 sm:px-4 sm:py-2 text-sm rounded-md ${
                    page === 1
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
