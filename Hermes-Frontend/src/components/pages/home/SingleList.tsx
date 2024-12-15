import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Upload, DollarSign, MapPin, Loader, Plus } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { callApi } from '../../../api/api'
import { ProductRequest, ProductResponse } from '../../../api/types'
import { useNavigate } from 'react-router-dom';


const SingleList = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    itemName: "Default Item Name",
    price: "0.00",
  });
  let navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleFileChange = (event) => {
    setUploadedFile(event.target.files[0]);
  };
  const images = [
    "productimage.png",
    "/placeholder.svg?height=200&width=200&text=Image+2",
    "/placeholder.svg?height=200&width=200&text=Image+3",
    "/placeholder.svg?height=200&width=200&text=Image+4"
  ]
  const onSubmit = async (data) => {
    setIsSubmitting(true); // Show loader
    console.log("Form data submitted:", data);
    try{
      let req: ProductRequest = {
        name: data.title,
        description: data.description,
        qty: 1,
        duration: {
          value: 3,
          unit: 'month'
        },
        discount: 0,
        pickupAddress: {
          city: 'menesota',
          country: 'USA',
          pincode: '',
          addressLine1: data.address,
          addressLine2: undefined
        },
        price: data.price,
        category: '',
        userId: '',
        collectionId: ''
      }
      const response: ProductResponse = await callApi(req,"/api/product/addProduct");
      if("status" in response){
        alert(response.status)
        navigate(`/productdetail/${response.id}`)
      }
     else if("error_code" in response ){
        setError(response.description)
      }
    
    }
    catch(err){
      console.error("Sign up error:", err)
      setError("faild to signup")
    }
   
    setIsSubmitting(false); // Hide loader after submission
    
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className='flex justify-between items-center mb-6'>
            <h1 className="text-3xl font-bold">Create Single Product</h1>
            {/* <Button variant="outline" className="border-dotted">
              Switch to Multiple
            </Button> */}
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="p-6">
              <div className="space-y-4">
                <Label htmlFor="file-upload" className="block text-sm font-medium">
                  Upload file
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50 text-center relative cursor-pointer">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <input 
                      type="file" 
                      id="file-upload" 
                      className="hidden" 
                      accept=".png,.gif,.webp,.mp4,.mp3" 
                      onChange={handleFileChange}
                    />
                    <Upload className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                    <p className="text-sm text-gray-500">Drag or choose your file to upload</p>
                    <p className="text-xs text-gray-400 mt-2">PNG, GIF, WEBP, MP4 or MP3. Max 1GB.</p>
                  </label>
                  {/* {uploadedFile && <p>{uploadedFile.name}</p>} */}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Item Details</h2>
              <div>
                <Label htmlFor="title">Item Name</Label>
                <Input
                  id="title"
                  {...register('title')}
                  placeholder='e.g. "Redeemable Bitcoin Card with logo"'
                  onChange={(e)=>setFormData({...formData , itemName: e.target.value})}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message as string}</p>}
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  {...register('description')}
                  placeholder='e.g. "After purchasing you will able to received the logo..."'
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message as string}</p>}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => register('category').onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Kitchen</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message as string}</p>}
                </div>
                
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Select onValueChange={(value ) => register('duration').onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1_month">1 Month</SelectItem>
                      <SelectItem value="3_months">3 Months</SelectItem>
                      <SelectItem value="6_months">6 Months</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration.message as string}</p>}
                </div>
                
                <div>
                  <Label htmlFor="price">Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="price"
                      {...register('price')}
                      className="pl-10"
                      placeholder="0.00"
                      onChange={(e)=>setFormData({...formData , price: e.target.value})}
                    />
                  </div>
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message as string}</p>}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="putOnLease" className="font-semibold">Put on lease</Label>
                  <p className="text-sm text-gray-500">This creates payment on this item</p>
                </div>
                <Switch
                  id="putOnLease"
                  {...register('putOnLease')}
                />
              </div>

              
                <>
                  <div>
                    <Label htmlFor="productValue">Value of the product</Label>
                    <Input
                      id="productValue"
                      {...register('productValue')}
                      placeholder="Enter the value of the product"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cancellationTerms">Cancellation terms</Label>
                    <Input
                      id="cancellationTerms"
                      {...register('cancellationTerms')}
                      placeholder="Enter cancellation terms"
                    />
                  </div>
                </>
            

              <div>
                <Label htmlFor="address">Address</Label>
                <p className="text-sm text-gray-500 mb-2">Pick up and drop off location</p>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="address"
                    {...register('address')}
                    className="pl-10"
                    placeholder="Enter location"
                  />
                </div>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message as string}</p>}
              </div>

              <div>
                <Label className="mb-2 block">Preference</Label>
                <div className="grid grid-cols-3 gap-4">
                  <Select onValueChange={(value) => register('preference.type').onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => register('preference.distance').onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5_miles">5 miles</SelectItem>
                      <SelectItem value="10_miles">10 miles</SelectItem>
                      <SelectItem value="20_miles">20 miles</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => register('preference.duration').onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5_weeks">5 Weeks</SelectItem>
                      <SelectItem value="10_weeks">10 Weeks</SelectItem>
                      <SelectItem value="15_weeks">15 Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Choose Collection</h2>
              <div className="flex flex-wrap gap-4">
                <Button type="button" variant="outline" className="h-24 w-36">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Collection
                </Button>
                <Button type="button" variant="secondary" className="h-24 w-36">Add to Collection</Button>
                <Button type="button" variant="secondary" className="h-24 w-36">Add to Collection</Button>
                <Button type="button" variant="secondary" className="h-24 w-36">Add to Collection</Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full flex justify-center items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader className="animate-spin h-5 w-5 mr-2" />
              ) : null}
              {isSubmitting ? "Submitting..." : "Create item"}
            </Button>
            {error && <p className='text-red-500'>{error}</p>}
          </form>
        </div>

        <div className="lg:w-1/3">
          <h2 className="text-xl font-semibold mb-5">Preview</h2>
          <Card 
        className="w-[280px] overflow-hidden bg-white rounded-2xl border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-4 rounded-lg ">
          <div className="relative mb-3 rounded-lg border-2 border-orange-100">
            {isHovered ? (
              <Carousel className="w-full aspect-square">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={src}
                        alt={`Product view ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : (
              <img
                src={images[0]}
                alt="TOZO T6 True Wireless Earbuds"
                className="w-full aspect-square object-cover rounded-lg "
              />
            )}
            
            <div className="absolute top-2 left-2 flex items-center bg-white rounded-md px-2 py-1 shadow-sm">
              <span className="font-semibold text-sm">4.8</span>
              <span className="text-yellow-400 ml-1">★</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 h-8 w-8 bg-white rounded-full"
            >
              <Heart className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
  
          <h3 className="font-medium text-sm mb-2 line-clamp-2">
            {/* TOZO T6 True Wireless Earbuds Bluetooth Headphon... */}
            {formData.itemName}
          </h3>
  
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-gray-400 line-through text-sm">$49</span>
            <span className="text-2xl font-semibold text-[#f4a340]">${formData.price}</span>
            <span className="text-sm text-gray-500">/per week</span>
          </div>
  
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              3 Available in stock
            </span>
            <Button 
              size="sm" 
              className="bg-[#f4a340] hover:bg-[#e59635] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="sr-only">Add to cart</span>
              🛒
            </Button>
          </div>
        </div>
      </Card>
        </div>
      </div>
    </div>
  )
}

export default SingleList