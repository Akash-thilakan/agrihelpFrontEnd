import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../common/Components/Footer'
import Header from '../Components/Header'


function PaymentError() {
  return (
    <>
    <Header/>
    <div className='grid grid-cols-2 py-20 px-40 justify-center items-center'>
        <div>
            <h1 className='text-6xl text-red-700'>Sorry Your Payment was unsuccessfull</h1>
            <p className='mt-5 mb-10 text-2xl text-red-700'>We apologise for the inconvienience caused.</p>
            <Link to={"/"} className='px-4 py-3 bg-blue-600 text-white hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600'>Explore More crops</Link>
        </div>
        <div>
            <img className='w-3/4 ms-30' src="https://media.licdn.com/dms/image/v2/C5112AQGiR7AdalYNjg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1582176281444?e=2147483647&v=beta&t=KbpvWM0SaQqnLiMtyKfvGLj9Ta1YugKhz9Y-LN1uS2A" alt="" />
        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default PaymentError