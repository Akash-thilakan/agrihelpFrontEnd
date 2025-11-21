import React from 'react'
import FarmerHeader from '../components/FarmerHeader'
import Footer from '../../common/Components/Footer'

function FarmerNews() {
  return (
    <>
    <FarmerHeader/>
     <div className="w-full py-20 px-6 md:px-20 bg-gray-50">

      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Latest News & Updates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* News Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200 rotate-[-1deg]">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Crop Prices Increase</h3>
          <p className="text-gray-600 mb-4">
            Recent market trends show an increase in the prices of tomatoes and onions across
            Kerala and Tamil Nadu due to heavy rainfall.
          </p>
          <button className="text-green-700 font-semibold hover:underline">Read More →</button>
        </div>

        {/* News Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200 rotate-[1deg]">
          <h3 className="text-xl font-bold text-gray-800 mb-2">New Farming Scheme</h3>
          <p className="text-gray-600 mb-4">
            Government announces new subsidy program supporting organic farming and small-scale
            agricultural startups.
          </p>
          <button className="text-green-700 font-semibold hover:underline">Read More →</button>
        </div>

        {/* News Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200 rotate-[-1deg]">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Rainfall Alert</h3>
          <p className="text-gray-600 mb-4">
            IMD issues rainfall warning across multiple districts. Farmers advised to cover crops
            and ensure proper drainage.
          </p>
          <button className="text-green-700 font-semibold hover:underline">Read More →</button>
        </div>

      </div>

    </div>
    <Footer/>
    </>
  )
}

export default FarmerNews