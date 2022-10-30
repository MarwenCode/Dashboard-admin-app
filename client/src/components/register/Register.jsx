import React, { useState } from 'react'
import Dashboard from '../../pages/sidebar/SideBar';
import "./register.scss";
import axios from "axios";
import { Link } from "react-router-dom"

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

 

    const handleRegister = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/user/register", {
                username,
                email,
                password,
                confirmPassword
            });
         
            localStorage.setItem("user", JSON.stringify(res))
            console.log(res)
           

           
            
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
        <div className="top">
          <h1 className="title">Register to manage your store</h1>
     
        </div>
      </section>

      <section className="form" onSubmit={handleRegister}>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={username}
              placeholder="Enter your name"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm  password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn">Sign Up</button>
          </div>
          <Link to="/login">
             <span>if you have an account click here</span>
          </Link>
        </form>
      </section>
    </div>
     


        
    </div>
  )
}

export default Register