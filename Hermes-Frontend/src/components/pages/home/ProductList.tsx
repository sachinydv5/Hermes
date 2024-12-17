import React, { useEffect, useState } from 'react'
import ProductCardTwo from '../../common/ProductCardTwo'
import { Search, X } from 'lucide-react'
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
import { Sidebar } from "./components/sidebar"
import SideBar from '../../common/SideBar'
import { GetProductRequest, GetProductResponse } from '../../../api/types'
import { getProduct } from '../../../api/api'
import { Product } from '../../../api/common.types'
import { Link } from 'react-router-dom'


// Sample active filters
const activeFilters = ["Wireless", "Under $50", "In Stock"]

const ProductList = () => {
  const [productData , setProductData] = useState<Product[]>([]);
const [error, setError] = useState<string | null>(null)
  console.log("product data", productData)
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response: GetProductResponse = await getProduct("", "/product/getProduct");
          if ("error_code" in response) {
            setError(response.description);
          }
         else if ("status" in response) {
           setProductData(response.products);
          console.log("product detail",response)
          } 
        } catch (err) {
          console.error("Sign up error:", err);
          setError("");
        }
      };
    
      fetchData();
    }, []);
  return (
    <div className="container mx-auto py-8">
    <div className="flex gap-8">
      <SideBar />
      
      <div className="flex-1">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="relative w-96">
              <Input
                placeholder="Search for anything..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            
            <Select defaultValue="most-popular">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="most-popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium">Filters:</span>
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="text-xs">
                {filter}
                <Button variant="ghost" size="sm" className="h-auto p-0 ml-2">
                  <X className="h-3 w-3" />
                  {/* <span className="sr-only">Remove {filter} filter</span> */}
                </Button>
              </Badge>
            ))}
            <Button variant="link" size="sm" className="text-xs">
              Clear all filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {productData.map((items) => (
          <Link to={`/productdetail/${items?.id}`}> <ProductCardTwo  key={items?.id}  product={items} /> </Link>
          ))}     
        </div>

        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 text-sm rounded-md ${
                  page === 1
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductList
