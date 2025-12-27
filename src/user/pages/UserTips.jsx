import React, { useEffect, useState } from 'react'
import Footer from '../../common/Components/Footer'
import UserHeader from '../components/UserHeader'
import { getAllTipsAPI } from '../../services/allAPI';

function UserTips() { 

  const [tips, setTips] = useState([]);

  const getTips=async()=>{
    const result = await getAllTipsAPI()
setTips(result.data)    
  }
  useEffect(() => {
getTips()
  }, []);

  return (
    <>
    <UserHeader/>
     <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-16">

      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        Agriculture Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Tip Card 1 */}
        {tips?tips.map((item,index)=>(
          <div key={index} className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
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

export default UserTips