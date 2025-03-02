import { getWishlist } from "@/api/api";
import { GetWishlistResponse } from "@/api/types";
import { Product } from "@/api/common.types";

// Global cache for wishlist data
let wishlistCache: Product[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 30000; // 30 seconds cache duration
let isFetching = false; // Flag to prevent concurrent API calls

/**
 * Gets wishlist data using cache if available or fetching from API if needed
 * @returns Promise resolving to wishlist products array
 */
export const getWishlistWithCache = async (): Promise<Product[]> => {
  const currentTime = Date.now();
  
  // Return cached data if available and not expired
  if (wishlistCache && currentTime - lastFetchTime < CACHE_DURATION) {
    console.log('Using cached wishlist data');
    return wishlistCache;
  }
  
  // Prevent multiple concurrent API calls
  if (isFetching) {
    console.log('Another request is already fetching wishlist data, waiting...');
    // Wait for the current fetch to complete
    await new Promise(resolve => {
      const checkCache = () => {
        if (!isFetching) {
          resolve(null);
        } else {
          setTimeout(checkCache, 100);
        }
      };
      checkCache();
    });
    
    // Return the cache that should now be populated
    if (wishlistCache) {
      return wishlistCache;
    }
  }
  
  // Fetch new data if cache is expired or not available
  try {
    console.log('Fetching fresh wishlist data from API');
    isFetching = true;
    
    const response = await getWishlist({}, "/wishlist/get") as GetWishlistResponse;
    
    if ("wishlist" in response) {
      wishlistCache = response.wishlist;
      lastFetchTime = currentTime;
      return wishlistCache;
    }
    return [];
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return [];
  } finally {
    isFetching = false;
  }
};

/**
 * Checks if a product is in the wishlist
 * @param productId The product ID to check
 * @returns Promise resolving to boolean indicating if product is in wishlist
 */
export const isProductInWishlist = async (productId: string): Promise<boolean> => {
  if (!productId) return false;
  
  const wishlistData = await getWishlistWithCache();
  return wishlistData.some(item => item.id === productId);
};

/**
 * Adds a product to the wishlist cache
 * @param product The product to add to cache
 */
export const addProductToWishlistCache = (product: Product): void => {
  if (!product || !wishlistCache) return;
  
  // Only add if not already in cache
  if (!wishlistCache.some(item => item.id === product.id)) {
    wishlistCache = [...wishlistCache, product];
    console.log(`Added product ${product.id} to wishlist cache`);
  }
};

/**
 * Removes a product from the wishlist cache
 * @param productId The product ID to remove from cache
 */
export const removeProductFromWishlistCache = (productId: string): void => {
  if (!productId || !wishlistCache) return;
  
  const initialLength = wishlistCache.length;
  wishlistCache = wishlistCache.filter(item => item.id !== productId);
  
  if (initialLength !== wishlistCache.length) {
    console.log(`Removed product ${productId} from wishlist cache`);
  }
};

/**
 * Invalidates the cache, forcing next request to fetch from API
 */
export const invalidateWishlistCache = (): void => {
  console.log('Wishlist cache invalidated');
  lastFetchTime = 0;
}; 