import React from 'react'
import { useAppSelector } from '../app/hooks'
import { isUserLoggedIn } from '../app/store/user'
import { Navigate, Outlet } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import LoginForm from '../components/pages/home/LoginForm'

const AuthGuard = () => {
  const isLogIn: boolean = useAppSelector(isUserLoggedIn)
  return (
    <div>
       {isLogIn ? (
        <Outlet />
      ) : null }
      


      {!isLogIn && (<Dialog defaultOpen>
          <DialogContent className="sm:max-w-[425px] bg-[#313131] text-white border-none">
            <LoginForm />
          </DialogContent>
        </Dialog>)}

    </div>
  )
}

export default AuthGuard
