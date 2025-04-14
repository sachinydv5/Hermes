// import * as React from 'react';
// const Footer = () => {
//     return (
//       <footer className="mb-20">

//         <div className="max-w-6xl mx-auto px-4">
//           <div className="bg-black h-96 bg-opacity-20 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center "
//           style={{ backgroundImage: `url('/footerbg.png')` }}>
//             <h2 className="text-white text-4xl font-bold mb-6 text-center">Get in Contact with us</h2>
//             <div className="relative w-full md:w-2/3 mx-auto">
//               <input 
//                 type="email" 
//                 placeholder="Email address" 
//                 className="w-full rounded-full px-6 py-4 pr-32 outline-none text-black"
//               />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-gray-700 transition-colors">
//                 Get in touch
//               </button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
  
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <footer className=" bg-[#F6EBDA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VIVARENT</h3>
            <ul className="space-y-2">
             <Link to='/about'><li>About Us</li></Link> 
              <li>Terms & Conditions</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                Contact us
              </li>

            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"></a>
              <a href="#" className="hover:text-gray-300"></a>
              <a href="#" className="hover:text-gray-300"></a>
              <a href="#" className="hover:text-gray-300"></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Vivarent. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer