import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import Footer from "../../common/Components/Footer";
import { toast } from "react-toastify";
import { addProductAPI } from "../../services/allAPI";

function SellProducts() {

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
    const result = await addProductAPI(reqBody,reqHeader)
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
      <UserHeader />

      <div className="w-full min-h-screen bg-gray-50">

      
        <div className="w-full h-64 bg-gradient-to-r from-green-500 to-green-900 text-white flex flex-col justify-center items-center text-center shadow-lg px-4">
          <h1 className="text-4xl font-bold animation-float">Sell Your Products</h1>
          <p className="text-green-100 text-lg mt-3 max-w-xl animation-float">
            List your tools, tractors or any agriculture-related product and reach thousands of users easily.
          </p>
        </div>

       
        <div className="w-full px-6 md:px-20 mt-12 mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">

            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
              Add Product Details
            </h2>

            <form className="space-y-6">

             
              <div>
                <label className="block text-gray-700 font-medium mb-1">Product Name</label>
                <input
                value={productDetails.productName}
                onChange={(e)=>setProductDetails({...productDetails,productName:e.target.value})}
                  type="text"
                  placeholder="Enter product name"
                  className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Category</label>
                <select onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})} value={productDetails.category} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400">
                  <option>Select Category</option>
                  <option>Tools</option>
                  <option>Fertilizers/Organic Manure</option>
                  <option>Tractor / Machines</option>
                  <option>Others</option>
                </select>
              </div>

              
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

              
              <div>
                <label htmlFor="cropimage" className="block text-gray-700 font-medium mb-2">Upload Image</label>
                <input
                onChange={(e)=>{handleFile(e)}}
                id="cropimage"
                  type="file"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              <button
              onClick={handleAddProduct}
                type="button"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Submit Product
              </button>

            </form>
          </div>

          

<div className="flex bg-green-600 flex-col justify-center px-2">

  <h2 className="text-3xl ms-7 font-bold text-white mb-4">
    Make Sure
  </h2>

  <p className="text-white ms-7 leading-relaxed text-lg">
    • Your product details are accurate and clear. <br />
    • The image uploaded is real and belongs to the product. <br />
    • The price reflects your product value honestly. <br />
    • Misleading or fake information may lead to rejection. <br />
    • AgriHelp ensures trust between sellers and buyers—help us maintain it.
  </p>

</div>


        </div>

      </div>

      <Footer />
    </>
  );
}

export default SellProducts;
