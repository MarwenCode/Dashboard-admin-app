import React, { useState, useReducer, useEffect } from "react";


export const AppContext = React.createContext();



export const AppProvider = ({ children }) => {
  const [user, setUser] = useState()


     //localStorahe user
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);


    return (
        <AppContext.Provider
        value={{ 

        }}>
        {children}
      </AppContext.Provider>




    )
}