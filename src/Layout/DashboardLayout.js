import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li> <Link to='/dashboard'>Dashboard</Link></li>
            <li> <Link to='/dashboard/myorders'>My Orders</Link></li>
            <li> <Link to='/dashboard/allsellers'>All Sellers</Link></li>
            <li> <Link to='/dashboard/allbuyers'>ALl Buyers</Link></li>
            
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
