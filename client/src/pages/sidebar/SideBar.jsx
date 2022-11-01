import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import "./sidebar.scss";

const SideBar = () => {
  const { user, logout } = useContext(AppContext);
  



//   const handleLogout = async() => {
  

//     // localStorage.clear()
//     // window.location.replace("/register")

//     try {
//      await axios.delete("user/logout")
//      window.location.replace("/register")
      
//     } catch (error) {
//       console.log(error)
//     }

// }
  return (
    <div className="sideBar">
      <ul className="section">
        {user ? (
          <Link to="/login" className="link">
            <li className="logout" onClick={logout}>
              Logout
            </li>
          </Link>
        ) : (
          <Link to="/register" className="link">
            <li className="logout">Login</li>
          </Link>
        )}

        <Link to="/dashboard" className="link">
          <li className="item">Dashboard</li>
        </Link>

        <Link to="/products" className="link">
          <li className="item">Products</li>
        </Link>
        <Link to="/item" className="link">
          <li className="item">Add item</li>
        </Link>
         
         <Link to="/orders" className="link">
         <li className="item">Orders</li>
         </Link>
     
         <Link to="/tickets" className="link">
         <li className="item">Support Tickets</li>
         </Link>
      
      
      </ul>
    </div>
  );
};

export default SideBar;
