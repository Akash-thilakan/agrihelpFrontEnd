import React from 'react'
import FarmerHeader from '../components/FarmerHeader'
import Footer from '../../common/Components/Footer'

function AddTips() {
  return (
    <>
    <FarmerHeader/>
     <div className="w-full min-h-screen bg-gray-50">

      <div className="w-full h-64 bg-gradient-to-r from-green-600 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
        <h1 className="text-4xl font-bold animation-float">Share Your Farming Wisdom</h1>
        <p className="text-green-100 text-lg mt-3 max-w-2xl">
          Farmers know the fields better than anyone. Share your valuable tips to guide others and help build a stronger farming community.
        </p>
      </div>

   
      <div className="w-full flex justify-center px-6 md:px-20 mt-12 mb-16">
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-2xl">

          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Add New Farming Tip
          </h2>

          <form className="space-y-6">

          
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Tip Title
              </label>
              <input
                type="text"
                placeholder="e.g., Best Time to Water Your Crops"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Image
              </label>
              <input
                type="text"
                placeholder="Place Your Image Url Here.."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

         
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                rows="5"
                placeholder="Explain the tip in detail so other farmers can benefit..."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Publish Tip
            </button>

          </form>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default AddTips