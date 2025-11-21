import React from 'react'
import Footer from '../../common/Components/Footer'
import UserHeader from '../components/UserHeader'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function UserCart() {
  return (
    <>
    <UserHeader/>
     <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Your Cart
      </h1>

      {/* CART LIST */}
      <div className="space-y-6">

        {/* ITEM 1 */}
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-6">
          
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg"
            className="w-24 h-24 object-cover rounded-lg"
            alt="item"
          />

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">Organic Tomatoes</h2>
            <p className="text-green-600 font-medium mt-1">₹40 / kg</p>
          </div>

          {/* Quantity */}
          <div className="flex items-center space-x-3">
            <button className="bg-green-600 text-white p-2 rounded-full">
              <RemoveIcon fontSize="small" />
            </button>

            <span className="font-semibold text-lg">1</span>

            <button className="bg-green-600 text-white p-2 rounded-full">
              <AddIcon fontSize="small" />
            </button>
          </div>

          {/* Item Total */}
          <div>
            <p className="text-lg font-semibold text-gray-800">₹40</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-6">
          
          <img
            src="https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg"
            className="w-24 h-24 object-cover rounded-lg"
            alt="item"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">Fresh Carrots</h2>
            <p className="text-green-600 font-medium mt-1">₹30 / kg</p>
          </div>

          <div className="flex items-center space-x-3">
            <button className="bg-green-600 text-white p-2 rounded-full">
              <RemoveIcon fontSize="small" />
            </button>

            <span className="font-semibold text-lg">2</span>

            <button className="bg-green-600 text-white p-2 rounded-full">
              <AddIcon fontSize="small" />
            </button>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800">₹60</p>
          </div>
        </div>

      </div>

      {/* TOTAL + ORDER BUTTON */}
      <div className="bg-white shadow-xl rounded-xl p-6 mt-10 max-w-xl mx-auto">
        <div className="flex justify-between text-xl font-bold text-gray-800 mb-4">
          <span>Total Price</span>
          <span>₹100</span>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Place Order
        </button>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default UserCart