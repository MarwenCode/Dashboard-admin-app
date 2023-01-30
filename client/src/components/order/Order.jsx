// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "./order.scss";

// // const getlocalStorageConfirm = () => {
// //   let confirm = localStorage.getItem("confirm");

// //   if (confirm) {
// //     return JSON.parse(localStorage.getItem("confirm"));
// //   } else {
// //     return [];
// //   }
// // };

// const Order = ({ item, status }) => {
//   // const [confirm, setConfirm] = useState(getlocalStorageConfirm());
//   // const status = ["confirm"]
//   const [newStatus, setNewStatus] = useState();
//   // const [confirm, setConfirm] = useState([]);

//   // useEffect(() => {
//   //   localStorage.setItem("confirm", JSON.stringify(confirm));
//   // }, [item.id]);

//   // console.log(confirm);

//   //  const updateOrder = () => {

//   //    const orderupdated = {
//   //     item: item.id,

//   //    }
//   //    return setConfirm(orderupdated )
//   //  }


//   //update status
//   const handleStatus = async (itemId) => {
//     // const currentStatus = item.status
//     // console.log(currentStatus);
//     // const newStatus = currentStatus + 1
//     // console.log(newStatus);

//     try {
//       // const res = await axios.put(`/product/${itemId}`, {
//       //   status: newStatus,
//       // });
//       // setNewOder([res.data])
//       await axios.put(`/product/${itemId}`, { status: "confirm" });
//         const updatedProduct = await axios.get(`/product/${itemId}`);
//         setNewStatus(updatedProduct.data.status);
//       console.log(newStatus);

//       // console.log(res.data);
//       // setNewStatus(res.data.status);

//       // Fetch the updated product status
     
//       // const updatedProduct = await axios.get(`/product/${item._id}`);
//       // setNewStatus(updatedProduct.data.status);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const res = await axios.get(`/product/${item._id}`);
//   //     setNewStatus(res.data.status);
//   //   };
//   //   fetchData();
//   // }, []);
//   // useEffect(() => {
//   //   if(newStatus){
//   //       const fetchData = async () => {
//   //         const res = await axios.get(`/product/${item._id}`);
//   //         setNewStatus(res.data.status);
//   //       };
//   //       fetchData();
//   //   }
//   // }, [newStatus]);
//   useEffect(() => {
//     if(newStatus){
//         axios.get(`/product/${item._id}`)
//             .then(res => setNewStatus(res.data.status))
//             .catch(error => console.log(error));
//     }
//   }, [newStatus]);



//   console.log(item);
//   console.log(item._id);

//   return (
//     <div className="order">
//       {/* <span className='date'> {new Date(item.createdAt).toLocaleString('de-DE')}</span> */}
//       <span className="title">{item.name}</span>
//       <span className="title">{item.brand}</span>
//       <span className="title">{item.quantity}</span>

//       {/* <button
//         className="title"
//         style={{
//           backgroundColor: confirm ? "#e9e76c" : "#1eba49",
//         }}
//         onClick={() => setConfirm((prev) => !prev)}> */}
//       {/* onClick={() => updateOrder(item.id)} */}

//       {/* {!confirm ? "Confirm" : "Awaiting"} */}
//       {/* </button> */}
//       {/* <button    >{status[item.status]}  </button> */}

//       {/* <div> {newStatus}  || {item.status}  </div> */}

//       <span>{newStatus ? newStatus : status}</span>
//       <button onClick={() => handleStatus(item._id, "confirm")}>
//         update status
//       </button>
//     </div>
//   );
// };

// export default Order;


import axios from "axios";
import React, { useState, useEffect } from "react";
import "./order.scss";

const Order = ({ item, status }) => {
  const [newStatus, setNewStatus] = useState();

  const handleStatus = async (itemId) => {
    try {
      // Send a PUT request to update the status on the backend
      // await axios.put(`/product/${item._id}`, { status: "confirm" });
      await axios.put(`https://dashboard-api-marwen.onrender.com/api/product/${item._id}`, { status: "confirm" });
  
      // Fetch the updated product from the backend
      // const updatedProduct = await axios.get(`/product/${item._id}`);
      const updatedProduct = await axios.get(`https://dashboard-api-marwen.onrender.com/api/product/${item._id}`);
  
      // Update the status in the local state
      setNewStatus(updatedProduct.data.status);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`/product/${item._id}`);
  //     setNewStatus(res.data.status);
  //   };
  //   fetchData();
  // }, [newStatus]);

  useEffect(() => {
    if(newStatus){
        setNewStatus(newStatus)
    }
  }, [newStatus]);


  return (
    <div className="order">
      <span className="title">{item.title}</span>
      <span className="title">{item.brand}</span>
      <span className="title">{item.quantity}</span>

      <span>{newStatus ? newStatus : status}</span>
      <button onClick={() => handleStatus(item._id)}>
        update status
      </button>
    </div>
  );
};

export default Order;

