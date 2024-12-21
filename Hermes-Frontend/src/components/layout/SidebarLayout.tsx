import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSideBar from '../common/UserSideBar'

export default function SidebarLayout({ children }: any) {
  return (
    <div className="flex bg-gray-50">
      <UserSideBar/>
      <div className="flex-1 p-4">
        <Outlet />
       {/* { children} */}
      </div>
    </div>
  )
}

