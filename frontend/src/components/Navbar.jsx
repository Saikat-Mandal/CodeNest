import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetUserId } from "../hooks/useGetUserId";
import axios from "axios";
function Navbar() {
  const userId = useGetUserId()
  const navigate = useNavigate()
  // logout function 
  const onLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/auth/logout", { withCredentials: true })
      alert(response.data.message)
      localStorage.clear()
      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="md:flex items-center justify-between py-6 px-6">
      <div className=" md:flex items-center text-white ">
        <NavLink to="/" className=" tracking-widest pr-20">CODENEST</NavLink>
        {
          userId ? (
            <ul className="md:flex items-center gap-6 text-gray-300">

              <NavLink to="/working">How it works</NavLink>
              <NavLink to="/docs">Docs</NavLink>
              <NavLink to="/contribute">Contribute</NavLink>
              <NavLink to="/support">Support</NavLink>
              <NavLink to="/about">About</NavLink>
            </ul>
          ) : (
            <ul className="md:flex items-center gap-6 text-gray-300">

              <NavLink className=" hover:text-teal-400" to="/working">How it works</NavLink>
              <NavLink className=" hover:text-teal-400" to="/docs">Docs</NavLink>
              <NavLink className=" hover:text-teal-400" to="/contribute">Contribute</NavLink>
              <NavLink className=" hover:text-teal-400" to="/support">Support</NavLink>
              <NavLink className=" hover:text-teal-400" to="/about">About</NavLink>
              <NavLink className=" hover:text-teal-400" to="/login">Login</NavLink>

            </ul>
          )
        }
      </div>
      <div className=" flex gap-3">
        {userId && <button onClick={onLogout} className="border-2 text-white border-white rounded-md px-4 py-1">Logout</button>}
        {userId &&
          <NavLink
            to="/join"
            className=" border-2 text-white border-white rounded-md px-4 py-1"
          >
            Try for free
          </NavLink>
        }
      </div>
    </div>
  );
}

export default Navbar;
