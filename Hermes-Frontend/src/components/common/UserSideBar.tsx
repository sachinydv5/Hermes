import React from 'react'
import { LayoutDashboard, ClipboardList, MapPin, ShoppingCart, Heart, SplitSquareVertical, CreditCard, History, Settings, LogOut } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from '@/app/hooks';



const UserSideBar = () => {
const dispatch = useAppDispatch();

let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: 'RESET' });
    navigate("/");
    window.location.reload();
   
  };

  return (
    <div className="h-min my-10 bg-white shadow-sm overflow-y-auto">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-lg">My Account</h3>
      </div>
      <nav className="py-4 px-2 space-y-0.5">
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
          to="/cards"
          className={({ isActive}) =>
            `flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 transition-colors hover:bg-orange-100 ${isActive ? "bg-orange-100": ""}`
          }
        >
          <CreditCard className="h-4 w-4" />
          Cards & Address
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
          className="w-full justify-start gap-3 px-4 py-2.5 text-gray-600 hover:bg-orange-100 hover:text-gray-600" 
          size="sm"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Log-out
        </Button>
      </nav>
    </div>
  )
}

export default UserSideBar
