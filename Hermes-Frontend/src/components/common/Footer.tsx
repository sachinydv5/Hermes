
  

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    

<footer className="bg-[#F6EBDA]">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link  to='/'className="flex items-center">
                  <img src="vivarent_logo_vertical.png" className="h-12 me-3" alt="FlowBite Logo" />
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
                         Contact Us:
                        <div>vivarent.us@gmail.com</div> 
                      </li>
                      <li>
                          <Link to="/faq" className="hover:underline">FAQ</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Terms &amp; Legal Info</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      {/* <li className="mb-4">
                          <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                      </li> */}
                      <li>
                          <Link to="/policy" className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link to="/termsofuse" className="hover:underline">Terms of Use</Link>
                      </li>
                      <li>
                          <Link to="/agreement" className="hover:underline">Rental Agreement</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
      <div className="sm:flex items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Vivarent™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 items-center justify-center sm:mt-0">
              <a href="https://www.instagram.com/vivarent.us?igsh=MXE0dmVudXp3bHZhZw==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="https://www.linkedin.com/in/vivarent-us-903b25344" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  <span className="sr-only">Linkdin page</span>
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer
