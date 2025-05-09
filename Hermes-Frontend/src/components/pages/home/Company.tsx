import { ShieldCheck, Banknote, Users2, User2, UserSearch, DollarSign } from "lucide-react"
import { Link } from "react-router-dom"

export const Company = () =>{
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10">About Vivarent</h1>
          {/* <p className="text-lg sm:text-xl md:text-2xl  text-gray-700 max-w-3xl mx-auto mb-3">
            Introducing your friendly neighborhood rental service!
          </p> */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 ">
            Vivarent connects renters and owners across Minneapolis-St. Paul in a community rental platform.<br />We're here
            to help you get what you need from people you can trust.
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="prose lg:prose-xl max-w-none">
          <img
                  src="AboutUsLongImage-12.svg"
                  alt="About us"
                  className=""
                />
          {/* Why Vivarent */}
          <div className="my-16">
            <div className="flex items-center mb-6">
              <ShieldCheck className="h-8 w-8 text-[#f8a93a] mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why Vivarent?</h2>
            </div>
            <p className="text-base sm:text-xl md:text-2xl text-gray-700">
              Our secure platform connects you with vetted renters and owners. With Vivarent, you can have peace of mind
              while renting or making money from your household and high-end items. We take the risk out of renting,
              opening opportunities for everyone to get what they need or make some money on the side.
            </p>
          </div>

          {/* Save and Earn */}
          <div className="my-16">
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-[#f8a93a] mr-2" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Save and Earn with Vivarent!</h2>
            </div>
            <p className="text-base sm:text-xl md:text-2xl text-gray-700">
              Want to save on buying those items you'll use once? Tired of watching your big-ticket items collect dust?
              Vivarent helps you make the most of your money, reduce waste, and connect with your friends and neighbors
              across Minneapolis-St. Paul.
            </p>
          </div>

          {/* For Renters and Owners */}
          <div className="grid md:grid-cols-2 gap-10 my-16">
            <div className="bg-[#F6EBDA] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <User2 className="h-7 w-7 text-[#f8a93a] mr-2" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">For Renters</h3>
              </div>
              <p className="text-base sm:text-xl md:text-2xl text-gray-700">
                Vivarent helps renters save money on purchases and quickly get the items they need from trusted sources.
                Have a photoshoot and need a camera? Going for a weekend fishing trip and need some
                gear? Whatever you need, we've got you covered.
              </p>
            </div>

            <div className="bg-[#F6EBDA] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <UserSearch className="h-7 w-7 text-[#f8a93a] mr-2" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">For Owners</h3>
              </div>
              <p className="text-base sm:text-xl md:text-2xl text-gray-700">
                Likewise, Vivarent helps you make money by putting your items to work. Do you have a guitar amp that
                someone needs Want your bike rack to earn its keep? With Vivarent, you can connect with
                trusted members willing to pay for your rental.
              </p>
            </div>
          </div>

          {/* Connect With the Community */}
          <div className="my-16">
            <div className="flex items-center mb-6">
              <Users2 className="h-8 w-8 text-[#f8a93a] mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Connect With the Community</h2>
            </div>
            <p className="text-base sm:text-xl md:text-2xl text-gray-700">
              Vivarent goes one step further than other rental marketplaces and helps you connect with your community.
              Our platform enables you to meet others across Minneapolis-St. Paul, building connections with people you
              know you can trust.
            </p>
          </div>

          {/* Call to Action */}
          <div className=" p-10 rounded-2xl text-center mt-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to start renting or listing?</h3>
            <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-6">
              Join our community today and discover a new way to access what you need.
            </p>
            <Link to='/createsingle'className="text-[#f8a93a] bg-white border-[#FCB857] border-2 px-8 py-3 rounded-lg font-medium text-lg  hover:text-black transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
