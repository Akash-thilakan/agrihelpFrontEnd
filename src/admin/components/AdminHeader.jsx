import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function AdminHeader() {
  const navigate =useNavigate()
const handleLogout =()=>{
  sessionStorage.clear()
  navigate("/login")
}
  return (
    <>
      <div className="w-full bg-green-700 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* LEFT — Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-400 rounded-lg"></div>
            <h1 className="text-xl font-bold">Agri Help</h1>
          </div>

    
          {/* RIGHT — Navigation Icons & Logout */}
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/adminhome" className="hover:text-green-300">
              Home
            </Link>
            <Link to="/users" className="hover:text-green-300">
              users
            </Link>

            <Link to="/farmers" className="hover:text-green-300">
              {" "}
              Farmers
            </Link>
           

            <Link to="/adminnews" className="hover:text-green-300">
              AddNews
            </Link>

            <Link to="/adminviewnews" className="hover:text-green-300">
              News
            </Link>

            <Link to="/admintips" className="hover:text-green-300">
              Tips
            </Link>
            
            <Link to="/adminvedios" className="hover:text-green-300">
              Vedios
            </Link>

            <button className="flex items-center space-x-1 hover:text-red-300">
              <LogoutIcon fontSize="small" />
              <span onClick={handleLogout} >Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
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

export default AdminHeader;
