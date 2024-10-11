import React from 'react'
import ProductCard from '../../common/ProductCard'

const SingleList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-8">
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mb-6">Create single Product</h1>
          <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Upload file</label>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50 text-center relative">
        {/* Placeholder for uploaded file or icon */}
        <div className="inline-block mb-4">
          <img src="path-to-placeholder-icon" alt="upload-icon" className="mx-auto mb-4" />
        </div>
        <p className="text-gray-500">Drag or choose your file to upload</p>
        <p className="text-gray-400 text-sm">PNG, GIF, WEBP, MP4 or MP3. Max 1GB.</p>
      </div>
    </div>

          <div className="space-y-6">
            <div>
              <h2 >Item Details</h2>
              <label htmlFor="title" className="block text-xs font-semibold text-gray-600 mb-1">Item Name</label>
              <input
                id="title"
                className="w-full border rounded-md p-2"
                placeholder='e.g. "Redeemable Bitcoin Card with logo"'
              />
            </div>

            <div>
            <label htmlFor="description" className="block text-xs font-semibold text-gray-600 mb-1">Description</label>
              <textarea
                id="description"
                className="w-full border rounded-md p-2"
                placeholder='e.g. "After purchasing you will able to received the logo..."'
              />
            </div>

           <div className="p-4">
  <label className="block text-sm font-medium text-gray-500 mb-2">Price</label>
  <div className="grid grid-cols-3 gap-4">
    {/* Category Field */}
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">CATEGORY</label>
      <select className="border border-gray-300 rounded-md p-2 w-full focus:border-indigo-500 focus:ring-indigo-500 text-sm">
        <option>Kitchen</option>
      </select>
    </div>
    
    {/* Days Field */}
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">DAYS</label>
      <select className="border border-gray-300 rounded-md p-2 w-full focus:border-indigo-500 focus:ring-indigo-500 text-sm">
        <option>1 Month</option>
      </select>
    </div>
    
    {/* Value Field */}
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">VALUE</label>
      <input
        className="border border-gray-300 rounded-md p-2 w-full focus:border-indigo-500 focus:ring-indigo-500 text-sm"
        placeholder="$ 42"
      />
    </div>
  </div>
</div>


            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Put on lease</h3>
                <p className="text-sm text-gray-500">This creates payment on this item</p>
              </div>
              <input
                type="checkbox"
                // checked={putOnLease}
                // onChange={() => setPutOnLease(!putOnLease)}
                className="h-5 w-5"
              />
            </div>

           
              <>
                <div>
                  <label htmlFor="value" className="block">Value of the product</label>
                  <input
                    id="value"
                    className="w-full border rounded-md p-2"
                    placeholder='e.g. "After purchasing you will able to received the logo..."'
                  />
                </div>
                <div>
                  <label htmlFor="cancellation" className="block">Cancellation terms</label>
                  <input
                    id="cancellation"
                    className="w-full border rounded-md p-2"
                    placeholder='e.g. "After purchasing you will able to received the logo..."'
                  />
                </div>
              </>
            

            <div>
              <label htmlFor="address" className="block">Address</label>
              <p className="text-sm text-gray-500 mb-2">Pick up and drop off location</p>
              <input
                id="address"
                className="w-full border rounded-md p-2"
                placeholder="Location"
              />
            </div>

            <div>
              <label className="block">Preference</label>
              <div className="grid grid-cols-3 gap-4">
                <select className="border rounded-md p-2">
                  <option>Default</option>
                </select>
                <select className="border rounded-md p-2">
                  <option>5 Kms</option>
                </select>
                <select className="border rounded-md p-2">
                  <option>5 Weeks</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium">Choose Collection</label>
            <div className="flex space-x-4 font-bold">
              <button className="bg-gray-100 p-10 rounded-lg">+ Create Collection</button>
              <button className="bg-gray-200 p-3 rounded-lg">Add to Collection</button>
              <button className="bg-gray-300 p-3 rounded-lg">Add to Collection</button>
              <button className="bg-gray-300 p-3 rounded-lg">Add to Collection</button>
            </div>
          </div>

          <button className="bg-black text-white p-3 rounded-full">Create Item</button>
        </div>
        </div>

        <div className="w-1/3">
          <ProductCard/>
        </div>
        
      </div>

      
    </div>
  )
}

export default SingleList