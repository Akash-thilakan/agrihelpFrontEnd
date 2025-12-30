import React, { useState } from 'react'
import FarmerHeader from '../components/FarmerHeader'
import Footer from '../../common/Components/Footer'
import { addTipAPI } from '../../services/allAPI';
import { toast } from 'react-toastify';

function AddTips() {
  const [tipData, setTipData] = useState({
    title:"",
    description:"",
    imageUrl:"",
  });

  const handleAddTip = async()=>{
    console.log(tipData);
    try{
      const result = await addTipAPI(tipData)
      console.log(result);
      if(result.status===200){
          toast.success("Tip added successfully ")
           setTipData({
      title:"",
      description:"",
      imageUrl:"",
    })
      }else if(result.status==401){
          toast.warning(result.response.data)
      }else{
          toast.error("error in adding Tip")
      }
      
    }catch(error){
      toast.error("something went wrong")
      
    }
   
  }

  return (
    <>
    <FarmerHeader/>
     <div className="w-full min-h-screen bg-gray-50">

      <div className="w-full h-64 bg-gradient-to-r from-green-600 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
        <h1 className="text-4xl font-bold animation-float">Share Your Farming Wisdom</h1>
        <p className="text-green-100 text-lg mt-3 max-w-2xl">
          Farmers know the fields better than anyone. Share your valuable tips to guide others and help build a stronger farming community.
        </p>
      </div>

   
      <div className="w-full flex justify-center px-6 md:px-20 mt-12 mb-16">
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-2xl">

          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Add New Farming Tip
          </h2>

          <form className="space-y-6">

          
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Tip Title
              </label>
              <input
              value={tipData.title}
               onChange={(e)=>setTipData({...tipData,title:e.target.value})}
                type="text"
                placeholder="e.g., Best Time to Water Your Crops"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Image
              </label>
              <input
              value={tipData.imageUrl}
              onChange={(e)=>setTipData({...tipData,imageUrl:e.target.value})}
                type="text"
                placeholder="Place Your Image Url Here.."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

         
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
              value={tipData.description}
              onChange={(e)=>setTipData({...tipData,description:e.target.value})}
                rows="5"
                placeholder="Explain the tip in detail so other farmers can benefit..."
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
            onClick={handleAddTip}
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Publish Tip
            </button>

          </form>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default AddTips