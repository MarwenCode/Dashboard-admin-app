import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../pages/sidebar/SideBar";
import { FaEdit } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import axios from "axios";
import { AppContext } from "../../context/context";
import "./singleticket.scss";
import AddNote from "../addNote/AddNote";

const SingleTicket = () => {
  const { user, modalOpen, setModalOpen } = useContext(AppContext);
  // const [title, setTitle]= useState("")
  // const [product, setProduct]= useState("")
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [close, setClose] = useState(true);

  const [updateMode, setUpdateMode] = useState(false);
  // const [updateModeStatus, setUpdateModeStatus] = useState(false);

  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);

  //get single ticket

  const [singleTicket, setSingleTicket] = useState([]);

  useEffect(() => {
    const getSingleTicket = async () => {
      const res = await axios.get("/ticket/" + path);
      console.log(res.data);
      setSingleTicket(res.data);
      setDescription(res.data.description);
      setStatus(res.data.status);
    };

    getSingleTicket();
  }, []);

  //update ticket

  const updateTicket = async () => {
    try {
      await axios.put(`/ticket/${singleTicket._id}`, {
        description,
        status,
      });

      setUpdateMode(false);

      window.location.replace("/ticket/" + path);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singleTicket">
      <SideBar />
      <div
        className="singleTicket-section"
        //  className={modalOpen ? "modalActive" : "singleTicket-section" }
      >
        <ul className="top">
          <div className="left">
            <li className="Id">Ticket ID: {singleTicket._id}</li>
            <li className="date">Date Submitted: {new Date(singleTicket.createdAt).toDateString()} </li>
            <li className="product">Product: {singleTicket.product}</li>
          </div>
          <div className="right">
            {updateMode ? (
              <div className="form-group">
                <label htmlFor="name">Status </label>
                <select
                  type="text"
                  className="form-control"
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <option value="new">new</option>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            ) : (
              <span className="status">{singleTicket.status}</span>
            )}
          </div>
        </ul>
        <div className="center">
          {/* <span className="edit" onClick={() => setUpdateModeStatus((prev) => !prev)}>
          <FaEdit />
        </span> */}

          <div className="description">
            {updateMode ? (
              <>
                <textarea
                  type="text"
                  className="descriptionInput"
                  autoFocus
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <button className="updateBtn" onClick={updateTicket}>update</button>
              </>
            ) : (
              <p> Description: {singleTicket.description}</p>
            )}
          </div>
        </div>
        <div className="down">
          {/* <h1>Notes</h1>  */}

          {/* <div className="button"> 
            <button className="addNote" onClick={() => setModalOpen((prev) => !prev)}>Add Note</button>

           
          </div> */}
          <button
            className="closeTicket"
            style={{
              // backgroundColor: close ? "#1e92ed" : "#1eed40",
              backgroundColor: close ? "#66bdde" :  "#4f9547"
            }}
            onClick={() => setClose((prev) => !prev)}>
            {close ? "archive" : "done"}
          </button>
        </div>
        <div className="close">
          <span className="edit" onClick={() => setUpdateMode((prev) => !prev)}>
            <FaEdit />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
