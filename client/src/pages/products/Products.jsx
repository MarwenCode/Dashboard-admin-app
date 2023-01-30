import axios from 'axios'
import React, { useState, useEffect, useContext} from 'react'
import Dashboard from '../sidebar/SideBar';
import Product from '../../components/product/Product';
import "./products.scss"

const Products = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async() => {
      // const res = await axios.get("/product")
      const res = await axios.get("https://dashboard-api-marwen.onrender.com/api/product")
      console.log(res)
      setProducts(res.data)
    }

    fetchProducts()
  },[])


  return (
    <div className='products'>
      <Dashboard />
      <div className="products-section">
        <div className="products-heading">
        <div>ID</div>
          <div>Product</div>
          <div>Quantity</div>
          <div>Brand</div>
          <div>Status</div>


        </div>
  


        {products.map((product) => (

          <Product product={product}    />


        ))}

      </div>
      
    </div>
  )
}

export default Products