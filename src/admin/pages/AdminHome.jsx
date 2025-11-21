import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/Components/Footer'
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <>
    <AdminHeader/>
    <div className="w-full h-screen relative">

  
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/3783928/"   // replace with your admin video
        autoPlay
        loop
        muted
      />

     
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

        <h1 className="text-5xl font-extrabold text-white drop-shadow-md mb-4 animation-float">
          Welcome, Admin
        </h1>

        <p className="text-lg text-green-100 max-w-2xl mb-10">
          You oversee the entire AgriHelp community.  
          Manage farmers, approve requests, publish news & tips,  
          and ensure the platform runs smoothly.
        </p>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">

          {/* Card 1 */}
         <Link to={"/users"}> <div className="bg-green-700 bg-opacity-20 backdrop-blur-lg text-white p-6 rounded-xl shadow-xl hover:bg-opacity-30 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Manage Farmers</h3>
            <p className="text-sm text-gray-200">
              Review and verify new farmer registrations.
            </p>
          </div></Link>

          {/* Card 2 */}
          <Link to={"/adminnews"}><div className="bg-green-700 bg-opacity-20 backdrop-blur-lg text-white p-6 rounded-xl shadow-xl hover:bg-opacity-30 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Manage News</h3>
            <p className="text-sm text-gray-200">
              Publish agriculture news and updates.
            </p>
          </div></Link>

          {/* Card 3 */}
          <Link to={"/admintips"}><div className="bg-green-700 bg-opacity-20 backdrop-blur-lg text-white p-6 rounded-xl shadow-xl hover:bg-opacity-30 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2"> Tips</h3>
            <p className="text-sm text-gray-200">
              Manage Tips Shared By Farmers
            </p>
          </div></Link>

          {/* Card 4 */}
          <Link to={"/adminvedios"}>
          <div className="bg-green-700 bg-opacity-20 backdrop-blur-lg text-white p-6 rounded-xl shadow-xl hover:bg-opacity-30 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Add Vedios</h3>
            <p className="text-sm text-gray-200">
              Add Farming guide vedios
            </p>
          </div></Link>

          {/* Card 5 */}
         <Link to={"/users"}> <div className="bg-green-700 bg-opacity-20 backdrop-blur-lg text-white p-6 rounded-xl shadow-xl hover:bg-opacity-30 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
            <p className="text-sm text-gray-200">
              Oversee user accounts and resolve issues.
            </p>
          </div></Link>

        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminHome