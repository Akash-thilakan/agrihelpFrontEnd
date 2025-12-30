import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../common/Components/Footer'
import Header from '../Components/Header'
import { clearCartAPI } from '../../services/allAPI';

function PaymentSucces() {
    useEffect(() => {
    const token = sessionStorage.getItem("token");
    const reqHeader = { Authorization: `Bearer ${token}` };

    clearCartAPI(reqHeader);
  }, []);
  return (
    <>
    <Header/>
    <div className='grid grid-cols-2 py-20 px-40 justify-center items-center'>
        <div>
            <h1 className='text-6xl text-blue-700'>Congratulations!!</h1>
            <p className='mt-5 mb-10'>ThakYou for shopping with AgriHelp. Hope you have a good time with us</p>
            <Link to={"/"} className='px-4 py-3 bg-blue-600 text-white hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600'>Explore More Crops</Link>
        </div>
        <div>
            <img className='w-3/4 ms-30' src="https://funtura.in/tvm/wp-content/themes/funtura/assets/images/success.svg" alt="" />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentSucces