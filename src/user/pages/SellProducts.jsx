import React from "react";
import UserHeader from "../components/UserHeader";
import Footer from "../../common/Components/Footer";

function SellProducts() {
  return (
    <>
      <UserHeader />

      <div className="w-full min-h-screen bg-gray-50">

      
        <div className="w-full h-64 bg-gradient-to-r from-green-500 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
          <h1 className="text-4xl font-bold animation-float">Sell Your Products</h1>
          <p className="text-green-100 text-lg mt-3 max-w-xl animation-float">
            List your crops, tools, tractors or any agriculture-related product and reach thousands of users easily.
          </p>
        </div>

       
        <div className="w-full px-6 md:px-20 mt-12 mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">

            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
              Add Product Details
            </h2>

            <form className="space-y-6">

             
              <div>
                <label className="block text-gray-700 font-medium mb-1">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Category</label>
                <select className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400">
                  <option>Select Category</option>
                  <option>Crops</option>
                  <option>Tools</option>
                  <option>Workers</option>
                  <option>Tractor / Machines</option>
                  <option>Others</option>
                </select>
              </div>

              
              <div>
                <label className="block text-gray-700 font-medium mb-1">Price</label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
                <input
                  type="file"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Submit Product
              </button>

            </form>
          </div>

          

<div className="flex bg-green-600 flex-col justify-center px-2">

  <h2 className="text-3xl ms-7 font-bold text-white mb-4">
    Make Sure
  </h2>

  <p className="text-white ms-7 leading-relaxed text-lg">
    • Your product details are accurate and clear. <br />
    • The image uploaded is real and belongs to the product. <br />
    • The price reflects your product value honestly. <br />
    • Misleading or fake information may lead to rejection. <br />
    • AgriHelp ensures trust between sellers and buyers—help us maintain it.
  </p>

</div>


        </div>

      </div>

      <Footer />
    </>
  );
}

export default SellProducts;
