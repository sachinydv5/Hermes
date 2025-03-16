import React, { useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Collection {
    id: number
    title: string
    coverImage: string
    thumbnails: string[]
    author: {
      name: string
      avatar: string
    }
    itemCount: number
  }
  
  const collections: Collection[] = [
    {
      id: 1,
      title: "Move in collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_4.png",
        "/collection-images/image_3.png"
      ],
      author: {
        name: "Hilda Nikolaus",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    },
    {
      id: 2,
      title: "Bedroom collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_3.png",
        "/collection-images/image_4.png"
      ],
      author: {
        name: "Zola Pfeffer",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    },
    {
      id: 3,
      title: "Kitchen collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_3.png",
        "/collection-images/image_4.png"
      ],
      author: {
        name: "Lamont Cole",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    },
    {
      id: 4,
      title: "Living room collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_3.png",
        "/collection-images/image_4.png"
      ],
      author: {
        name: "Lamont Cole",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    },
    {
      id: 4,
      title: "Living room collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_3.png",
        "/collection-images/image_4.png"
      ],
      author: {
        name: "Lamont Cole",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    },
    {
      id: 4,
      title: "Living room collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_3.png",
        "/collection-images/image_4.png"
      ],
      author: {
        name: "Lamont Cole",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    },{
      id: 4,
      title: "Living room collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_3.png",
        "/collection-images/image_4.png"
      ],
      author: {
        name: "Lamont Cole",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    },{
      id: 4,
      title: "Living room collection",
      coverImage: "/collection-images/image_1.png",
      thumbnails: [
        "/collection-images/image_2.png",
        "/collection-images/image_3.png",
        "/collection-images/image_4.png"
      ],
      author: {
        name: "Lamont Cole",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      itemCount: 28
    }
  ] 

const Collection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }
  return (
    <div className="w-full bg-white  px-6 py-12">
    <div className="w-[90vw] mx-auto">
      <div className="flex items-center justify-between mb-8 p-6">
        <h2 className="text-4xl font-bold">Hot collections</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
      >
        {collections.map((collection) => (
          <Card 
            key={collection.id}
            className="flex-shrink-0 w-[352px] sm:w-[400px] snap-start border-none shadow-none"
          >
            <CardContent >
              <div className="relative  overflow-hidden mb-2">
                <img
                  src={collection.coverImage}
                  alt={collection.title}
                  className="object-cover aspect-auto rounded-xl"
                />
              </div>
              <div className="grid grid-cols-3 gap-1">
                {collection.thumbnails.map((thumbnail, index) => (
                  <div key={index} className="relative  overflow-hidden rounded">
                    <img
                      src={thumbnail}
                      alt={`${collection.title} thumbnail ${index + 1}`}
                      
                      className="object-cover aspect-auto rounded-sm"
                    />
                  </div>
                ))}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{collection.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={collection.author.avatar} alt={collection.author.name} />
                      <AvatarFallback>{collection.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      By {collection.author.name}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {collection.itemCount} ITEMS
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Collection
