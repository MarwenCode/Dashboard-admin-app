
import React, { useState, useContext } from "react";

import { AppContext } from "../../context/context";
import "./alertMessage.scss"

const AlertMessage = () => {
    const { user } = useContext(AppContext);



  if (!user) {
    return (
      <div className="alertMessage">
        <p>Please create an account or login to view content!</p>
      </div>
    );
  }

  return null;
};

export default AlertMessage;
