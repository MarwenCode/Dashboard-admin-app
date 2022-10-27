import React from 'react';
import {Link } from "react-router-dom"
import "./dashboard.scss"

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <ul className='sidebar'>
          <Link to="/register" className='link'>
          <li className='item'>Dashboard</li>
          </Link>
          
            <li className='item'>Products</li>
            <li className='item'>Orders</li>
            <li className='item'>Support Tickets</li>


        </ul>

        

    </div>
  )
}

export default Dashboard