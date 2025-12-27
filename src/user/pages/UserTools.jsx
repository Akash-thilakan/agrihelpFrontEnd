import React from "react";
import UserHeader from "../components/UserHeader";
import Footer from "../../common/Components/Footer";

function UserTools() {
  return (
    <>
      <UserHeader />

      <div className="w-full min-h-screen bg-gray-50">

        {/* HERO SECTION */}
        <div className="w-full h-60 bg-gradient-to-r from-green-500 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg">
        <h1 className="text-4xl font-bold animation-float">Welcome, User 👋</h1>
        <p className="text-lg mt-2 text-green-100 animation-float">
            Explore fresh crops, tools, tractors, and more!
        </p>
      </div>


        {/* TOOLS & LAND SECTION */}
        <div className="px-6 md:px-20 mt-12 mb-10">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">
            Tools & Lands Available
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {/* TOOL CARD */}
            <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src="https://images.pexels.com/photos/12611101/pexels-photo-12611101.jpeg"
                alt="Harvesting Tools"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Harvesting Tool Set
                </h3>
                <p className="text-green-600 mt-2 font-medium">
                  ₹650 / Set
                </p>
              </div>
            </div>

            {/* TOOL CARD */}
            <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src="https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg"
                alt="Tractor"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Tractor for Rent
                </h3>
                <p className="text-green-600 mt-2 font-medium">
                  ₹1200 / Day
                </p>
              </div>
            </div>

            {/* LAND CARD */}
            <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg"
                alt="Agricultural Land"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Agricultural Land
                </h3>
                <p className="text-green-600 mt-2 font-medium">
                  ₹15,000 / Month
                </p>
              </div>
            </div>

            {/* LAND CARD */}
            <div className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
                alt="Farmland"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Fertile Farmland
                </h3>
                <p className="text-green-600 mt-2 font-medium">
                  ₹18,000 / Month
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserTools;
