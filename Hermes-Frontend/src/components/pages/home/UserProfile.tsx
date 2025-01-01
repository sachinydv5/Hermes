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
    <div className="">
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto space-y-8"> 
        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className='border-b-2 p-3'>
          <h1 className="text-sm font-semibold">ACCOUNT SETTING</h1>
          </div>
          <div className="flex items-center p-6 gap-8">
            <div className="shrink-0">
              <img
                src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png"
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Display name</Label>
                  <Input defaultValue="" />
                </div>
                <div className="space-y-2">
                  <Label>Username</Label>
                  <Input defaultValue="" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input defaultValue="" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue="" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Secondary Email</Label>
                  <Input defaultValue="" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input defaultValue="" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Country/Region</Label>
                  <Select defaultValue="usa">
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">USA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>States</Label>
                  <Select defaultValue="minnesota">
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minnesota">Minnesota</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Zip Code</Label>
                  <Input defaultValue="528" />
                </div>
              </div>
              <div className="mt-6">
            <Button className="bg-gray-900 hover:bg-gray-800">
              SAVE CHANGES
            </Button>
          </div>
            </div>  
          </div>
        </div>

        {/* Billing Address Forms */}
        <div className="grid md:grid-cols-2 gap-6">
          <BillingForm/>
          <BillingForm />
        </div>

        {/* Password Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <PasswordForm/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfile
