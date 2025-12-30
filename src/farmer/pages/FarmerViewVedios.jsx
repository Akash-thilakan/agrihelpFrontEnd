import React, { useEffect, useState } from "react";
import FarmerHeader from "../components/FarmerHeader";
import Footer from "../../common/Components/Footer";
import { getAllVediosAPI } from "../../services/allAPI";

function FarmerViewVedios() {

  const [vedios, setVedios] = useState([]);

  const getVedios = async()=>{
    const result = await getAllVediosAPI()
    setVedios(result.data)
    
  }
  useEffect(() => {
getVedios()
  }, []);
  return (
    <>
      <FarmerHeader />

      {/* HERO SECTION */}
      <div className="w-full h-64 bg-gradient-to-r from-green-600 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
        <h1 className="text-4xl font-bold">Farming Video Guides</h1>
        <p className="text-green-100 text-lg mt-3 max-w-2xl">
          Learn modern farming techniques, crop care, and tool usage through
          expert video tutorials.
        </p>
      </div>

      {/* VIDEOS SECTION */}
      <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
        <div className="max-w-7xl mx-auto">

          {/* SECTION TITLE */}
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
            Recommended Farming Videos
          </h2>

          {/* VIDEO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* VIDEO CARD */}
            {vedios?
            vedios.map(item=>(
               <div key={item._id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {<iframe
                className="w-full h-56"
                src={item.vedioUrl}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>}

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {item.description}
                </p>
              </div>
            </div>
            ))
            :
            <p>No Vedios Found....</p>
          }
         </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FarmerViewVedios;
