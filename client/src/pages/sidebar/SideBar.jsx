import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import { MdExpandMore } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdAddTask, MdOutlineSell, MdHomeMax } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { GrHomeOption, GrProductHunt } from "react-icons/gr";
import "./sidebar.scss";

const SideBar = () => {
  const { user, logout } = useContext(AppContext);

  const [details, setDetails] = useState(false)
 
  

 
 



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
             <CiLogout />         Logout
            </li>
          </Link>
        ) : (
          <Link to="/register" className="link">
            <li className="logout">Register</li>
          </Link>
        )}
        <Link to="/dashboard" className="link">
          <li className="item"> <RiHome6Line /> Dashboard </li>
      
        </Link>

        {user && (

          <>
          <Link to="/products" className="link">
          <li className="item"> <GrProductHunt />  Products</li>
        </Link>
        <Link to="/item" className="link">
          <li className="item"> <MdAddTask/>  Add item</li>
        </Link>
         
         <Link to="/orders" className="link">
         <li className="item"> <MdOutlineSell />  Orders</li>
         </Link>
     
         <Link to="/tickets" className="link">
         <li className="item" onClick={() => setDetails(!details)} > 
         <summary  >  Support Tickets <MdExpandMore /> </summary> 
         {details && 

         <Link  to="/addTicket" className="link" >
           <span> <AiFillPlusCircle /> add Ticket</span>
         </Link>
         
       
         
         }
        
         </li>
         </Link>
          </>




        )}

        

        
      
      
      </ul>
    </div>
  );
};

export default SideBar;
