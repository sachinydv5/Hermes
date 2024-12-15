import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { InfoIcon, ShoppingCart, X } from 'lucide-react'
import axios from 'axios'
import { GetWishlistResponse } from '../../api/types'
import { getWishlist } from '../../api/api'
const wishlistItems: WishlistItem[] = [
    {
      id: "1",
      name: "Bose Sport Earbuds  Wireless Earphones - ",
      price: 99.99,
      originalPrice: 199.99,
      image: "productimage.png",
      inStock: true,
    },
    {
      id: "2",
      name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
      price: 2300.00,
      image: "productimage.png",
      inStock: true,
    },
    {
      id: "3",
      name: "Portable Writing Machine, 11lbs capacity Model RNMFMM",
      price: 70.00,
      image: "productimage.png",
      inStock: true,
    },
    {
      id: "4",
      name: "TOZO T6 True Wireless Earbuds Bluetooth ",
      price: 229.00,
      originalPrice: 299.00,
      image: "productimage.png",
      inStock: false,
    },
    {
      id: "5",
      name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom ",
      price: 1499.99,
      image: "productimage.png",
      inStock: true,
    },
  ]
  
const Wishlist = () => {
const [wishlistData, setWishlistData] = useState();
const [error, setError] = useState<string | null>(null)


useEffect(() => {
    const fetchData = async () => {
      try {
        const response: GetWishlistResponse = await getWishlist("", "/wishlist/get");
        if ("error_code" in response) {
          setError(response.description);
        }
       else if ("product" in response) {
        //  setProductData(response.product);
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
    <h1 className="text-2xl font-bold mb-6">Wishlist</h1>
    <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-muted-foreground">
        <div className="col-span-6 lg:col-span-7">PRODUCTS</div>
        <div className="col-span-2">PRICE</div>
        <div className="hidden lg:block lg:col-span-1">STOCK STATUS</div>
        <div className="col-span-4 lg:col-span-2">ACTIONS</div>
      </div>
      <div className="divide-y">
        {wishlistItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 gap-4 p-4 items-center">
            <div className="col-span-6 lg:col-span-7">
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium leading-tight truncate">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="space-y-1">
                <div className="font-medium">${item.price.toFixed(2)}</div>
                {item.originalPrice && (
                  <div className="text-sm text-muted-foreground line-through">
                    ${item.originalPrice.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1">
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  item.inStock
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {item.inStock ? "IN STOCK" : "OUT OF STOCK"}
              </span>
            </div>
            <div className="col-span-4 lg:col-span-2">
              <div className="flex items-center gap-2">
                <Button
                  variant={item.inStock ? "default" : "secondary"}
                  size="sm"
                  className="w-full bg-[#FCB857]"
                  disabled={!item.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Add to Cart</span>
                </Button>
                <Button variant="ghost" size="icon" className="shrink-0"
              >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Wishlist
