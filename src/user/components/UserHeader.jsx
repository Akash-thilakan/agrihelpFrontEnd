import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function UserHeader() {
  return (
    <>
    <div className="w-full bg-green-700 text-white py-4 px-6 shadow-lg sticky top-0 z-50">

      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-400 rounded-lg"></div>
          <h1 className="text-xl font-bold">Agri Help</h1>
        </div>


      
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-1/3">
          <SearchIcon className="text-green-600" />
          <input
            type="text"
            placeholder="Search crops, tools, workers..."
            className="w-full ml-2 outline-none text-black"
          />
        </div>


        <div className="flex items-center space-x-6 text-sm">

           <Link to="/userhome" className="hover:text-green-300">Home</Link>


          <Link to="/sellproducts" className="hover:text-green-300">Sell Products</Link>

          <Link to="/usernews" className="hover:text-green-300">News</Link>

          <Link to="/usertips" className="hover:text-green-300">Tips</Link>

          <Link to="/usercart">
            <ShoppingCartOutlinedIcon className="hover:text-green-300 cursor-pointer" />
          </Link>

          <button className="flex items-center space-x-1 hover:text-red-300">
            <LogoutIcon fontSize="small" />
            <span>Logout</span>
          </button>

        </div>

      </div>


      
      <div className="md:hidden mt-3">
        <div className="flex items-center bg-white rounded-full px-4 py-2">
          <SearchIcon className="text-green-600" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full ml-2 outline-none text-black"
          />
        </div>
      </div>

    </div>
    
    </>
    
  );
}

export default UserHeader;
