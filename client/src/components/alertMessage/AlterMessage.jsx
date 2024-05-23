
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/context";
import "./alertMessage.scss"

const AlertMessage = () => {
    const { user } = useContext(AppContext);



  if (!user) {
    return (
      <div className="alertMessage">
        <p>Please create an account or login to view content!</p>
        <Link to='/register'>
        
        <button>Click here </button>

        </Link>
      </div>
    );
  }

  return null;
};

export default AlertMessage;
