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
  

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    

<footer className="bg-[#F6EBDA]">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link  to='/'className="flex items-center">
                  <img src="vivarent.png" className="h-12 me-3" alt="FlowBite Logo" />
                  {/* <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">vivarent</span> */}
                  </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="/about" className="hover:underline">About</Link>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline"></a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">support</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="#" className="hover:underline ">Contact Us</Link>
                      </li>
                      <li>
                          <Link to="#" className="hover:underline">FAQ</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Terms &amp; Legal Info</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                          <Link to="#" className="hover:underline">Privacy Policy
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Vivarent™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer
