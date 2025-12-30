import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/Components/Footer'
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import SERVERURL from '../../services/serverURL';
import { deleteProductAPI, getAllCropsAPI } from '../../services/allAPI';
import { toast } from 'react-toastify';

function AdminHome() {
  
    const [allCrops, setAllCrops] = useState([]);
    const [tools, setTools] = useState([]);
  
    const getAllCrops=async()=>{
      const result = await getAllCropsAPI()
      console.log(result);
      setAllCrops(result.data.crops)
      setTools(result.data.tools)
      
    }

    const handleDeleteProduct=async(type,id)=>{
      const token = sessionStorage.getItem("token")
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteProductAPI(type,id,reqHeader)
    if(result.status===200){
      toast.success("Product Deleted Successfully")
      getAllCrops()
    }else{
      toast.error("deletion failed")
    }
    

    }
  useEffect(() => {
  getAllCrops()
  }, []);
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
         <Link to={"/farmers"}> <div className="bg-green-700 bg-opacity-20 backdrop-blur-lg text-white p-6 rounded-xl shadow-xl hover:bg-opacity-30 transition cursor-pointer">
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
     <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-10">

     
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        User & Farmer Uploaded Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

         {/* Card 1 */}
          {allCrops?.map((item)=>(
            <div key={item._id} className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
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
              
             <button onClick={()=>handleDeleteProduct("crop",item._id)} className="ms-35 mt-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <DeleteIcon fontSize="small" />
              </button> 
            </div>
          </div>

          ))}
         
 {/* Card 2 */}
          {tools?.map((item)=>(
            <div key={item._id} className="appear bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
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
             
             <button onClick={()=>handleDeleteProduct("tool",item._id)} className="ms-35 mt-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <DeleteIcon fontSize="small" />
              </button> 
            </div>
          </div>
          ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminHome