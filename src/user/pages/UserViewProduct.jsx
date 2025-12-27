import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import Footer from "../../common/Components/Footer";
import { AddToCartAPI, getAcropAPI, getAToolAPI } from "../../services/allAPI";
import { useParams } from "react-router-dom";
import SERVERURL from "../../services/serverURL";
import { toast } from "react-toastify";

function UserViewProduct() {
  const [cropData, setCropData] = useState(null);

  const { id, type } = useParams();
  const getAcrop = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try {
      let result;
      if (type === "crop") {
        result = await getAcropAPI(id, reqHeader);
      } else if (type === "tool") {
        result = await getAToolAPI(id, reqHeader);
      }
      setCropData(result.data);
      console.log("TOKEN:", token);
    } catch (error) {
      console.log(error);
    }
  };


  const handleAddToCart = async()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const reqBody = {
      productId:cropData._id,
      productType:type
    }
    console.log(reqBody);
    try{
      const result = await AddToCartAPI(reqBody,reqHeader)
      if(result.status==200){
        toast.success("Added to cart 🛒")
      }
    }catch(error){
      toast.error("failed to add to cart")
      console.log(error);
      
    }
    
  }

  useEffect(() => {
    getAcrop();
  }, [id]);
  useEffect(() => {
    console.log("UPDATED cropData:", cropData);
  }, [cropData]);

  return (
    <>
      <UserHeader />

      <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {cropData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src={`${SERVERURL}/imgUploads/${cropData.uploadImage}`}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800">
                  {cropData?.productName}
                </h1>
                <p className="text-green-600 text-2xl font-semibold mt-4">
                  {cropData?.price}{" "}
                  <span className="text-sm text-gray-500">
                    / {cropData?.unit}
                  </span>
                </p>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  {cropData?.description}
                </p>
                <div className="mt-6 space-y-2 text-gray-700">
                  <p>✔ 100% Organic</p>
                  <p>✔ High Germination Rate</p>
                  <p>✔ Suitable for All Seasons</p>
                  <p>✔ Trusted by Farmers</p>
                </div>
                <div className="mt-8 flex gap-4">
                  <button onClick={handleAddToCart} className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* EXTRA INFO */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Product Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              {cropData&& <div className="bg-gray-100 p-4 rounded-xl">
                <p className="font-semibold">Category</p>
                <p>{cropData.category}</p>
              </div>}

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="font-semibold">Usage</p>
                <p>Farming / Agriculture</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="font-semibold">Delivery</p>
                <p>Within 3–5 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserViewProduct;
