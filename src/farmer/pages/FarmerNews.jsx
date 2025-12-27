import React, { useEffect, useState } from 'react'
import FarmerHeader from '../components/FarmerHeader'
import Footer from '../../common/Components/Footer'
import { getAllNewsAPI } from '../../services/allAPI';

function FarmerNews() {
   const [news, setNews] = useState([]);
    
      const getNews=async()=>{
        const result = await getAllNewsAPI() 
      setNews(result.data)
      }
    
      useEffect(() => {
      getNews()
      }, []);
  return (
    <>
    <FarmerHeader/>
     <div className="w-full py-20 px-6 md:px-20 bg-gray-50">

      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Latest News & Updates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* News Card 1 */}
        {news? news.map((item,index)=>(
<div key={index} className="bg-white p-6 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200 rotate-[-1deg]">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.headline}</h3>
          <p className="text-gray-600 mb-4">
            {item.description}
          </p>
          <p className='text-gray-600 mb-4'>{item.date}</p>
          <button className="text-green-700 font-semibold hover:underline">Read More →</button>
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

export default FarmerNews