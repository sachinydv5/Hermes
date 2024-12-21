import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Info } from 'lucide-react'
const TrackOrder = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-10">
      <h1 className="text-2xl sm:text-3xl font-bold">Track Order</h1>
      <p className="text-gray-600">
        To track your order please enter your order ID in the input field below and press the "Track Order" button. This
        was given to you on your receipt and in the confirmation email you should have received.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex-1">
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
            Order ID
          </label>
          <Input id="orderId" placeholder="Enter order ID" className="w-full" />
        </div>
        <div className="flex-1">
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
  )
}

export default TrackOrder
