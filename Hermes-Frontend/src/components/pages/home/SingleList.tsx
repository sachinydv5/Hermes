import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Switch } from "../../../components/ui/switch"
import { Label } from "../../../components/ui/label"
import { Upload, DollarSign, MapPin, Loader, Plus } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Card } from "../../../components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel"
import { callApi } from '../../../api/api'
import { ProductRequest, ProductResponse, UploadProductImageRequest, UploadProductImageRespose } from '../../../api/types'
import { useNavigate } from 'react-router-dom';

// Extended form data type to include the file field
interface FormData {
  title: string;
  description: string;
  price: string;
  category: string;
  duration: string;
  address: string;
  productValue: string;
  cancellationTerms: string;
  putOnLease: boolean;
  file: FileList;
  preference: {
    type: string;
    distance: string;
    duration: string;
  };
}

const SingleList = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  
  // Initialize form with proper types and default values
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      duration: "",
      address: "",
      productValue: "",
      cancellationTerms: "",
      putOnLease: false,
      preference: {
        type: "",
        distance: "",
        duration: ""
      }
    },
    mode: "onBlur"
  });
  
  // Watch form values for preview
  const watchedTitle = watch("title");
  const watchedPrice = watch("price");
  const watchedPutOnLease = watch("putOnLease");

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
    if (file) {
      // Create preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
console.log("imaGE NAME",previewImage)
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Upload the image first
      if (!data.file || data.file.length === 0) {
        throw new Error("Please select a file to upload");
      }

      let imageUploadRequest: UploadProductImageRequest = {
        image: [data.file[0]],
      };
      
      const imageUploadResponse: UploadProductImageRespose = await callApi(
        imageUploadRequest,
        "/product/uploadProduct"
      );

      if ("status" in imageUploadResponse) {
        const imageUrl = imageUploadResponse.url;
        
        // Prepare product data in the format expected by the API
        let req: ProductRequest = {
          name: data.title,
          description: data.description,
          img: [imageUrl],
          qty: 1,
          duration: {
            value: data.duration ? parseInt(data.duration.split('_')[0]) : 3,
            unit: data.duration ? data.duration.split('_')[1] || 'month' : 'month'
          },
          discount: 0,
          pickupAddress: {
            city: 'menesota', // These should be dynamic in a real implementation
            country: 'USA',
            pincode: '',
            addressLine1: data.address,
            addressLine2: undefined
          },
          price: parseFloat(data.price),
          category: data.category || '',
          userId: '',
          collectionId: ''
        };
        
        const response: ProductResponse = await callApi(req, "/product/addProduct");
        
        if ("status" in response) {
          alert("Product created successfully!");
          navigate(`/productdetail/${response.id}`);
        } else {
          setError(response.description || "Failed to create product");
        }
      } else {
        setError(imageUploadResponse.description || "Failed to upload image");
      }
    } catch (err: any) {
      console.error("Product creation error:", err);
      setError(err.message || "Failed to create product");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-col lg:flex-row md:flex-row gap-40">
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
                      {...register("file", { 
                        required: "File is required",
                        onChange: handleFileChange
                      })}
                    />
                    <Upload className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                    <p className="text-sm text-gray-500">Drag or choose your file to upload</p>
                    <p className="text-xs text-gray-400 mt-2">PNG, GIF, WEBP, MP4 or MP3. Max 1GB.</p>
                  </label>
                  {uploadedFile && <p>{uploadedFile.name}</p>}
                  {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Item Details</h2>
              <div>
                <Label htmlFor="title">Item Name</Label>
                <Input
                  id="title"
                  {...register('title', { 
                    required: "Item name is required",
                    minLength: { value: 3, message: "Title must be at least 3 characters" }
                  })}
                  placeholder='e.g. "Redeemable Bitcoin Card with logo"'
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  {...register('description', { 
                    required: "Description is required",
                    minLength: { value: 10, message: "Description must be at least 10 characters" }
                  })}
                  placeholder='e.g. "After purchasing you will able to received the logo..."'
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setValue('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Kitchen</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Select onValueChange={(value) => setValue('duration', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1_month">1 Month</SelectItem>
                      <SelectItem value="3_months">3 Months</SelectItem>
                      <SelectItem value="6_months">6 Months</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="price">Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="price"
                      {...register('price', { 
                        required: "Price is required",
                        pattern: { 
                          value: /^\d+(\.\d{1,2})?$/,
                          message: "Please enter a valid price"
                        },
                        min: { value: 0.01, message: "Price must be greater than 0" }
                      })}
                      className="pl-10"
                      placeholder="0.00"
                    />
                  </div>
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="putOnLease" className="font-semibold">Put on lease</Label>
                  <p className="text-sm text-gray-500">This creates payment on this item</p>
                </div>
                <Switch
                  id="putOnLease"
                  checked={watchedPutOnLease}
                  onCheckedChange={(checked) => setValue('putOnLease', checked)}
                />
              </div>

              {watchedPutOnLease && (
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
              )}

              <div>
                <Label htmlFor="address">Address</Label>
                <p className="text-sm text-gray-500 mb-2">Pick up and drop off location</p>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="address"
                    {...register('address', {
                      required: "Address is required"
                    })}
                    className="pl-10"
                    placeholder="Enter location"
                  />
                </div>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div>
                <Label className="mb-2 block">Preference</Label>
                <div className="grid grid-cols-3 gap-4">
                  <Select onValueChange={(value) => setValue('preference.type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setValue('preference.distance', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5_miles">5 miles</SelectItem>
                      <SelectItem value="10_miles">10 miles</SelectItem>
                      <SelectItem value="20_miles">20 miles</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setValue('preference.duration', value)}>
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
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className='text-red-500'>{error}</p>
              </div>
            )}
          </form>
        </div>

        <div className="lg:w-1/3">
          <h2 className="text-xl font-semibold mb-5">Preview</h2>
          <Card 
            className="w-[280px] overflow-hidden bg-white rounded-2xl border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="p-4 rounded-lg">
              <div className="relative mb-3 rounded-lg border-2 border-orange-100">
                {isHovered ? (
                  <Carousel className="w-full aspect-square">
                    <CarouselContent>
                      {previewImage ? (
                        <CarouselItem>
                          <img
                            src={previewImage}
                            alt="Product preview"
                            className="w-full aspect-square object-cover rounded-lg"
                          />
                        </CarouselItem>
                      ) : (
                        <CarouselItem>
                          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">No image uploaded</span>
                          </div>
                        </CarouselItem>
                      )}
                    </CarouselContent>
                    {previewImage && (
                      <>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  previewImage ? (
                    <img
                      src={previewImage}
                      alt="Product preview"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">No image uploaded</span>
                    </div>
                  )
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
                {watchedTitle || "Untitled Product"}
              </h3>
      
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-400 line-through text-sm">
                  ${Number(watchedPrice || 0) + 10}
                </span>
                <span className="text-2xl font-semibold text-[#f4a340]">
                  ${watchedPrice || "0.00"}
                </span>
                <span className="text-sm text-gray-500">/per week</span>
              </div>
      
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {watchedPutOnLease ? "Available for lease" : "Available for Rent"}
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