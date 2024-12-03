      import React, { useState } from 'react'
      import { callApi } from '../../../api/api';

      const SignupForm = () => {
          const [showPassword, setShowPassword] = useState(false)
          const [formData, setFormData] = useState({
            firstName: '',
            email: '',
            password: '',
          });
          const[error,setError] = useState<string | null>(null)

          const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
          
            console.log(formData);

            try{
              const response = callApi(
                {
                 firstName:formData.firstName,
                email: formData.email,
                password: formData.password,
                lastName:formData.firstName
              },
              "/api/signup"
            );

            console.log(response)

          }catch(err){
            console.error("Sign up error:", err)
            setError("faild to signup")
            } 
            setFormData({
              firstName: '',
              email: '',
              password: '',
            })
          };
          
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[#f8d9a9]">FirstName</label>
            <input
                      id="name"
                      type="text"
                      placeholder="Full name please"
                      className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[#f8d9a9]">Email/Phone</label>
            <input
                      id="emailorphone"
                      type="text"
                      placeholder="Email or Phone Number"
                      className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-[#f8d9a9]">Password</label>
            <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required />
          </div>
          <button type="submit" className="w-full py-3 px-4 text-[#313131] text-xl font-bold bg-[#f8d9a9] rounded-full hover:bg-orange-100">Sign Up</button>
          
          <div className="flex justify-center text-sm mt-4">
            <span className="px-2 text-gray-400">or continue with</span>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <button type="button" className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
            <button type="button" className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
              </svg>
            </button>
            <button type="button" className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="#000000"/>
              </svg>
            </button>
          </div>
        </form>  
        )
      }

      export default SignupForm
