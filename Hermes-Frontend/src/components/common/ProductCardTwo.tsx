import React, { useState, useEffect, useRef } from 'react'
import { Heart,ShoppingCartIcon } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { callApi } from "@/api/api"
import { GetAddToWishlistRequest } from "@/api/types"
import { Product } from "@/api/common.types"
import { isProductInWishlist, addProductToWishlistCache } from "@/utils/wishlistCache"

interface ProductCardTwoProps {
  product?: Product;  
}

const ProductCardTwo = ({product}: ProductCardTwoProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isInWishlist, setIsInWishlist] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const hasCheckedWishlist = useRef(false);

    useEffect(() => {
      const checkWishlistStatus = async () => {
        if (!product?.id || hasCheckedWishlist.current) return;
        
        try {
          const isInWishlist = await isProductInWishlist(product.id);
          setIsInWishlist(isInWishlist);
          hasCheckedWishlist.current = true;
        } catch (error) {
          console.error('Error checking wishlist status:', error);
        }
      };
      
      checkWishlistStatus();
    }, [product?.id]);

    const handleAddToWishlist = async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (!product?.id || isInWishlist) {
        console.log('Product already in wishlist or invalid ID'); 
        return;
      }

      try {
        const request: GetAddToWishlistRequest = {
          productId: product.id
        }
        const response = await callApi(request, "/wishlist/add")
        if ('status' in response) {
          setIsInWishlist(true)
          
          // Update cache with this product
          if (product) {
            addProductToWishlistCache(product);
          }
          
          alert(`${product.name || 'Product'} has been added to your wishlist`)
        }
      } catch (error) {
        console.error('Error adding to wishlist:', error)
        alert('Failed to add item to wishlist')
      }
    }

    // add to cart
    const handleAddToCart = async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (!product?.id) {
        console.log('Invalid product ID');
        return;
      }

      try {
        const req: GetAddToWishlistRequest = {
          productId: product.id,
        }
  
        const response = await callApi(req, "/cart/add");
        if ("status" in response) {
          alert(`${product.name || 'Product'} added to cart successfully`)
        } else if ("error_code" in response) {
          setError(response.description)
        }
      } catch (err) {
        console.error("Cart error:", err)
        setError("Failed to add item to cart")
      }
    }
    
    const images = [
      "https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png",
    ]
  
    if (!product) {
      return (
        <Card className="overflow-hidden max-w-[300px] h-full bg-white rounded-2xl border border-gray-100">
          <div className="p-4 rounded-lg animate-pulse">
            <div className="relative mb-3 rounded-lg bg-gray-200 aspect-square"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </Card>
      );
    }

    return (
      <Card 
        className="overflow-hidden max-w-[300px] h-full bg-white rounded-2xl border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-4 rounded-lg">
          <div className="relative mb-3 rounded-lg border-2 border-orange-100">
            {isHovered ? (
              <Carousel className="w-full aspect-square">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={src}
                        alt={`Product view ${index + 1}`}
                        className="aspect-square object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" onClick={(e) => e.stopPropagation()} />
                <CarouselNext className="right-2" onClick={(e) => e.stopPropagation()} />
              </Carousel>
            ) : (
              <img
                src={images[0]}
                alt={product.name || 'Product image'}
                className="aspect-square object-cover rounded-lg"
              />
            )}
            
            <div className="absolute top-2 left-2 flex items-center bg-white rounded-md px-2 py-1 shadow-sm">
              <span className="font-semibold text-sm">4.8</span>
              <span className="text-yellow-400 ml-1">★</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`absolute top-2 right-2 h-8 w-8 rounded-full ${isInWishlist ?'bg-red-300' : 'bg-white '}`}
              onClick={handleAddToWishlist}
            >

              <Heart className={`h-5 w-5 ${isInWishlist ? 'text-red-400' : 'text-gray-400'}`} />
            </Button>
          </div>
  
          <h3 className="font-medium text-sm mb-2 line-clamp-2 uppercase text-wrap">
           {product.name || 'Untitled Product'}
          </h3>
  
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-gray-400 line-through text-sm"></span>
            <span className="text-2xl font-semibold text-[#f4a340]">${product.price || 0}</span>
            <span className="text-sm text-gray-500">/per week</span>
          </div>
  
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {product.qty || 0} Available in stock
            </span>
            <Button 
              size="sm" 
              className="bg-[#f4a340] hover:bg-[#e59635] rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleAddToCart}
            >
              <span className="sr-only">Add to cart</span>
              <ShoppingCartIcon/>
            </Button>
          </div>
        </div>
      </Card>
    )
}

export default ProductCardTwo
