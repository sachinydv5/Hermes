import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce'; 
import { getProduct } from '@/api/api';
import { Product } from '@/api/common.types';
import { GetProductResponse } from '@/api/types';


const useSearch = (searchText: string, debounceDelay: number = 500) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Debounce the searchText 
  const debouncedSearchText = useDebounce({ value: searchText, delay: debounceDelay });

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedSearchText) return; // unnecessary fetches if search text is empty

      setIsLoading(true);
      try {
        const response: GetProductResponse = await getProduct("", `/product/getProduct?searchText=${debouncedSearchText}`);
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
  }, [debouncedSearchText]); // Fetch data whenever the debounced search text changes

  return { isLoading, productData, error };
};

export default useSearch;
