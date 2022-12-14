import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../assests/navLogo.png";
import { AuthContext } from "../../../../../contexts/AuthProvider";

const Navbar = () => {
  const {user, logOut}= useContext(AuthContext);

  const handleLogOut =() =>{
    logOut()
    .then(() => {})
    .catch(err => console.log(err));
  }

  const menuItems = (
    <>
        <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/blog'>Blogs</Link>
      </li>
      { user?.uid ?
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      :
        <></>
      }
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img style={{ width: "12rem" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
      </div>
      
      <div className="navbar-end">
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          
        { user?.uid ?
        <button onClick={handleLogOut} className="btn bg-red-600 btn-xs btn-md btn glass text-white">Logout</button> 
        :
        <Link to='/login' className="btn bg-yellow-400 btn-xs btn-md btn glass text-secondary">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
