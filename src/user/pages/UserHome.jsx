import React from 'react'
import UserHeader from '../components/UserHeader'
import Footer from '../../common/Components/Footer'

function UserHome() {
  return (
    <>
    <UserHeader/>
    
     <div className="w-full min-h-screen bg-gray-50">

      
      <div className="w-full h-60 bg-gradient-to-r from-green-500 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg">
        <h1 className="text-4xl font-bold animation-float">Welcome, User 👋</h1>
        <p className="text-lg mt-2 text-green-100 animation-float">
            Explore fresh crops, tools, tractors, and more!
        </p>
      </div>

     
      <div className="px-6 md:px-20 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">
          Recommended Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://t4.ftcdn.net/jpg/00/69/28/27/360_F_69282769_nnGX7SidAFQs8SwUgmZFx5Zlz6sXRkl4.jpg"
              className="w-full h-40 object-cover"
              alt="Tomatoes"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Organic Tomatoes</h3>
              <p className="text-green-600 font-medium mt-2">₹40 / kg</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg"
              className="w-full h-40 object-cover"
              alt="Carrots"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Fresh Carrots</h3>
              <p className="text-green-600 font-medium mt-2">₹30 / kg</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5A1fx6Mc5os31AlCnt3625dR_eXLhnrcSQ&s"
              className="w-full h-40 object-cover"
              alt="Potatoes"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Potatoes</h3>
              <p className="text-green-600 font-medium mt-2">₹25 / kg</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/5217880/pexels-photo-5217880.jpeg"
              className="w-full h-40 object-cover"
              alt="Cauliflower"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Cauliflower</h3>
              <p className="text-green-600 font-medium mt-2">₹35 / piece</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>

           {/* Card 1 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://t4.ftcdn.net/jpg/00/69/28/27/360_F_69282769_nnGX7SidAFQs8SwUgmZFx5Zlz6sXRkl4.jpg"
              className="w-full h-40 object-cover"
              alt="Tomatoes"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Organic Tomatoes</h3>
              <p className="text-green-600 font-medium mt-2">₹40 / kg</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg"
              className="w-full h-40 object-cover"
              alt="Carrots"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Fresh Carrots</h3>
              <p className="text-green-600 font-medium mt-2">₹30 / kg</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5A1fx6Mc5os31AlCnt3625dR_eXLhnrcSQ&s"
              className="w-full h-40 object-cover"
              alt="Potatoes"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Potatoes</h3>
              <p className="text-green-600 font-medium mt-2">₹25 / kg</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/5217880/pexels-photo-5217880.jpeg"
              className="w-full h-40 object-cover"
              alt="Cauliflower"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Cauliflower</h3>
              <p className="text-green-600 font-medium mt-2">₹35 / piece</p>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
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

export default UserHome