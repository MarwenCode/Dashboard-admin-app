import React, { useState, useReducer, useEffect } from "react";


export const AppContext = React.createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null,
 
};



export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);



     //localStorahe user
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null)
  };


    return (
        <AppContext.Provider
        value={{ user,logout

        }}>
        {children}
      </AppContext.Provider>




    )
}