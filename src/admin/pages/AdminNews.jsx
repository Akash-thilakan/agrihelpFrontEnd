import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/Components/Footer'

function AdminNews() {
  return (
    <>
    <AdminHeader/>
     <div className="w-full min-h-screen bg-gray-50">

      {/* TOP BANNER */}
      <div className="w-full h-64 bg-gradient-to-r from-green-500 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
        <h1 className="text-4xl font-bold animation-float">Add Agriculture News</h1>
        <p className="text-green-100 text-lg mt-3 max-w-2xl">
          Publish important agricultural updates, government schemes, weather alerts and more.
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="w-full flex justify-center px-6 md:px-20 mt-12 mb-16">
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-3xl">

          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Create News Article
          </h2>

          <form className="space-y-6">

            {/* Headline */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Headline
              </label>
              <input
                type="text"
                placeholder="Enter a powerful news headline..."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Paragraph */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                News Content
              </label>
              <textarea
                rows="6"
                placeholder="Write the full news content here..."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
              ></textarea>
            </div>

            {/* Upload Image */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Upload Image / Paper Clipping
              </label>
              <input
                type="file"
                className="w-full p-3 border rounded-lg bg-gray-100"
              />
            </div>

            {/* Paper Cutting Sample Box */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-5 shadow-inner">
              <p className="text-gray-700 text-sm mb-2 font-semibold">
                News Preview Layout:
              </p>
              <div className="bg-white rounded-lg shadow-md border p-4">
                <div className="h-32 bg-gray-200 rounded-md mb-3 flex justify-center items-center text-gray-500">
                  Image / Paper Cut Here
                </div>
                <h3 className="text-lg font-bold text-gray-800">Headline appears here</h3>
                <p className="text-gray-600 text-sm mt-1">Short news description preview...</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Publish News
            </button>

          </form>

        </div>
      </div>

    </div>

    <Footer/>
    </>
  )
}

export default AdminNews