import React, { useState, useContext } from 'react'
import Dashboard from '../../pages/sidebar/SideBar';
import "./login.scss";
import axios from "axios";
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleLogin = async(e) => {
        e.preventDefault()

    
        try {
            // const res = await axios.post("/user/login", {
            const res = await axios.post("https://dashboard-api-marwen.onrender.com/api/user/login", {
                email,
                password
            })
           
            localStorage.setItem("user", JSON.stringify(res))
            console.log(res)
        
            res.data && window.location.replace("/");
            
        } catch (error) {
            console.log(error)
    
            
        }
    
       }



  return (
    <div className='register'>
    <div className="left">
    <Dashboard />

    </div>
    <div className="right">
  <section className="heading">
    {/* <div className="top">
      <h1 className="title">Register to manage your store</h1>
 
    </div> */}
  </section>

  <section className="form" onSubmit={handleLogin}>
    <form>
    
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
   
      <div className="form-group">
        <button className="btn">Login</button>
      </div>
      <Link to="/register">
             <span>if you have an account click here</span>
          </Link>
    </form>

  </section>
</div>
 


    
</div>
  )
}

export default Login