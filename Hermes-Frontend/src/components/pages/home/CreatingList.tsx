import { Link } from "react-router-dom"
import Header from "../../common/Header"



const CreatingList = () => {
  return (
    <div>
        <div className="min-h-screen p-6">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">Upload item</h1>
        <p className=" text-sm text-center text-gray-600 mb-12">
          Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one
          collectible multiple times
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-white rounded-2xl border-2 p-6">
            <img
              src="singlelist.png"
              alt="Single item illustration"
              // width={320}
              // height={256}
              className="mb-6 rounded-lg"
            />
            <button className="py-2 px-4 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition duration-300">
              <Link to='/createsingle'>Create Single</Link>
            </button>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl border-2 p-6">
            <img
              src="multiplelist.png"
              alt="Multiple items illustration"
              // width={300}
              // height={300}
              className=" mb-6"
            />
            <button className="py-2 px-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300">
              Create Multiple
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          We do not own your private keys and cannot access your funds without your confirmation.
        </p>
      </main>
    </div>
    </div>

  )
}

export default CreatingList