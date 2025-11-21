import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../common/Components/Footer";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminVedios() {
  return (
    <>
      <AdminHeader />
       <div className="w-full min-h-screen bg-gray-50">

      <div className="w-full h-64 bg-gradient-to-r from-green-600 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
        <h1 className="text-4xl font-bold animation-float">Add Farming Videos</h1>
        <p className="text-green-100 text-lg mt-3 max-w-2xl">
          Share useful farming tutorials, guides, and agriculture-related videos for farmers.
        </p>
      </div>

   
      <div className="w-full flex justify-center px-6 md:px-20 mt-12 mb-16">
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-3xl">

          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Add New Video
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Video Title
              </label>
              <input
                type="text"
                placeholder="Enter video title..."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

        
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                YouTube Video URL
              </label>
              <input
                type="text"
                placeholder="Paste YouTube link (https://youtube.com/...)"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

         
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Short description about this video..."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Add Video
            </button>
          </form>

        </div>
      </div>

      
      <div className="px-6 md:px-20 mb-20">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Uploaded Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* VIDEO CARD 1 */}
          <div className="bg-white rounded-xl shadow-xl border overflow-hidden hover:scale-105 transition cursor-pointer">
            
            {/* Delete Button */}
            <button className="absolute bg-red-600 text-white p-2 rounded-full top-3 right-3 hover:bg-red-700 z-20">
              <DeleteIcon fontSize="small" />
            </button>

            {/* YouTube Thumbnail */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8ulpy_GFLDk?si=IdUk3eB-aAE-oHXX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                How to Prepare Soil for Farming
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Basic tutorial for beginners to improve soil quality.
              </p>
            </div>

          </div>

        

        </div>

      </div>

    </div>
      <Footer/>
    </>
  );
}

export default AdminVedios;
