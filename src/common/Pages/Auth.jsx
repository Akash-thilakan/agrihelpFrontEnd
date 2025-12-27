import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAPI, registerAPI } from "../../services/allAPI";

function Auth({ register }) {
  const [Eye, setEye] = useState(false);

   const [UserDetails, setUserDetails] = useState({
    username: "",
    role:"",
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const handleRegister=async()=>{
    const {username,role,email,password} = UserDetails
if(!username || !email || !password || !role){
  toast.info("Fill The Form Completely")
} else {
      const result = await registerAPI(UserDetails);
      console.log(result);
      if (result.status == 200) {
        toast.success("Registered Successfully");
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else if (result.status == 404) {
        toast.warning(result.response.data);
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
      } else {
        toast.error("something went wrong");
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
      }
    }   
  }

   const handleLogin = async () => {
    const { email, password } = UserDetails;
    if (!email || !password) {
      toast.info("Fill the Form Completely");
    } else {
      const result = await loginAPI(UserDetails);
      if (result.status == 200) {
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        console.log(result);
        
        toast.success("Login Successfull");
        
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
        
        if(result.data.existingUser.role=="admin"){
            navigate("/adminhome")
          }else if(result.data.existingUser.role=="farmer"){
            navigate("/farmerhome")
          }
          else if(result.data.existingUser.role=="user"){
            navigate("/userhome")
          }
          else{
            navigate("/")
          }
      } else if (result.status == 404) {
        toast.warning(result.response.data);
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
      } else if (result.status == 401) {
        toast.warning(result.response.data);
      } else {
        toast.error("Something Went Wrong");
        setUserDetails({
          username: "",
          email: "",
          password: ""
        });
      }
    }
  };


  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://static.investindia.gov.in/s3fs-public/2022-08/pexels-pixabay-207247.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="p-10">
          <h1 className="text-4xl text-white font-bold text-center">
            AGRI HELP
          </h1>
          <div
            style={{ width: "400px" }}
            className="bg-green-700 text-white p-5 flex flex-col my-5 justify-center items-center"
          >
            <div
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              className="border mb-3 flex justify-center items-center"
            >
              <FaCircleUser className="text-6xl" />
            </div>
            <h1 className="text-2xl">{register ? "Register" : "Login"}</h1>
            <form action="">
              {register && (
                <div className="my-5">
                  <label htmlFor="">Username</label>
                  <input
                  value={UserDetails.username}
                  onChange={(e)=>setUserDetails({...UserDetails,username:e.target.value})}
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                    type="text"
                    placeholder="Username"
                    name=""
                    id=""
                  />
                   <div className="my-5">
                <label className="block text-white">Role</label>
                <select className="bg-white text-black px-5 py-1"
                  required
                  value={UserDetails.role}
                  onChange={(e)=>setUserDetails({...UserDetails,role:e.target.value})}
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="farmer">Farmer</option>
                  <option value="user">User</option>
                </select>
              </div>
                </div>
                
                
              )}
              <div className="my-5">
                <label htmlFor="">Email</label>
                <input
                value={UserDetails.email}
                onChange={(e)=>setUserDetails({...UserDetails,email:e.target.value})}
                  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                  type="text"
                  placeholder="Email"
                  name=""
                  id=""
                />
              </div>
              <div className="my-5 ">
                <label htmlFor="">Password</label>
                <div className="flex">
                  <input
                  value={UserDetails.password}
                  onChange={(e)=>setUserDetails({...UserDetails,password:e.target.value})}
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                    type={Eye ? "text" : "password"}
                    placeholder="password"
                    name=""
                    id=""
                  />

                  {Eye ? (
                    <button
                      type="button"
                      onClick={() => {
                        setEye(!Eye);
                      }}
                      style={{ marginLeft: "-20px" }}
                      className="text-black"
                    >
                      <FaEye />{" "}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setEye(!Eye);
                      }}
                      style={{ marginLeft: "-20px" }}
                      className="text-black"
                    >
                      <FaEyeSlash />{" "}
                    </button>
                  )}
                </div>
              </div>
             
              <div className="mt-2">
                <p className="text-xs text-orange-400">
                  *Never Share Your Password with Others
                </p>
              </div>
              <div className="mt-4">
                {register ? (
                  <button type="button" className="bg-green-400 p-2 w-full rounded" onClick={handleRegister}>
                    Register
                  </button>
                ) : (
                  <button type="button" onClick={handleLogin} className="bg-green-400 p-2 w-full rounded mt-2">
                    Login
                  </button>
                )}
              </div>
              <div>{/* GOogle authentication */}</div>
              <div className="mt-3">
                {register ? (
                  <p>
                    Already a User?{" "}
                    <Link className="text-blue-400" to={"/login"}>
                      Login
                    </Link>
                  </p>
                ) : (
                  <p>
                    Don't Have An Account?{" "}
                    <Link className="text-blue-400" to={"/register"}>
                      Register
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
