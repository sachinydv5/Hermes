import React, { useEffect, useState } from 'react';
import { Trash2, Minus, Plus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Define CartItem interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  img?: string[];
}

const Cart = () => {
  // Sample cart items for UI preview
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Modern Desk Lamp',
      price: 49.99,
      quantity: 1,
      category: 'Home Decor',
      img: ['https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png']
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      price: 129.99,
      quantity: 2,
      category: 'Electronics',
      img: ['https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png']
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Placeholder utility functions
  const getCartItems = (): CartItem[] => {
    // This would normally get items from localStorage or API
    return cartItems;
  };

  const removeFromCart = (productId: string): void => {
    // This would normally remove an item from the cart
    console.log(`Remove item ${productId} from cart`);
  };

  useEffect(() => {
    // For UI preview, we're using predefined cart items
    const loadCart = () => {
      setIsLoading(true);
      try {
        // No actual loading for UI preview
        // setCartItems(getCartItems());
      } catch (error) {
        console.error('Failed to load cart:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCart();
  }, []);

  const updateCart = (newCart: CartItem[]): void => {
    // This would normally update cart in state and localStorage
    setCartItems(newCart);
    console.log('Cart updated:', newCart);
  };

  const handleRemoveFromCart = (productId: string): void => {
    // For UI preview only - log action
    removeFromCart(productId);
    console.log(`Removed item ${productId} from cart`);
  };

  const updateQuantity = (productId: string, newQuantity: number): void => {
    // For UI preview only - log action
    if (newQuantity < 1) return;
    console.log(`Update quantity of item ${productId} to ${newQuantity}`);
    
    const newCart = cartItems.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    );
    
    updateCart(newCart);
  };

  const calculateSubtotal = (): number => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = (): number => {
    const subtotal = calculateSubtotal();
    // Add tax, shipping, etc. if needed
    return subtotal;
  };

  const handleCheckout = (): void => {
    // For UI preview only - log action
    console.log('Checkout button clicked');
    console.log('Total amount:', calculateTotal().toFixed(2));
  };

  if (isLoading) {
    return (
      <div className="w-[90vw] mx-auto py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
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

      {cartItems.length === 0 ? (
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
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-36 h-36 bg-muted">
                      <img 
                        src={item.img && item.img.length > 0 ? item.img[0] : 'https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png'} 
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
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                          {item.quantity > 1 && (
                            <div className="text-xs text-muted-foreground">${item.price.toFixed(2)} each</div>
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
                <Button className="w-full mt-6" onClick={handleCheckout}>Checkout</Button>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Need help? <a href="#" className="underline">Contact Support</a>
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