import React, { useState } from 'react'

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md space-y-6  bg-[#313131] rounded-xl  p-8">
          <h1 className="text-white text-[38px] font-normal font-['Inter']">Sign up</h1>
        <form className="space-y-4">
        <div className="space-y-2">
            <label className="text-white text-sm font-normal font-['Inter']" htmlFor="email">
              First name
            </label>
            <input
              id="text"
              type="text"
              placeholder="jhon doe"
              className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
            //   value={formData.email}
            //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm font-normal font-['Inter']" htmlFor="email">
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
            <label className="text-white text-sm font-normal font-['Inter']" htmlFor="email">
              Phone
            </label>
            <input
              id="text"
              type="text"
              placeholder="0000 0000"
              className="w-full px-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
            //   value={formData.email}
            //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-white text-sm font-normal font-['Inter']" htmlFor="password">
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
            </div>
          </div>
          <div className='space-y-10'>
          <button
            type="submit"
            className="w-full py-3 px-4  text-[#313131] text-xl font-bold  bg-[#f8d9a9]  rounded-full"
          >
            Sign in
          </button>
          </div>
         
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
      </div>
    </div>
    </div>
  )
}

export default SignupForm
