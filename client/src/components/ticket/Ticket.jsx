import React from 'react';
import {FaTrash, FaEdit } from "react-icons/fa";
import { HiOutlineFolderAdd } from "react-icons/hi"
import { Link } from 'react-router-dom';
import "./ticket.scss"

const Ticket = ({ticket}) => {
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
    <span> <FaTrash />     </span>
   


    </div>
 
    
  </div>
  )
}

export default Ticket