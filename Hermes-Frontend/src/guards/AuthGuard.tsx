import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { isUserLoggedIn } from '../app/store/user'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "../components/ui/dialog"
import LoginForm from '../components/pages/home/LoginForm'

const AuthGuard = () => {
  const isLogIn: boolean = useAppSelector(isUserLoggedIn)
  const location = useLocation()
  const [showDialog, setShowDialog] = useState(!isLogIn)

  return (
    <div>
      {/* Always render the protected route content */}
      <div className={!isLogIn ? 'pointer-events-none' : ''}>
        <Outlet />
      </div>

      {/* Show login dialog when not logged in */}
      {!isLogIn && (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogOverlay className="bg-black/30" />
          <DialogContent className="sm:max-w-[425px] bg-[#313131] text-white border-none fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LoginForm returnPath={location.pathname} />
          </DialogContent>
        </Dialog>
      )}

      {/* Navigate away if dialog is closed while not logged in */}
      {!isLogIn && !showDialog && (
        <Navigate to="/" replace state={{ from: location }} />
      )}
    </div>
  )
}

export default AuthGuard
