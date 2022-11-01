import React, {useState, useEffect}from 'react'
import SideBar from '../../pages/sidebar/SideBar';
import axios from 'axios';
import "./item.scss"

const Item = () => {
  

    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
   
    
    // const [item, setItem] = useState([])

   

  //add an item
  const addItem = async(e) => {
    e.preventDefault()
  

    const newItem = {
      brand,
      quantity,
      status,
      title,
      price,
      desc,
      
    }

    try {
      const res = await axios.post("/product", newItem);
     
      console.log(res.data)
      window.location.replace("/products");

      
    } catch (error) {
      console.log(error);
      
    }
    addItem()

  }



  return (
    <div className='item'>
        <SideBar />
        <div className="item-section">
        <form  >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              placeholder="add item title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              value={brand}
              placeholder="add item brand"
              required
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              value={desc}
              placeholder="add item description"
              required
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="brand"
              name="brand"
              value={price}
              placeholder="add item price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={quantity}
              placeholder="add item quantity"
              required
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input list="data"  id="status" type="text"
           
              className="form-control"
           
              placeholder="add item status"
              required
              onChange={(e) => setStatus(e.target.value)}
            />
            <datalist id="data">
                <option value="out of delevry"></option>
                <option value="canceled"></option>
                <option value="purchase"></option>
                <option value="store"></option>


            </datalist>
          </div>
          <div className="form-group">
            <button className="btn"  onClick={(e) =>addItem(e)} >Add</button>
          </div>
       
        </form>

        </div>

    </div>
  )
}

export default Item 
