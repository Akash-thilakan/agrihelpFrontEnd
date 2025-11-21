import React from "react";
import FarmerHeader from "../components/FarmerHeader";
import Footer from "../../common/Components/Footer";

function FarmerPayment() {
  return (
    <>
      <FarmerHeader />

      <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-12">

       
        <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
          Farmer Payment
        </h1>

      
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border">

       
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Farmer Details</h2>
            <p className="text-gray-600 mt-2">Name: <b>Rahul Kumar</b></p>
            <p className="text-gray-600">Village: <b>Thrissur</b></p>
            <p className="text-gray-600">Phone: <b>9876543210</b></p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800">Payment Summary</h2>

            <div className="bg-gray-100 p-5 rounded-xl mt-3">
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Product:</span>
                <span>Organic Tomatoes</span>
              </div>

              <div className="flex justify-between mb-2 text-gray-700">
                <span>Quantity:</span>
                <span>20 kg</span>
              </div>

              <div className="flex justify-between text-lg font-semibold text-green-700 mt-3">
                <span>Total Amount:</span>
                <span>₹ 800</span>
              </div>
            </div>
          </div>

          
          <h2 className="text-xl font-bold text-gray-800 mb-4">Choose Payment Method</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* UPI */}
            <div className="cursor-pointer bg-white border rounded-xl p-5 shadow hover:shadow-lg hover:border-green-600 transition text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MYS6mIe3TZu9E_OaneUr7I-TNm06p9gpTQ&s" />
              <p className="font-semibold text-gray-800">UPI</p>
            </div>

            {/* CARD */}
            <div className="cursor-pointer bg-white border rounded-xl p-5 shadow hover:shadow-lg hover:border-green-600 transition text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJq4SOSBThCjEbPIPPyoH3amllCU5ODB5M5g&s" className="w-12 mx-auto mb-2" />
              <p className="font-semibold text-gray-800">Card Payment</p>
            </div>

            {/* NETBANKING */}
            <div className="cursor-pointer bg-white border rounded-xl p-5 shadow hover:shadow-lg hover:border-green-600 transition text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4WjwUEn4vPau1w_P29JfZa1YcfWAVCCfxw&s" className="w-12 mx-auto mb-2" />
              <p className="font-semibold text-gray-800">Net Banking</p>
            </div>

          </div>

        

          {/* PAY NOW BUTTON */}
          <button className="mt-10 w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            Pay ₹800
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default FarmerPayment;
