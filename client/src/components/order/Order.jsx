import React, { useState, useEffect } from "react";
import "./order.scss";

const getlocalStorageConfirm = () => {
  let confirm = localStorage.getItem("confirm");

  if (confirm) {
    return JSON.parse(localStorage.getItem("confirm"));
  } else {
    return [];
  }
};

const Order = ({ item }) => {
  const [confirm, setConfirm] = useState(getlocalStorageConfirm);

  useEffect(() => {
    localStorage.setItem("confirm", JSON.stringify(confirm));
  }, []);


  return (
    <div className="order">
      {/* <span className='date'> {new Date(item.createdAt).toLocaleString('de-DE')}</span> */}
      <span className="title">{item.name}</span>
      <span className="title">{item.brand}</span>
      <span className="title">{item.quantity}</span>
      <button
        className="title"
        style={{
          backgroundColor: confirm ? "#1eba49" : "#e9e76c",
        }}
        onClick={() => setConfirm((prev) => !prev)}>
        {confirm ? "Confirm" : "Awaiting"}
      </button>
    </div>
  );
};

export default Order;
