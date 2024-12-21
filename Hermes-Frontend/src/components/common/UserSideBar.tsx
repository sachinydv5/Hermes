import React from 'react'
import { LayoutDashboard, ClipboardList, MapPin, ShoppingCart, Heart, SplitSquareVertical, CreditCard, History, Settings, LogOut } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link, NavLink } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div className=" h-min min-w-64 bg-white rounded-lg shadow-sm mx-10 my-12">
      <nav className="py-6 px-2 space-y-0.5">
        <NavLink
          to="/dashboard"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <ClipboardList className="h-4 w-4" />
          Order History
        </NavLink>
        <NavLink
          to="/trackorder"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <MapPin className="h-4 w-4" />
          Track Order
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <ShoppingCart className="h-4 w-4" />
          Shopping Cart
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <Heart className="h-4 w-4" />
          Wishlist
        </NavLink>
        <NavLink
          to="/compare"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <SplitSquareVertical className="h-4 w-4" />
          Compare
        </NavLink>
        <NavLink
          to="/cards"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <CreditCard className="h-4 w-4" />
          Cards & Address
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <History className="h-4 w-4" />
          Browsing History
        </NavLink>
        <NavLink
          to="/userprofile"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <Settings className="h-4 w-4" />
          Setting
        </NavLink>
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 px-4 py-5 text-gray-600 hover:bg-orange-100 hover:text-gray-600" 
          size="sm"
        >
          <LogOut className="h-4 w-4" />
          Log-out
        </Button>
      </nav>
    </div>
  )
}

export default UserSideBar
