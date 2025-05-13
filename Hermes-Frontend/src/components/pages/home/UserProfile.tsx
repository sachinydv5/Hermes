import React from 'react'
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
import UserSideBar from '../../common/UserSideBar'
import PasswordForm from '../../common/PasswordForm'
import BillingForm from '../../common/BillingForm'

const UserProfile = () => {
  return (
    <div className="w-full">
      <div className="flex-1 px-4 py-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8"> 
          {/* Account Settings */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className='border-b-2 p-3'>
              <h1 className="text-sm font-semibold">ACCOUNT SETTING</h1>
            </div>
            <div className="flex flex-col md:flex-row items-start p-4 md:p-6 gap-4 md:gap-8">
              <div className="shrink-0 w-full md:w-auto flex justify-center md:block">
                <img
                  src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Display name</Label>
                    <Input defaultValue="" />
                  </div>
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input defaultValue="" />
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800">
                    SAVE CHANGES
                  </Button>
                </div>
              </div>  
            </div>
          </div>

          {/* Billing Address Forms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BillingForm label="Delivery address"/>
            <BillingForm  label="billing address"/>
          </div>

          {/* Password Form */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <PasswordForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
