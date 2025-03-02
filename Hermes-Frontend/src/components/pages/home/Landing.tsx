import React, { useEffect, useState } from 'react';
import HeroSection from "../../common/HeroSection";
import PopularNow from "../../common/PopularNow";
import { useSearchParams } from 'react-router-dom';
import { getOrderStatus } from '@/api/api';
import { OrderCreateResponse } from '@/api/types';

const Landing = () => {
  const [searchParams] = useSearchParams();
  const orderID = searchParams.get("orderID");
  const [orderStatus, setOrderStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (orderID) {
      const fetchOrderStatus = async () => {
        setLoading(true);
        try {
          const data = await getOrderStatus(`/order/status/${orderID}`)
          console.log(data)
          // setOrderStatus(data.orderStatus);
        } catch (err) {
          setError("err.message");
        } finally {
          setLoading(false);
        }
      };

      fetchOrderStatus();
    }
  }, [orderID]);

  
  return (
    <div>
      {orderID ? (
        <div className="mt-2">
        <p>Order ID: <span className="font-mono text-blue-600">{orderID}</span></p>
        {loading ? (
          <p>Loading order status...</p>
        ) : error ? (
          <p className="text-red-600">Error: {error}</p>
        ) : orderStatus ? (
          <p className="text-green-600">Order Status: {orderStatus}</p>
        ) : null}
      </div>
      ) : (
        <>
          <section className='bg-[#F6EBDA]'>
            <HeroSection />
            {/* popular section */}
            <PopularNow />
          </section>

          {/* feature section */}
          <section className="p-4 sm:p-8 md:p-12 lg:p-16 mb-6 sm:mb-8 md:mb-10">
            <div className="container mx-auto px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
                Lorem <span className="relative inline-block">
                  Ipsum
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#FCB857] rounded"></span>
                </span>
              </h2>
              <div className="flex flex-wrap items-center justify-around gap-y-8 gap-x-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="text-center w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]">
                    <img src="logo.png" alt="" className="mx-auto mb-3 sm:mb-4 max-w-28 sm:max-w-32 md:max-w-40" />
                    <h3 className="text-lg sm:text-xl font-bold">Feature {num}</h3>
                    <p className="text-gray-500 text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* about */}
          <section className="relative p-4 sm:p-8 md:p-12 lg:p-16 bg-[#F6EBDA] mt-8 sm:mt-16 md:mt-20 mb-8 sm:mb-16 md:mb-20">
            <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 relative">
              {/* Image Section */}
              <div className="relative mb-8 sm:mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
                <img
                  src="gray.png"
                  alt="About us"
                  className="rounded-xl shadow-2xl w-full max-w-[220px] sm:max-w-xs md:max-w-sm relative z-10 mt-0 lg:-mt-32"
                />
              </div>
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-gray-900">
                  About <span className="relative inline-block">
                    us
                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#FCB857] rounded"></span>
                  </span>
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800 break-words tracking-[0.96]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h3>
                <p className="font-normal text-sm sm:text-base text-[#7E7D7A] mb-4 sm:mb-6 break-words">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-[#313131] text-[#F4AE26] py-2 sm:py-3 px-4 sm:px-6 rounded-full font-bold text-xs hover:bg-gray-700 cursor-pointer relative z-10">
                  Get in touch
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full hidden sm:flex items-center justify-end">
              <div 
                className="w-1/2 sm:w-2/3 md:w-3/4 h-1/2 sm:h-2/3 md:h-3/4 bg-contain bg-right bg-no-repeat opacity-10"
                style={{ backgroundImage: "url('/logo.png')" }}
              ></div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Landing;
