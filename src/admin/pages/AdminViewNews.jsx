import React, { useEffect, useState } from 'react'
import Footer from '../../common/Components/Footer'
import { deleteNewsAPI, getAllNewsAPI } from '../../services/allAPI';
import DeleteIcon from "@mui/icons-material/Delete";
import AdminHeader from '../components/AdminHeader';
import { toast } from 'react-toastify';

function AdminViewNews() {
   const [news, setNews] = useState([]);
    
      const getNews=async()=>{
        const result = await getAllNewsAPI() 
      setNews(result.data)
      }
       const handleDeleteNews=async(id)=>{
                const token = sessionStorage.getItem("token")
              const reqHeader = {
                Authorization: `Bearer ${token}`,
              };        
              const result = await deleteNewsAPI(id,reqHeader)
              if(result.status===200){
                toast.success("News Deleted Successfully")
                getNews()
              }else{
                toast.error("deletion failed")
              }       
              } 

      useEffect(() => {
      getNews()
      }, []);
  return (
    <>
    <AdminHeader/>
     <div className="w-full py-20 px-6 md:px-20 bg-gray-50">

      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Latest News & Updates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* News Card 1 */}
        {news? news.map((item)=>(
<div key={item._id} className="bg-white p-6 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200 rotate-[-1deg]">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.headline}</h3>
          <p className="text-gray-600 mb-4">
            {item.description}
          </p>
          <p className='text-gray-600 mb-4'>{item.date}</p>
          <button onClick={()=>handleDeleteNews(item._id)} className="bg-red-700 text-white p-2 px-60 hover:bg-red-700 transition">
            <DeleteIcon />
          </button>
        </div>
        )):
        <p>No news available....</p>
        }
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default AdminViewNews