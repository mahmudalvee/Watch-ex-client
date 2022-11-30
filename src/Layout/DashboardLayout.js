import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Loading from "../Pages/Home/Home/Shared/Loading/Loading";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";



const DashboardLayout = () => {
  
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);



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
            
            {
              isAdmin && <>
              <li> <Link to='/dashboard/allsellers'>All Sellers</Link></li>
              <li> <Link to='/dashboard/allbuyers'>ALl Buyers</Link></li>
              <li> <Link to='/dashboard/reporteditems'>Reported Products</Link></li>
              </>
            }

            {
              isBuyer && <>
              <li> <Link to='/dashboard/myorders'>My Orders</Link></li>
              </>
            }

            {
              isSeller && <>
              <li> <Link to='/dashboard/addproduct'>Add Product</Link></li>
              <li> <Link to='/dashboard/myproducts'>My Products</Link></li>
              </>
            }
            
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
