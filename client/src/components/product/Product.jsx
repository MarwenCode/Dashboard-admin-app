import React from 'react';
import "./product.scss";
import {FaTrash } from "react-icons/fa"
import axios from 'axios';

const Product = ({product}) => {

  

  //delete product
  const deleteProduct = async(productId) => {
    try {
      // await axios.delete(`/product/${productId}`, {
      await axios.delete(`https://dashboard-api-marwen.onrender.com/api/product/${productId}`, {
        data: {productId: product._id }
      });
      window.location.replace("/products");
      
    } catch (error) {
      console.log(error)
      
    }

  }




  return (
    <div className='product'>
      <div className="items">
      <span className='item'>{product._id} </span>
        <span className='item'>{product.title} </span>
        <span className='item'>{product.quantity} </span>
        <span className='item'>{product.brand} </span>
        <span className='item'>{product.status}   </span> 

      </div>
       
        <div className="delete">
        <FaTrash onClick={() =>deleteProduct(product._id)} /> 
        </div> 
       
       
       
    </div>
  )
}

export default Product