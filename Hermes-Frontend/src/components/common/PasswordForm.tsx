import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Eye } from 'lucide-react'
const PasswordForm = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-sm border-b-2">CHANGE PASSWORD</h2>
      <div className="space-y-2">
        <Label htmlFor="currentPassword">Current Password</Label>
        <div className="relative">
          <Input id="currentPassword" type="password" />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <div className="relative">
          <Input 
            id="newPassword" 
            type="password" 
            placeholder="8+ characters"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input id="confirmPassword" type="password" />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button className="bg-gray-900 hover:bg-gray-800">
        CHANGE PASSWORD
      </Button>
    </div>
  )
}

export default PasswordForm
