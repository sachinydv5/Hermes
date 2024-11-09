import React, { useState } from 'react'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md space-y-6  bg-[#313131] rounded-xl  p-8">
        <div className="space-y-2">
          <h1 className="text-white text-[38px] font-normal font-['Inter']">Login</h1>
        </div>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-[#f8d9a9] text-sm font-normal font-['Inter']" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="username@gmail.com"
              className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[#f8d9a9] text-sm font-normal font-['Inter']" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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

          <a
            href="/forgot-password"
            className="inline-block text-[#f8d9a9] text-sm font-normal font-['Inter']"
          >
            Forgot Password?
          </a>

          <button
            type="submit"
            className="w-full py-3 px-4  text-[#313131] text-xl font-bold  bg-[#f8d9a9]  rounded-full "
          >
            Sign in
          </button>
        </form>

        {/* <div className="relative"> */}
          <div className="flex justify-center text-sm">
            <span className="px-2 text-gray-400">or continue with</span>
          </div>
        {/* </div> */}

        <div className="grid grid-cols-3 gap-3">
          <button className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100">
            {/* <Image src="/placeholder.svg?height=24&width=24" alt="Google"  /> */}
          </button>
          <button className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100">
            {/* <Image src="/placeholder.svg?height=24&width=24" alt="Apple" width={24} height={24} /> */}
          </button>
          <button className="flex items-center justify-center p-3 bg-white rounded-full hover:bg-gray-100">
            {/* <Image src="/placeholder.svg?height=24&width=24" alt="Facebook" width={24} height={24} /> */}
          </button>
        </div>

        <p className="text-center text-sm text-[#bcbec0] font-semibold">
          Don't have an account yet?{' '}
          <a href="/register" className="text-[#5776d3] text-sm font-normal font-['Inter']">
            Register for free
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default LoginForm;
