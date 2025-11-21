import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Auth({register}) {
  const [Eye, setEye] = useState(false);
 


  
 
 
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://static.investindia.gov.in/s3fs-public/2022-08/pexels-pixabay-207247.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="p-10">
          <h1 className="text-4xl text-white font-bold text-center">AGRI HELP</h1>
          <div style={{width:"400px"}} className="bg-green-700 text-white p-5 flex flex-col my-5 justify-center items-center"> 
            <div style={{width:"100px", height:"100px", borderRadius:"50%"}} className="border mb-3 flex justify-center items-center">
              <FaCircleUser className="text-6xl" />
            </div>
            <h1 className="text-2xl">{register? "Register":"Login"}</h1>
            <form action="">
              {register && <div className="my-5">
                <label htmlFor="">Username</label>
                <input  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black" type="text" placeholder="Username" name="" id="" />
              </div>}
              <div className="my-5">
                <label htmlFor="">Email</label>
                <input   className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black" type="text" placeholder="Email" name="" id="" />
              </div>
              <div className="my-5 ">
                <label htmlFor="">Password</label>
                <div className="flex">
                  <input className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black" type={Eye?"text":"password"}placeholder="password"  name="" id="" />
                
                {Eye ? <button type="button" onClick={()=>{setEye(!Eye)}} style={{marginLeft:"-20px"}} className="text-black"><FaEye/> </button>
                :
                <button type="button" onClick={()=>{setEye(!Eye)}}  style={{marginLeft:"-20px"}} className="text-black"><FaEyeSlash/> </button>}
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xs text-orange-400">*Never Share Your Password with Others</p>
              </div>
              <div className="mt-4">
                {register ? <button className="bg-green-400 p-2 w-full rounded">Register</button>
                :
                <button className="bg-green-400 p-2 w-full rounded mt-2">Login</button>}
              </div>
              <div>
                {/* GOogle authentication */}
              </div>
              <div className="mt-3">
                {register ? <p>Already a User?  <Link className="text-blue-400" to={"/login"}>Login</Link></p>
                :
                <p>Don't Have An Account? <Link className="text-blue-400" to={"/register"}>Register</Link></p>}
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;



