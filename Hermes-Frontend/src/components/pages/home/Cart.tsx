import React, { useEffect, useState } from 'react';
import { Trash2, Minus, Plus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { descreseItem, fetchProduct, increaseItemQty, removeItemCompletely } from '@/app/store/cart';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { isUserLoggedIn } from '@/app/store/user';
import { toast } from 'react-toastify';
import { GetAddToWishlistRequest, OrderCreateRequest, OrderCreateResponse, PaymentCreateRequest, PaymentCreateResponse } from '@/api/types';
import { callApi } from '@/api/api';
import { Skeleton } from "@/components/ui/skeleton";
import { RootState } from '@/app/store/rootReducer';
import { AppDispatch } from '@/app/store';

// Define CartItem interface


// Cart Skeleton Component
const CartSkeleton = () => {
  return (
    <div className="w-[90vw] mx-auto py-8">
      <div className="flex items-center mb-8">
        <div className="flex items-center text-sm font-medium text-muted-foreground">
          <Skeleton className="h-4 w-4 mr-2 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-8 w-48 mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {/* Skeleton Item 1 */}
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <Skeleton className="w-full sm:w-36 h-36" />
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                      </div>
                      <Skeleton className="h-4 w-20 mt-2" />
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="pt-4 border-t flex justify-between">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
              <Skeleton className="w-full h-10 mt-6" />
              <div className="mt-6 text-center">
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  
  const products = useSelector((state: RootState) => state.cart.products);
  console.log("product",products)
  console.log(products)
  const isLogIn: boolean = useAppSelector(isUserLoggedIn)
  const dispatch = useAppDispatch();
 
  useEffect(() => {
    if(!isLogIn) {
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    
    const fetchData = async () => {
      try {
        //@ts-ignore
        await dispatch(fetchProduct()).unwrap();
      } catch (error) {
        console.error("Error fetching cart products:", error);
        setError("Failed to load cart products");
      } finally {
        setIsLoading(false);
        setDataFetched(true);
      }
    };
    
    fetchData();
  }, [isLogIn, dispatch]);
  
  // New function to handle removing from wishlist
  const handleRemoveFromCart = async (id: string) => {
    if (!id) return;
    try {
      // Make API call to remove from wishlist
      const req: GetAddToWishlistRequest = {
        productId: id,
      }
      // Use the correct URL for removing from cart
      const response = await callApi(req, "/cart/remove");
      if ("status" in response) {
        // Update local state
       dispatch(removeItemCompletely(id));
        toast.success("Product removed from cart");
      } else if ("error_code" in response) {
        setError(response.description);
      }
    } catch (err) {
      console.error("Failed to remove from cart:", err);
      setError("Failed to remove item from cart");
    }
  }

  const handleDecreaseQuantity = async (id: string) => {
    if (!id) return;
    try {
      // Make API call to remove from wishlist
      const req: GetAddToWishlistRequest = {
        productId: id,
      }
      // Use the correct URL for removing from cart
      const response = await callApi(req, "/cart/remove");
      if ("status" in response) {
        // Update local state
       dispatch(descreseItem(id));
      } else if ("error_code" in response) {
        setError(response.description);
      }
    } catch (err) {
      console.error("Failed to remove from cart:", err);
      setError("Failed to remove item from cart");
    }
  }

  const updateQuantity = async (id: string) => {
    if (!id) return;
    try {
      // Make API call to remove from wishlist
      const req: GetAddToWishlistRequest = {
        productId: id,
      }
      // Use the correct URL for removing from cart
      const response = await callApi(req, "/cart/remove");
      if ("status" in response) {
        // Update local state
       dispatch(increaseItemQty(id));
      } else if ("error_code" in response) {
        setError(response.description);
      }
    } catch (err) {
      console.error("Failed to remove from cart:", err);
      setError("Failed to remove item from cart");
    }
  }

  const calculateSubtotal = (): number => {
    return products.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const calculateTotal = (): number => {
    const subtotal = calculateSubtotal();
    // Add tax, shipping, etc. if needed
    return subtotal;
  };

  const handlePaymentApi = async (orderId: string) => {
    try {
      const req: PaymentCreateRequest = {
        orderId: orderId,
      };
      const response = await callApi(req, "/payment/create");
      if ("status" in response && response.status === "SUCCESS") {
        // Redirect to payment URL
        window.location.href = response.url;
      } else if ("error_code" in response) {
        setError(response.description);
        toast.error("Payment initialization failed");
      }
    } catch (err) {
      console.error("Payment initialization error:", err);
      setError("Failed to initialize payment");
      toast.error("Failed to initialize payment");
    }
  };

  const handleOrderApi = async () => {
    if (products.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsProcessing(true);
    try {
      const productIds = products.map(item => item.id);
      const req: OrderCreateRequest = {
        products: productIds,
      };
      const response = await callApi(req, "/order/create");
      
      if ("status" in response && response.status === "SUCCESS") {
        setOrderId(response.orderId);
        toast.success("Order created successfully!");
        await handlePaymentApi(response.orderId);
      } else if ("error_code" in response) {
        setError(response.description || "Failed to create order");
        toast.error(response.description || "Failed to create order");
      }
    } catch (err) {
      console.error("Order creation error:", err);
      setError("Failed to create order");
      toast.error("Failed to create order");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return <CartSkeleton />;
  }

  return (
    <div className="w-[90vw] mx-auto py-8">
      <div className="flex items-center mb-8">
        <Link to="/productlist" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold text-center flex-1">Your Cart</h1>
      </div>

      {!dataFetched || products.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link to="/market">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {products.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-36 h-36 bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{item.name}</h3>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center rounded-lg border-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="h-8 w-8 "
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="text-center font-semibold">{item.qty}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => updateQuantity(item.id)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${(item.price * item.qty ).toFixed(2)}</div>
                          {item.qty > 1 && (
                            <div className="text-xs text-muted-foreground">${item.price} each</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="pt-4 border-t flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6" 
                  onClick={handleOrderApi}
                  disabled={isProcessing || products.length === 0}
                >
                  {isProcessing ? "Processing..." : "Checkout"}
                </Button>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Need help? <Link to='/faq' className="underline">Contact Support</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;