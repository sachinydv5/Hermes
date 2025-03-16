import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import UserSideBar from '../common/UserSideBar'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SidebarLayout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <div className="sticky top-0 z-30 lg:hidden bg-white p-4 shadow-sm">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="h-9 w-9"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:flex-shrink-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <UserSideBar />
        </div>

        {/* Main content */}
        <div className="flex-1 w-full lg:pl-0">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

