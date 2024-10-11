// import { IoSearch } from "react-icons/io5";

import { Link } from "react-router-dom";

// import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  return (
    <nav className="bg-orange-100 px-6 py-7">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="vivarent.png"
            alt="Vivarrent logo"
            className="h-8"
          />
        </div>

        {/* Links */}
        <div className="">
        <ul className="flex gap-10">
            <li className="text-gray-700 hover:text-[#f8a93a] font-semibold"><Link to='/home'>Home</Link></li>
            <li className="text-gray-700 hover:text-[#f8a93a] font-semibold">Discover</li>
            <li className="text-gray-700 hover:text-[#f8a93a] font-semibold">Company</li>
            </ul>
        </div>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
          <span className="absolute inset-y-0 flex items-center pl-3">
          {/* <IoSearch/> */}
            </span>
            <input
              type="text"
              placeholder="Lorem ipsum rento"
              className="px-10 py-2 w-64 rounded-full border border-gray-300 focus:outline-none"
            />
          
          </div>

          {/* Cart Icon */}
          <div>
            
          {/* <CiShoppingCart className="w-10 " /> */}
          </div>

          {/* Create Listing Button */}
          <button className="bg-white text-[#f8a93a] px-4 py-2 rounded-full font-semibold hover:text-black">
           <Link to='/creatinglist'>Create listing</Link> 
          </button>

          {/* Log In Button */}
          <button className="border border-[#f8a93a] text-black px-4 py-2 rounded-full font-semibold hover:text-white">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
