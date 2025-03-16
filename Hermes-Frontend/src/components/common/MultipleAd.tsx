import React from 'react'

const MultipleAd = () => {
  return (
    <div className="w-[90vw] mx-auto mb-24">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* EKO TV Card */}
          <div className="relative rounded-3xl overflow-hidden w-full lg:w-[calc(67%-1rem)] h-[450px] lg:h-[450px]">
            <img
              src="/ads-images/head_1.png"
              alt="EKO TV Background"
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="relative z-20 p-8 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  EKO 40"
                  <br />
                  Android
                  <br />
                  TV
                </h2>
                <p className="text-sm text-gray-300 uppercase tracking-wider">
                  SMART FULL HD
                  <br />
                  ANDROID TV WITH
                  <br />
                  GOOGLE ASSISTANT
                </p>
              </div>
              <button
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors self-start"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Humidifying Fan Card */}
          <div className="relative  rounded-3xl overflow-hidden w-full lg:w-[calc(33%-1rem)] h-[450px]">
            <img
              src="/ads-images/head_2.png"
              alt="Humidifying Fan Background"
              className="absolute inset-0 w-full object-cover z-0"
            />
            <div className="relative z-20 p-6 h-full flex flex-col justify-between items-center">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">Humidifying</h2>
                <h3 className="text-3xl font-bold text-white">Fan</h3>
                <p className="text-sm text-white opacity-90">From $299</p>
              </div>
              <button
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Discover Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
          {/* iPad Mini Card */}
          <div className="relative rounded-3xl overflow-hidden w-full sm:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] h-[230px]">
            <img
              src="/ads-images/head_3.png"
              alt="iPad Mini Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-black">
                  iPad
                  <br />
                  mini
                  <br />
                  2022
                </h2>
                <p className="text-sm text-gray-700">Mega Power in mini size</p>
              </div>
            </div>
          </div>

          {/* Air Purifier Card */}
          <div className="relative rounded-3xl overflow-hidden w-full sm:w-[calc(25%-0.5rem)] lg:w-[calc(30%-1rem)] h-[230px]">
            <img
              src="/ads-images/head_4.png"
              alt="Air Purifier Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Air</h2>
                <h3 className="text-2xl font-bold text-white">Purifier</h3>
                <p className="text-sm text-white opacity-70">FROM</p>
                <p className="text-xl font-bold text-[#FFD39F]">$169</p>
              </div>
            </div>
          </div>

          {/* Washing Machine Card */}
          <div className="relative bg-gray-200 rounded-3xl overflow-hidden w-full sm:w-[calc(25%-0.5rem)] lg:w-[calc(30%-1rem)] h-[230px]">
            <img
              src="/ads-images/head_5.png"
              alt="Anatico Max 2 Washing Machine Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-600 uppercase">WASHING MACHINE</p>
                <h2 className="text-2xl font-bold text-gray-900">
                  Anatico
                  <br />
                  Max 2
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleAd