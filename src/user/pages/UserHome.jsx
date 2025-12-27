import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import Footer from '../../common/Components/Footer'
import { getAllCropsAPI } from '../../services/allAPI'
import { Link } from 'react-router-dom';
import SERVERURL from '../../services/serverURL';

function UserHome() {

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
    <UserHeader/>
    
     <div className="w-full min-h-screen bg-gray-50">

      
      <div className="w-full h-60 bg-gradient-to-r from-green-500 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg">
        <h1 className="text-4xl font-bold animation-float">Welcome, User 👋</h1>
        <p className="text-lg mt-2 text-green-100 animation-float">
            Explore , tools, tractors, and more!
        </p>
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
              <Link to={`/userviewproduct/crop/${item._id}`}>
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
              <Link to={`/userviewproduct/tool/${item._id}`}>
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

export default UserHome