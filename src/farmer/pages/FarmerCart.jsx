import React, { useEffect, useState } from "react";
import Footer from "../../common/Components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FarmerHeader from "../components/FarmerHeader";
import { Link } from "react-router-dom";
import { CartQuantityAPI, getCartAPI, makePaymentAPI } from "../../services/allAPI";
import SERVERURL from "../../services/serverURL";

function FarmerCart() {
  const [cartItems, setCartItems] = useState([]);

  const token = sessionStorage.getItem("token");
  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  const handleGetCart = async () => {
    const result = await getCartAPI(reqHeader);
    setCartItems(result.data);
  };

  const handleIncrement = async (cartId) => {
    await CartQuantityAPI({ cartId, action: "increment" }, reqHeader);
    handleGetCart();
  };

  const handleDecrement = async (cartId) => {
    await CartQuantityAPI({ cartId, action: "decrement" }, reqHeader);
    handleGetCart();
  };
  const handlePurchase = async () => {
    try {
      const result = await makePaymentAPI(reqHeader);
      window.location.href = result.data.url;
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    }
  };

  useEffect(() => {
    handleGetCart();
  }, []);

  const totalPrice = cartItems?.reduce(
    (sum, item) => sum + item.quantity * item.productId.price,
    0
  );

  return (
    <>
      <FarmerHeader />
      <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Your Cart
        </h1>

        {/* CART LIST */}
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-6">
                <img
                  src={`${SERVERURL}/imgUploads/${item.productId.uploadImage}`}
                  className="w-24 h-24 object-cover rounded-lg"
                  alt={item.productId.productName}
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.productId.productName}
                  </h2>
                  <p className="text-green-600 font-medium mt-1">
                    {item.productId.price} / {item.productId.unit}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="bg-green-600 text-white p-2 rounded-full"
                  >
                    <RemoveIcon fontSize="small" />
                  </button>
                  <span className="font-semibold text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="bg-green-600 text-white p-2 rounded-full"
                  >
                    <AddIcon fontSize="small" />
                  </button>
                </div>
                {/* Item Total */}
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    ₹ {item.quantity * item.productId.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Items Added..</p>
        )}

        {/* TOTAL + ORDER BUTTON */}
        <div className="bg-white shadow-xl rounded-xl p-6 mt-10 max-w-xl mx-auto">
          <div className="flex justify-between text-xl font-bold text-gray-800 mb-4">
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            onClick={handlePurchase}
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FarmerCart;
