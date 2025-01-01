import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const BillingForm = () => {
  
  return (
    <div className="space-y-4 shadow-sm bg-white rounded-lg p-6">
      <h2 className="font-semibold text-sm border-b-2">BILLING ADDRESS</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" type="text" defaultValue="" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" defaultValue="" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name (Optional)</Label>
        <Input id="company" type="text"/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input 
          id="address" 
          defaultValue=""
          type="text"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select defaultValue="USA">
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USA">USA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="state">Region/State</Label>
        <Select defaultValue="minnesota">
          <SelectTrigger>
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="minnesota">Minnesota</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Select defaultValue="minnesota">
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minnesota">Minnesota</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input id="zipCode" type="text" defaultValue="" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          defaultValue=""
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
          id="phone" 
          type="tel" 
          defaultValue=""
        />
      </div>
      <Button className="bg-gray-900 hover:bg-gray-800 mt-4">
        SAVE CHANGES
      </Button>
    </div>
  )
}

export default BillingForm
