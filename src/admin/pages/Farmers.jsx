import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/Components/Footer'
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFarmerAPI, getAllFarmersAPI } from '../../services/allAPI';

function Farmers() {
  const [farmerDetails, setFarmerDetails] = useState([]);
    const token = sessionStorage.getItem("token")
     const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
    const getAllFarmers = async()=>{
      const result = await getAllFarmersAPI(reqHeader)
      setFarmerDetails(result.data)
    }

     const handleDeleteFarmer = async(id)=>{
    await deleteFarmerAPI(id,reqHeader)
    getAllFarmers()
      }
    useEffect(() => {
    getAllFarmers()
      }, []);
  return (
    <>
     <AdminHeader/>
      <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-10">

      
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        Manage Farmers
      </h1>

      
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Pending Approvals
      </h2>

      <div className="space-y-4 mb-10">

   
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between border border-gray-200">
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Rahul Sharma</h3>
            <p className="text-gray-600 text-sm">Farmer • Kerala</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
              <CheckIcon />
            </button>
            <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
              <CloseIcon />
            </button>
          </div>

        </div>

       
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between border border-gray-200">

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Anjali Verma</h3>
            <p className="text-gray-600 text-sm">User • Tamil Nadu</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
              <CheckIcon />
            </button>
            <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
              <CloseIcon />
            </button>
          </div>

        </div>

      </div>

      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Approved Farmers & Users
      </h2> */}

      <div className="space-y-4">

         {farmerDetails?
        farmerDetails.map((item)=>(
          <div key={item._id} className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between border border-gray-200">
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{item.username}</h3>
            <p className="text-gray-600 text-sm">{item.role}</p>
          </div>

          <button onClick={()=>handleDeleteFarmer(item._id)}  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
            <DeleteIcon />
          </button>

        </div>
        ))
        :
        <p>No Users Available...</p>
        }
      </div>

    </div>
    
    <Footer/>
    </>
  )
}

export default Farmers