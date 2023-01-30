import axios from 'axios';
import React from 'react';
import {FaTrash, FaEdit } from "react-icons/fa";
import { HiOutlineFolderAdd } from "react-icons/hi"
import { Link } from 'react-router-dom';
import "./ticket.scss"

const Ticket = ({ticket}) => {

  //delete ticket
  const deleteTicket = async(ticketId) => {
    try {
      await axios.delete(`https://dashboard-api-marwen.onrender.com/api/ticket/${ticketId}`, {
        data: {ticketId: ticket._id }
      });

      window.location.reload("/tickets");
      
    } catch (error) {
      console.log(error)
    }

  }







  return (
    <div className='ticket'>
        <div>{ticket._id}</div>
    <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
    <div>{ticket.product}</div>
    <div className={`status status-${ticket.status}`}>{ticket.status}</div>
 
    <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
      View
    </Link>
    <div className="items">
    <span> <FaTrash onClick={() =>deleteTicket(ticket._id)} />     </span>
   


    </div>
 
    
  </div>
  )
}

export default Ticket