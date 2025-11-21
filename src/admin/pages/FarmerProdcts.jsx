import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/Components/Footer'
import DeleteIcon from "@mui/icons-material/Delete";

function FarmerProdcts() {
  return (
    <>
    <AdminHeader/>
      <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-10">

     
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        Farmer Uploaded Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* PRODUCT CARD 1 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition">
          <img
            src="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg"
            alt="Tomatoes"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Organic Tomatoes</h3>
            <p className="text-gray-600 text-sm mt-1">Category: Vegetables</p>
            <p className="text-green-700 font-semibold mt-1">₹40 / kg</p>

            <div className="flex justify-end mt-4">
              <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCT CARD 2 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition">
          <img
            src="https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg"
            alt="Carrots"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Fresh Carrots</h3>
            <p className="text-gray-600 text-sm mt-1">Category: Vegetables</p>
            <p className="text-green-700 font-semibold mt-1">₹30 / kg</p>

            <div className="flex justify-end mt-4">
              <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCT CARD 3 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition">
          <img
            src="https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg"
            alt="Potatoes"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Potatoes</h3>
            <p className="text-gray-600 text-sm mt-1">Category: Vegetables</p>
            <p className="text-green-700 font-semibold mt-1">₹25 / kg</p>

            <div className="flex justify-end mt-4">
              <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCT CARD 4 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition">
          <img
            src="https://images.pexels.com/photos/802783/pexels-photo-802783.jpeg"
            alt="Bananas"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Bananas</h3>
            <p className="text-gray-600 text-sm mt-1">Category: Fruits</p>
            <p className="text-green-700 font-semibold mt-1">₹50 / dozen</p>

            <div className="flex justify-end mt-4">
              <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
    <Footer/>
    </>
  )
}

export default FarmerProdcts