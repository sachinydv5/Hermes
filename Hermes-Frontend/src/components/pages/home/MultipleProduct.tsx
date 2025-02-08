import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import ProductCardTwo from '../../common/ProductCardTwo'

const MultipleProduct = () => {
  return  (
    <div className="container mx-auto p-6">
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">Create Multiple Products</h1>
      <Button type="submit" variant="default" className="rounded-full">
        Publish →
      </Button>
    </div>

    <div className="grid gap-8">
      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-medium mb-4">Collection Details</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="collection-name">COLLECTION NAME</Label>
              <Input
                id="collection-name"
                placeholder="e.g. 'Redeemable Bitcoin Card with logo'"
                  className="max-w-[640px]"
              />
            </div>
            <div>
              <Label htmlFor="description">DESCRIPTION</Label>
              <Input
                id="description"
                placeholder="e.g. 'After purchasing you will able to recived the logo...'"
                 className="max-w-[640px]"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-4">Price</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label>CATEGORY</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="select category" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="bedroom">Bedroom</SelectItem>
                  <SelectItem value="living">Living Room</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>DAYS</Label>
              <div className="max-w-[200px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="select days" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="1">1 Month</SelectItem>
                  <SelectItem value="3">3 Months</SelectItem>
                  <SelectItem value="6">6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            </div>
            <div>
              <Label>VALUE AS A COLLECTION</Label>
              <Input placeholder="price"  className="max-w-[200px]"/>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-4">Discount</h2>
          <div>
            <Label>OFFER VALUE</Label>
            <Input placeholder="$ 400" className="max-w-[200px]" />
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Products</h2>
            <Button className="rounded-full">
              Add Item +
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ProductCardTwo product={undefined}/>
          <ProductCardTwo product={undefined}/>

          </div>
        </section>
      </div>

    </div>
  </div>
  
  )
}


export default MultipleProduct