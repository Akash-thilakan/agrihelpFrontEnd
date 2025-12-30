import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/Components/Footer'
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTipAPI, getAllTipsAPI } from '../../services/allAPI';
import { toast } from 'react-toastify';

function AdminTips() {

   const [tips, setTips] = useState([]);
  
    const getTips=async()=>{
      const result = await getAllTipsAPI()
  setTips(result.data)    
    }

    const handleDeleteTip=async(id)=>{
          const token = sessionStorage.getItem("token")
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };
    
        const result = await deleteTipAPI(id,reqHeader)
        if(result.status===200){
          toast.success("Tip Deleted Successfully")
          getTips()
        }else{
          toast.error("deletion failed")
        }
        
    
        }


    
    useEffect(() => {
  getTips()
    }, []);
  return (
    <>
    <AdminHeader/>
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-16">

      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        Agriculture Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Tip Card 1 */}
        {tips?tips.map((item)=>(
          <div key={item._id} className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
          <button onClick={()=>handleDeleteTip(item._id)} className="absolute top-3 right-3 bg-red-600 p-2 rounded-full text-white hover:bg-red-700 z-20">
            <DeleteIcon fontSize="small" />
          </button>

          <img
            src={item.imageUrl}
            className="w-full h-56 object-cover brightness-75"
            alt="Rice Farming"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-sm mt-2">
              {item.description}
            </p>
          </div>
        </div>
        )):
        <p>No tips here...</p>
      }
      </div>
    </div>
     <Footer/>
    </>
  )
}

export default AdminTips