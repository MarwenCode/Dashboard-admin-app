import React, { useState, useEffect, useRef, useContext } from "react";
import SideBar from "../../pages/sidebar/SideBar";
import Chart from "../chart/Chart";
import "./dashboard.scss";
import { HiChartBar } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { bestSellers } from "./bestSellers";
import { motion } from "framer-motion";
import { AppContext } from "../../context/context";
import axios from "axios";

function Dashboard() {
  const {user, getUser} = useContext(AppContext);


  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  


  
 console.log(getUser)

  return (
    <div className="dashboard">
      <SideBar />
     
      <div className="section-dashboard ">
        <div className="top">
        <h3 className="username"> Hello {user.data.username}</h3>
        <h2 className="title">Sales statistics</h2>
       
        
          <h2 className="profite">
        
            450$ <HiChartBar />
          </h2>
          <h2 className="orders">
        
            <FaShoppingCart /> 50/Day
          </h2>
        </div>
        <div className="center">
          <Chart />
        </div>

        <div className="down">
        <div className="bestSellers">
      
      <motion.div className="carousel">
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}>
          {bestSellers.map((best) => (
            <motion.div className="item">
            
              <img className="img" src={best.image} />
              <div className="down">
              {/* <span className="name">{best.name}</span> */}
              {/* <Rating  className='rating'/> */}

              </div>
             
          
            </motion.div>
          ))}
        </motion.div>
        {/* <div className="center">
              <span className="brand">{best.brand}</span>
              <span className="price">{best.price}</span>
            </div> */}
      </motion.div>
    </div>
        </div>


      </div>
    </div>
  );
}

export default Dashboard;
