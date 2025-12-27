import React, { useState } from 'react'
import FarmerHeader from '../components/FarmerHeader'
import Footer from '../../common/Components/Footer'
import { addCropAPI } from '../../services/allAPI';
import { toast } from 'react-toastify';

function AddCrops() {
   const [productDetails, setProductDetails] = useState({
      productName:"",
      category:"",
      price:"",
      unit:"",
      description:"",
      uploadImage:[]
    });

      const handleAddProduct=async()=>{
       const {productName,category,price,unit,description,uploadImage} = productDetails
       if(!productName || !category ||!price || !unit || !description ||uploadImage.length===0){
        toast.info("fill the form completely")
        return
       }
       const token = sessionStorage.getItem("token");
    
    if (!token) {
      toast.error("Please login again");
      return;
    }

    
    const reqHeader = {
      Authorization: `Bearer ${token}`
    };
    
    
    
      const reqBody = new FormData()
      for(let key in productDetails){
        if(key!=="uploadImage"){
        reqBody.append(key,productDetails[key])
        }else{
          reqBody.append("uploadImage", uploadImage[0]);
        }
      }
      try{
        const result = await addCropAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status===200){
          toast.success("Product added successfully ")
        }else if(result.status==401){
          toast.warning(result.response.data)
        }else{
          toast.error("error in adding Product")
        }
        
      }catch(error){
        toast.error("something went wrong")
      }
        setProductDetails({
          productName:"",
          category:"",
          price:"", 
          unit:"",
          description:"",
          uploadImage:[]
        })
        
      }


       const handleFile=(e)=>{
    const file = e.target.files[0];

  setProductDetails({
    ...productDetails,
    uploadImage: [file] // single image
  });
  }



  return (
    <>
    <FarmerHeader/>
    <div className="w-full min-h-screen bg-gray-50">

      {/* TOP BANNER */}
      <div className="w-full h-64 bg-gradient-to-r from-green-500 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
        <h1 className="text-4xl font-bold animation-float">Sell Your Crops</h1>
        <p className="text-green-100 text-lg mt-3 max-w-xl">
          List your fresh harvest and fertilizers directly for buyers and markets.
        </p>
      </div>

      {/* GRID SECTION */}
      <div className="w-full px-6 md:px-20 mt-12 mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">

 
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">

          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Add Crop / Fertilizer Details
          </h2>

          <form className="space-y-6">

          
            <div>
              <label className="block text-gray-700 font-medium mb-1">Product Name</label>
              <input
              value={productDetails.productName}
                onChange={(e)=>setProductDetails({...productDetails,productName:e.target.value})}
                type="text"
                placeholder="e.g., Wheat, Paddy, Organic Urea"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Category</label>
              <select onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})} value={productDetails.category} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400">
                <option>Select Category</option>
                <option>Crops</option>
                <option>Seeds</option>
                <option>Grains</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Price</label>
              <input
               value={productDetails.price}
                onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})}
                type="text"
                placeholder="Enter price"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Unit</label>
              <input
               value={productDetails.unit}
              onChange={(e)=>setProductDetails({...productDetails,unit:e.target.value})}
                type="text"
                placeholder="Enter unit"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {/* description */}
             <div>
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <input
               value={productDetails.description}
              onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})}
                type="text"
                placeholder="Description"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

           

            {/* Upload Image */}
           <div>
                <label htmlFor="cropimage" className="block text-gray-700 font-medium mb-2">Upload Image</label>
                <input
                onChange={(e)=>{handleFile(e)}}
                id="cropimage"
                  type="file"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

            {/* Submit */}
            <button
             onClick={handleAddProduct}
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Submit Crop
            </button>

          </form>
        </div>

        <div className="flex flex-col justify-center px-2">

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Make Sure
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            • Enter the correct crop name and variety. <br />
            • Use clear images of your harvest to attract buyers. <br />
            • Mention accurate price and quantity. <br />
            • Crops must be fresh and free from chemical contamination. <br />
            • For fertilizers, ensure authenticity and permitted usage. <br />
            • Misleading posts may be removed for safety reasons.  
          </p>

        </div>

      </div>

    </div>
<Footer/>
    </>
  )
}

export default AddCrops