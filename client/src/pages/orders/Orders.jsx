import React from 'react';
import { data } from "./data";
import Order from '../../components/order/Order';
import "./orders.scss"
import SideBar from '../sidebar/SideBar';

const Orders = () => {
  return (
    <div className='orders'>
        <SideBar />
      
    <div className="orders-section">
    <div className='order'>
      <div className='order-headings'>
        <div>Product</div>
        <div>Brand</div>
        <div>Quantity</div>
        <div>Status</div>
       
      </div>
      {data.map((item) => (
            <Order     key={item.id} item={item} />
          ))}
     
    </div>


    </div>
    
  </div>
  )
}

export default Orders