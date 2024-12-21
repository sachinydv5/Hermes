import React from 'react'
import { Package2, Clock, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import StatsCard from '../../common/StatsCard'
import RecentOrder from '../../common/RecentOrder'
import ProductCardTwo from '../../common/ProductCardTwo'


const UserDashboard = () => {
  return (
    <div className="container max-w-[1200px] mx-auto space-y-8 py-8">
    <h1 className="text-3xl font-bold mb-6">Hello, Britney</h1>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-grow space-y-8 ">
        <div className="grid gap-8 md:grid-cols-3">
        <Card className="h-[280px] flex flex-col w-full">
      <CardHeader className="flex-none flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">ACCOUNT INFO</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="flex items-start gap-4">
          <Avatar className="size-12">
            <AvatarImage src="/placeholder.svg" alt={name} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold"></h3>
            <p className="text-sm text-muted-foreground"></p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Email:</span> 
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Secondary Email:</span> 
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Phone:</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">EDIT ACCOUNT</Button>
      </CardContent>
    </Card>
    <Card className="flex flex-col w-full">
      <CardHeader className="flex-none flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">BILLING ADDRESS</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="font-medium">name:</div>
            <div className="text-sm text-muted-foreground">address:</div>
            <div className="text-sm">
              <span className="text-muted-foreground">Phone Number:</span> 
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Email:</span> 
            </div>
          </div>
        </div>
      <Button variant="outline" className="w-full">EDIT ADDRESS</Button>
      </CardContent>
    </Card>
    <div className="space-y-2">
        <StatsCard
          icon={<Package2 className="size-6" />}
          value="154"
          label="Total Orders"
          className="bg-blue-50"
        />
        <StatsCard
          icon={<Clock className="size-6" />}
          value="05"
          label="Pending Orders"
          className="bg-orange-50"
        />
        <StatsCard
          icon={<CheckCircle className="size-6" />}
          value="149"
          label="Completed Orders"
          className="bg-green-50"
        />
      </div>
        </div>
        <RecentOrder/>
        <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">BROWSING HISTORY</CardTitle>
        <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCardTwo product={undefined}/>
          <ProductCardTwo product={undefined}/>
          <ProductCardTwo product={undefined}/>
          <ProductCardTwo product={undefined}/>
        </div>
      </CardContent>
    </Card>
      </div>
      
    </div>
  </div>
  )
}

export default UserDashboard
