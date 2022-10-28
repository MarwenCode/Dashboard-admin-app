import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import "./dashboard.scss";

const Dashboard = () => {
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
    <div className="dashboard">
      <ul className="sidebar">
        {user ? (
          <Link to="/login" className="link">
            <li className="logout" onClick={logout}>
              Logout
            </li>
          </Link>
        ) : (
          <Link to="/register" className="link">
            <li className="logout">Connexion</li>
          </Link>
        )}

        <Link to="/" className="link">
          <li className="item">Dashboard</li>
        </Link>

        <Link to="/products" className="link">
          <li className="item">Products</li>
        </Link>

        <li className="item">Orders</li>
        <li className="item">Support Tickets</li>
      </ul>
    </div>
  );
};

export default Dashboard;
