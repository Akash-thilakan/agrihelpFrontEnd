import React, { useEffect, useState } from 'react'
import FarmerHeader from '../components/FarmerHeader'
import SearchIcon from "@mui/icons-material/Search";
import Footer from '../../common/Components/Footer'
import { getAllCropsAPI } from '../../services/allAPI';
import SERVERURL from '../../services/serverURL';
import { Link } from 'react-router-dom';

function FarmerHome() {
    const [allCrops, setAllCrops] = useState([]);
    const [tools, setTools] = useState([]);
  
    const getAllCrops=async()=>{
      const result = await getAllCropsAPI()
      console.log(result);
      setAllCrops(result.data.crops)
      setTools(result.data.tools)
      
    }
  useEffect(() => {
  getAllCrops()
  }, []);
  return (
    <>
    <FarmerHeader/>
      <div className="w-full min-h-screen bg-gray-50">

    
      <div className="relative w-full h-[90vh] flex justify-center items-center text-center text-white">

       
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.pexels.com/download/video/10041359/"   // 🔹 replace with your video file
          autoPlay
          loop
          muted
        />

        {/* Dark Overlay */}
       <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl">
             
          <h1 className="text-5xl font-extrabold drop-shadow-lg animation-float">
            Welcome, Farmer
          </h1>

          <p className="text-xl mt-4 text-green-100 font-medium leading-relaxed animation-float">
            You are the backbone of our country.  
            Your hard work feeds millions.  
            We salute your dedication and support you with the best tools and services.
          </p>
        {/* MIDDLE — Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 my-2 w-full">
          <SearchIcon className="text-green-600" />
          <input
            type="text"
            placeholder="Search crops, tools, workers..."
            className="w-full ml-2 outline-none text-black"
          />
        </div>
        </div>
      </div>

      
      <div className="px-6 md:px-20 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">
          Recommended Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          {allCrops?.map((item,index)=>(
            <div key={index} className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src={`${SERVERURL}/imgUploads/${item.uploadImage}`}
              className="w-full h-40 object-cover"
              alt="Tomatoes"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.productName}</h3>
              <p className="text-green-600 font-medium mt-2">{item.price} / {item.unit}</p>
              <Link to={`/farmerviewproduct/crop/${item._id}`}>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button></Link>
            </div>
          </div>

          ))}
           {/* Card 2 */}
          {tools?.map((item,index)=>(
            <div key={index} className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src={`${SERVERURL}/imgUploads/${item.uploadImage}`}

              className="w-full h-40 object-cover"
              alt="Tomatoes"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.productName}</h3>
              <p className="text-green-600 font-medium mt-2">{item.price} / {item.unit}</p>
              <Link to={`/farmerviewproduct/tool/${item._id}`}>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Details
              </button></Link>
            </div>
          </div>

          ))}
        </div>
      </div>

    </div>

    <Footer/>
    
    </>
  )
}

export default FarmerHome