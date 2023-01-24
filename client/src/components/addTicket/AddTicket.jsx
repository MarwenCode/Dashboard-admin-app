import React, {useState, useContext} from 'react';
import SideBar from '../../pages/sidebar/SideBar';
import "./addticket.scss";
import axios from 'axios';
import { AppContext } from '../../context/context';

const AddTicket = () => {
    const { user, getUser } = useContext(AppContext);
    const [title, setTitle]= useState("")
    const [product, setProduct]= useState("")
    const [description, setDescription]= useState("")
    const [status, setStatus]= useState("")

    console.log(user);
    //add ticket
    const addTicket = async(e) => {
        e.preventDefault();
        const newTicket = {
            userId:user._id,
            username: user.username,
            title,
            product,
            description,
            status,
         
        }

        try {
            const res =  axios.post("/ticket", newTicket);
            console.log(res.data)
            window.location.replace("/tickets");
            
        } catch (error) {
            console.log(error)
            
        }
        addTicket()


    }
    console.log(user)


  return (
    <>
     <SideBar />
     <div className='addticket'>
       
        <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Title  </label>
          <input type='text' className='form-control'
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
          
          />
        </div>

        <form >
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='iPhone'>iPhone</option>
              <option value='Samsung'>Samsung</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
          <div className='form-group'>
          <label htmlFor='name'>Status  </label>
          <select type='text' className='form-control'
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          >
             <option value='new'>new</option>
              <option value='Open'>Open</option>
              <option value='Closed'>Closed</option>
           


          </select>
        </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn-block' onClick={(e) => addTicket(e)}  >Submit</button>
          </div>
        </form>
      </section>
    </div>
    
    
    
    </>
   
  )
}

export default AddTicket