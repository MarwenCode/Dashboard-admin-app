import React from 'react';
import { data } from "./data";
import Order from '../../components/order/Order';
import "./orders.scss"
import SideBar from '../sidebar/SideBar';
import { AppContext } from '../../context/context';
import { useContext } from 'react';

const Orders = () => {
  const {products } = useContext(AppContext)
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
      {products.map((item) => (
            <Order     key={item.id} item={item} status={item.status} />
          ))}
     
    </div>


    </div>
    
  </div>
  )
}

export default Orders