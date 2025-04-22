import React, { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, StarHalf, Share2, PinIcon as Pinterest, Clock, Truck, ShieldCheck, HeadphonesIcon, CreditCard, StarIcon } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Badge } from "../../../components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Alert, AlertDescription } from "../../../components/ui/alert"
import RecentlyView from '../../common/RecentlyView'
import ListYourProduct from '../../common/ListYourProduct'
import { useParams } from 'react-router-dom'
import { callApi, getProductIdRequest } from '../../../api/api'
import { GetAddToWishlistRequest, GetAddToWishlistResponse, GetProductIdResponse, OrderCreateRequest, OrderCreateResponse, PaymentCreateRequest, PaymentCreateResponse } from '../../../api/types'
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../api/common.types'
import ProductDetailSkeleton from '@/components/skeleton/ProductDetailSkeleton'
import { isProductInWishlist, addProductToWishlistCache } from "@/utils/wishlistCache"
import { toast } from 'react-toastify'
import { isUserLoggedIn } from '@/app/store/user'
import { useAppSelector } from '@/app/hooks'

const ProductDetail = () => {
  const isLogIn: boolean = useAppSelector(isUserLoggedIn)

  const { productid } = useParams();
  const [currentImage, setCurrentImage] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [productdetail, setProductDetail] = useState<Product | null>(null);
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [loading, setLoading] = useState(true)
  const hasCheckedWishlist = useRef(false);
  const [orderID, setOrderID] = useState("")
  let navigate = useNavigate();

  const images = [
    'https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png',
    'https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png',
    'https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png',
    'https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png',
    'https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png',
    'https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png'
  ]


 

  useEffect(() => {
    // Reset the wishlist check flag when product ID changes
    hasCheckedWishlist.current = false;
    
    const fetchData = async () => {
      if (!productid) return;
  
      setLoading(true)
      try {
        const response: GetProductIdResponse = await getProductIdRequest("", `/product/getProduct/${productid}`);
        if ("error_code" in response) {
          setError(response.description);
          setProductDetail(null);
        } else {
          setProductDetail(response);
  
          // Check if product is in wishlist using our utility, but only if we haven't already checked
          if (productid && !hasCheckedWishlist.current) {
            const productInWishlist = await isProductInWishlist(productid);
            setIsInWishlist(productInWishlist);
            hasCheckedWishlist.current = true;
          }
  
          setError(null);
        }
      } catch (err) {
        console.error("Product fetch error:", err);
        setError("Failed to load product details. Please try again later.");
        setProductDetail(null);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [productid]);


  const addtoWishlist = async (id: string) => {
    if (!id || !isLogIn) {
      toast.error("You must be logged in to add items to the wishlist!");
      return;
    }
   
    try {
      const req: GetAddToWishlistRequest = {
        productId: id,
      }

      const response: GetAddToWishlistResponse = await callApi(req, "/wishlist/add");
      if ("status" in response) {
        setIsInWishlist(true)
        
        // Update the wishlist cache
        if (productdetail) {
          addProductToWishlistCache(productdetail);
        }
        toast.success("Product added to wishlist successfully")
      } else if ("error_code" in response) {
        setError(response.description)
      }
    } catch (err) {
      console.error("Wishlist error:", err)
      setError("Failed to add item to wishlist")
    }
  }

  // add to cart
  const addtoCart = async (id: string) => {
    if (!id || !isLogIn) {
      toast.error("You must be logged in to add items to the wishlist!");    
      return;
    }
   
    try {
      const req: GetAddToWishlistRequest = {
        productId: id,
      }

      const response: GetAddToWishlistResponse = await callApi(req, "/cart/add");
      if ("status" in response) {
        // setIsInCart(true)
        toast.success("Product added to cart successfully")
      } else if ("error_code" in response) {
        setError(response.description)
      }
    } catch (err) {
      console.error("Wishlist error:", err)
      setError("Failed to add item to cart")
    }
  }
   
  // order create 
    const handleOrderApi = async (id: string) => {
      
      try{
        const req: OrderCreateRequest = {
          products: id,
        } 
        const response: OrderCreateResponse = await callApi(req,"/order/create");
        if("status" in response){
          
          setOrderID(response.orderId)
          handlePaymentsApi(response.orderId)
          // alert("order created successfully!")
        } else {
          setError(response.description || "Failed to connect")
        }
      }
    catch(err){
      console.error("Order creation error:", err)
      setError("Failed to create order")
    }
  }
  const handlePaymentsApi = async (id: string | null) => {
    if (id === null || id === "" ) return;
    try{
      const req: PaymentCreateRequest = {
        orderId: id,
      } 
      const response: PaymentCreateResponse = await callApi(req,"/payment/create");

      if("status" in response){
        window.location.href = response.url
        // alert("order created successfully!")
      } else {
        setError(response.description || "Failed to connect")
      }
    }
  catch(err){
    console.error("Order creation error:", err)
    setError("Failed to create order")
  }
}


  if (loading) {
    return (
     <ProductDetailSkeleton/>
    )
  }

  if (error) {
    return (
      <div className="w-[90vw] mx-auto py-8">
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!productdetail) {
    return (
      <div className="w-[90vw] mx-auto py-8">
        <Alert>
          <AlertDescription>Product not found</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="w-[90vw] mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <button 
              onClick={() => setCurrentImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={productdetail.image}
              alt="Product image"  
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => setCurrentImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            {/* <Button 
              onClick={() => addtoCart(productid ?? "")}
              className="absolute bottom-4 right-4 z-10"
              size="sm"
            >
              Add to Cart
            </Button> */}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`flex-shrink-0 w-20 aspect-[4/3] border-2 rounded-lg overflow-hidden ${
                  currentImage === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img
                  src={productdetail.image}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
              {/* <span className="text-sm text-muted-foreground">4.7 Star Rating (21,671 User feedback)</span> */}
            </div>
            <h1 className="text-2xl font-bold">
              {productdetail?.name}
            </h1>
            {productdetail.description}
          </div>

          <div className="grid gap-4">
            <div className="flex justify-between text-sm">
              {/* <span>P ID: </span> */}
              <span className="text-green-600">{`Availability: ${productdetail?.qty} In Stock`}</span>
            </div>
            <div className="flex justify-between text-sm">
              {/* <span>Deposit: </span> */}
              <span className="text-sm text-muted-foreground">100% refund grantee</span>
            </div>
          </div>

          <div className="space-y-4">
          <label className="text-xl font-medium">Price</label>
            <div className='flex items-center'>
              {/* <Select defaultValue="01">
                <SelectTrigger className="w-1/5">
                  <SelectValue placeholder="Select weeks"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">01</SelectItem>
                  <SelectItem value="02">02</SelectItem>
                  <SelectItem value="03">03</SelectItem>
                </SelectContent>
              </Select> */}
              <div className="flex items-center gap-2 mt-2">
                {/* <span className='text-sm'>Available: 05 weeks</span> */}
                <span className="text-2xl font-bold text-orange-400">${productdetail?.price}</span>
                <span>/Month</span>
                {/* <span className="line-through text-muted-foreground">$499.00</span>
                <Badge variant="secondary">21% OFF</Badge> */}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Check Delivery</label>
              <div className="flex gap-4">
                <Input type="text" placeholder="PIN" className="w-1/2" />
                {/* <span className="text-sm text-muted-foreground self-center">
                  Available for delivery on 22nd Oct
                </span> */}
              </div>
            </div>

            <div className="flex gap-4 pt-10 pb-10">
              <Button 
                variant="outline" 
                className={`flex-1 ${isInWishlist ? 'bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
                onClick={() => addtoWishlist(productid ?? "")}
                disabled={isInWishlist}
              >
                {isInWishlist ? 'ALREADY IN WISHLIST' : 'ADD TO WISHLIST'}
              </Button>
           
              <Button className="flex-1"
              onClick={() => addtoCart(productid ?? "")}>ADD TO CART</Button>
              <Button 
              variant="secondary" 
              className="flex-1"
              onClick={() => 
              handleOrderApi(productid ?? "")
              }>RENT NOW</Button>
            </div>

            
          </div>

          <div className="pt-6 border-t ">
            <h3 className="text-sm font-medium mb-2">100% Guarantee Safe Checkout</h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {['Visa', 'Mastercard', 'PayPal', 'AmEx'].map((payment) => (
                <div key={payment} className="bg-gray-100 rounded p-2 text-xs text-center">
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-2 mt-6 mb-20">
        <Badge variant="outline">Macbook M1</Badge>
        <Badge variant="outline">Laptop</Badge>
        <Badge variant="outline">Electronics</Badge>
        <Badge variant="outline">Apple</Badge>
      </div> */}

      {/* Product Information Tabs */}

      <Tabs defaultValue="description" className="w-full  mt-20 mb-40">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          {["description"].map((tab) => (
            <TabsTrigger 
              key={tab}
              value={tab}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 uppercase"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {productdetail?.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Features</h2>
              <ul className="space-y-6">
                {[
                  { icon: Clock, text: "Free 1 Year Warranty" },
                  { icon: Truck, text: "Free Shipping & Faster Delivery" },
                  { icon: ShieldCheck, text: "100% Money-back guarantee" },
                  { icon: HeadphonesIcon, text: "24/7 Customer support" },
                  { icon: CreditCard, text: "Secure payment method" },
                ].map(({ icon: Icon, text }, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-orange-400" aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Information</h2>
              <dl className="space-y-4">
                {[
                  { term: "Courier", description: "" },
                  { term: "Local Shipping", description: "" },
                  { term: "UPS Ground Shipping", description: "" },
                  { term: "Unishop Global Export", description: "" },
                ].map(({ term, description }, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <dt>{term}:</dt>
                    <dd className="text-muted-foreground">{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </TabsContent>

        {/* <TabsContent value="additional" className="py-4">
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Weight</TableCell>
                <TableCell>3.0 lbs (1.36 kg)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dimensions</TableCell>
                <TableCell>0.61 x 11.97 x 8.36 inches (1.55 x 30.41 x 21.24 cm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Display</TableCell>
                <TableCell>14.2-inch (diagonal) Liquid Retina XDR display</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Chip</TableCell>
                <TableCell>Apple M1 Pro or M1 Max chip</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Battery and Power</TableCell>
                <TableCell>Up to 17 hours Apple TV app movie playback</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent> */}

        {/* <TabsContent value="specification" className="py-4">
          <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                <TableHead>Specification</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Processor</TableCell>
                <TableCell>Apple M1 Pro or M1 Max chip</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Memory</TableCell>
                <TableCell>16GB unified memory (Configurable up to 32GB or 64GB)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Storage</TableCell>
                <TableCell>512GB SSD (Configurable up to 8TB)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Graphics</TableCell>
                <TableCell>14-core or 16-core GPU (M1 Pro) or 24-core or 32-core GPU (M1 Max)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ports</TableCell>
                <TableCell>Three Thunderbolt 4 (USB-C) ports, HDMI port, SDXC card slot, MagSafe 3 port</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent> */}

        {/* <TabsContent value="review" className="py-4">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            {[
              { name: "Alice Johnson", rating: 5, comment: "Incredible performance and battery life. The best laptop I've ever owned." },
              { name: "Bob Smith", rating: 4, comment: "Great machine, but the price is steep. Still, you get what you pay for." },
              { name: "Carol Williams", rating: 5, comment: "The display is stunning, and the M1 chip is blazing fast. Highly recommended!" },
            ].map((review, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{review.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </TabsContent> */}
      </Tabs>
      <RecentlyView/>

      <ListYourProduct/>
    </div>
  )
}

export default ProductDetail
