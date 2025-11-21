import React from 'react'
import FarmerHeader from '../components/FarmerHeader'
import Footer from '../../common/Components/Footer'

function FarmerHome() {
  return (
    <>
    <FarmerHeader/>
      <div className="w-full min-h-screen bg-gray-50">

    
      <div className="relative w-full h-[90vh] flex justify-center items-center text-center text-white">

       
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.pexels.com/download/video/10041359/"   // 🔹 replace with your video file
          autoPlay
          loop
          muted
        />

        {/* Dark Overlay */}
       <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg animation-float">
            Welcome, Farmer
          </h1>

          <p className="text-xl mt-4 text-green-100 font-medium leading-relaxed animation-float">
            You are the backbone of our country.  
            Your hard work feeds millions.  
            We salute your dedication and support you with the best tools and services.
          </p>
        </div>
      </div>

      {/* PRODUCT CARDS SECTION */}
      <div className="px-6 md:px-20 mt-12 mb-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">
          Recommended for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg"
              alt="Seeds"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Organic Tomato Seeds</h3>
              <p className="text-green-600 mt-2 font-medium">₹120 / Packet</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg"
              alt="Fertilizer"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Organic Fertilizer</h3>
              <p className="text-green-600 mt-2 font-medium">₹350 / Bag</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1359315/pexels-photo-1359315.jpeg"
              alt="Corn seeds"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Hybrid Corn Seeds</h3>
              <p className="text-green-600 mt-2 font-medium">₹150 / Packet</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/12611101/pexels-photo-12611101.jpeg"
              alt="Tools"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Harvesting Tools</h3>
              <p className="text-green-600 mt-2 font-medium">₹650 / Set</p>
            </div>
          </div>

        </div>
      </div>

    </div>

    <Footer/>
    
    </>
  )
}

export default FarmerHome