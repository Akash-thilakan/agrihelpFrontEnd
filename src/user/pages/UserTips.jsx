import React from 'react'
import UserHeader from '../components/UserHeader'
import Footer from '../../common/Components/Footer'

function UserTips() {
  return (
    <>
    <UserHeader/>
     <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-16">

      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        Agriculture Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Tip Card 1 */}
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg"
            className="w-full h-56 object-cover brightness-75"
            alt="Rice Farming"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold">Rice Cultivation</h2>
            <p className="text-sm mt-2">
              Maintain proper water levels and ensure fields are free from weeds.
            </p>
          </div>
        </div>

        {/* Tip Card 2 */}
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D"
            className="w-full h-56 object-cover brightness-75"
            alt="Vegetables"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold">Vegetable Growth</h2>
            <p className="text-sm mt-2">
              Use organic compost and maintain soil moisture for better yields.
            </p>
          </div>
        </div>

        {/* Tip Card 3 */}
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/636/974/large_2x/corn-image-hd-free-photo.jpg"
            className="w-full h-56 object-cover brightness-75"
            alt="Corn"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold">Corn Farming</h2>
            <p className="text-sm mt-2">
              Ensure proper spacing and provide nitrogen-rich fertilizers.
            </p>
          </div>
        </div>

        {/* Tip Card 4 */}
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg"
            className="w-full h-56 object-cover brightness-75"
            alt="Banana"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold">Banana Plants</h2>
            <p className="text-sm mt-2">
              Protect from strong winds and water regularly to avoid dryness.
            </p>
          </div>
        </div>

        {/* Tip Card 5 */}
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/1000055/pexels-photo-1000055.jpeg"
            className="w-full h-56 object-cover brightness-75"
            alt="Coconut"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold">Coconut Farming</h2>
            <p className="text-sm mt-2">
              Provide proper spacing and avoid waterlogging at the base.
            </p>
          </div>
        </div>

        {/* Tip Card 6 */}
        <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatcZr5Qq8jVXBvhlYDsBMS9fZfcj6nstrgg&s"
            className="w-full h-56 object-cover brightness-75"
            alt="Tea Plantation"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold">Tea Plantation</h2>
            <p className="text-sm mt-2">
              Maintain shade and prune regularly for healthy growth.
            </p>
          </div>
        </div>

      </div>

    </div>
    <Footer/>
    </>
  )
}

export default UserTips