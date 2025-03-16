import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Info } from 'lucide-react'

const TrackOrder = () => {
  return (
    <div className="w-full px-4 py-6 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Track Order</h1>
        <p className="text-gray-600 text-sm md:text-base">
          To track your order please enter your order ID in the input field below and press the "Track Order" button. This
          was given to you on your receipt and in the confirmation email you should have received.
        </p>
        <div className="flex flex-col space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="w-full">
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </label>
              <Input id="orderId" placeholder="Enter order ID" className="w-full" />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Billing Email
              </label>
              <Input id="email" type="email" placeholder="Enter email address" className="w-full" />
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-500">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>Order ID was sent to your email address.</p>
          </div>
          <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
            TRACK ORDER
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder
