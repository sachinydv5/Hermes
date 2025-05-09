import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import SignupForm from './SignupForm';
import { callApi } from '../../../api/api';
import { UserLoginRequest, UserLoginResponse } from '../../../api/types';
import { useNavigate } from "react-router";
import { updateUserLoggedIn } from '../../../app/store/user';
import { useAppDispatch } from '../../../app/hooks';
import { Loader } from 'lucide-react';

interface LoginFormProps {
  onLoginSuccess?: () => void;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const [showSignUp, setShowSignUp] = useState(false);
  const[isSigningin, setIsSigningin]=useState(false);
  const[error,setError] = useState<string | null>(null)
  let navigate = useNavigate();
  const dispatch = useAppDispatch()
  const handleLogin = async (e:any) => { 
   e.preventDefault();
   setIsSigningin(true);
   setError(null);

   try{
      const userLoginRequest: UserLoginRequest = {
        email: formData.email,
        password: formData.password,
      } 
      const response: UserLoginResponse  = await callApi(userLoginRequest,"/api/login");

     if("status" in response && response.status === "USER_LOGGED_IN"){
      localStorage.setItem("token", response.authToken);
        const storePayload = {
          firstName: response.user.first_name
        }
        console.log(storePayload)
        localStorage.setItem("firstName", response.user.first_name);
        dispatch(updateUserLoggedIn(storePayload))
        navigate("/");
        onLoginSuccess?.()
     }
     
     else if("error_code" in response){
      setError(response.description)
     }
   } catch(err){
    console.error("Login error:", err)
    setError("faild to login")
   }
  
  };

  return (
    <div className="flex items-center justify-center">
      {!showSignUp ? (
        <div className="w-full max-w-md space-y-6 rounded-xl p-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl text-white font-normal">Login</h1>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email/Phone Input */}
            <div className="space-y-2">
              <label className="text-amber-200 text-sm" htmlFor="emailorphone">
                Email 
              </label>
              <input
                id="emailorphone"
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:ring-2 focus:ring-amber-200 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-amber-200 text-sm" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:ring-2 focus:ring-amber-200 focus:outline-none"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <a href="/forgot-password" className="inline-block text-amber-200 text-sm hover:text-amber-300">
              Forgot Password?
            </a>

            {/* Sign In Button */}
            <button
              type="submit"
              className="relative w-full py-3 px-4 text-zinc-800 text-xl font-bold bg-amber-200 rounded-full hover:bg-amber-100 transition-colors disabled:opacity-70"
              disabled={isSigningin}
            >
              {isSigningin ? (
                <span className="flex items-center justify-center">
                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                </span>
              ) : (
                "Sign in"
              )}
              
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
            <button className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
              </svg>
            </button>
            <button className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="#000000"/>
              </svg>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-sm text-gray-400">Don't have an account yet?</span>
            <Button
              variant="link"
              className="text-blue-400 text-sm hover:text-blue-300"
              onClick={() => setShowSignUp(true)}
            >
              Register for free
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md space-y-6  rounded-xl p-8">
          <div>
            <h1 className="text-4xl text-white font-normal">Sign Up</h1>
          </div>
          <SignupForm />
          <div className="text-center">
            <span className="text-sm text-gray-400">Already have an account?</span>
            <Button
              variant="link"
              className="text-blue-400 text-sm hover:text-blue-300"
              onClick={() => setShowSignUp(false)}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
