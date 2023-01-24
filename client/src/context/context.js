import React, { useState, useReducer, useEffect } from "react";

import axios from "axios";


export const AppContext = React.createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null,
 
};

// console.log(initialState.user.data);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [modalOpen, setModalOpen] = useState(false)


  // const [getUser, setgetUser] = useState("")
  // useEffect(() => {
  //    const fetchUser = async () => {
  //     const res = await axios.get("/user")
   
  //     // setgetUser(res.data)
  //     setUser(res.data)
  //     console.log(res)
  //    }

  //    fetchUser()
  // }, [])

  // console.log(getUser)
  // console.log(user.data)

  // get products : 
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async() => {
      const res = await axios.get("/product")
      console.log(res)
      setProducts(res.data)
    }

    fetchProducts()
  },[])

 
 
    
     //localStorahe user
    //  useEffect(() => {
    //   localStorage.setItem("user", JSON.stringify(user.user));
    // }, [user.user]);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null)
  };


    return (
        <AppContext.Provider
        value={{ user:initialState.user,
          
          modalOpen, setModalOpen,products, setProducts,
         
          
          
        logout

        }}>
        {children}
      </AppContext.Provider>




    )
}


