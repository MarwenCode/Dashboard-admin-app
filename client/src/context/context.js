import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";


export const AppContext = React.createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null,
 
};



export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const [modalOpen, setModalOpen] = useState(false)


  const [getUser, setgetUser] = useState("")
  useEffect(() => {
     const fetchUser = async () => {
      const res = await axios.get("/user")
   
      setgetUser(res.data)
      console.log(res)
     }

     fetchUser()
  }, [])

 
 
    
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
        value={{user,getUser,
          modalOpen, setModalOpen,
         
          
          
        logout

        }}>
        {children}
      </AppContext.Provider>




    )
}


