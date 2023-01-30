import React, {useState, useEffect} from 'react';
import SideBar from "../sidebar/SideBar";
import Ticket from '../../components/ticket/Ticket';
import "./tickets.scss"

import axios from 'axios';

const Tickets = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const fetchTickets = async() => {
            const res = await axios.get("/ticket");
            // const res = await axios.get("https://dashboard-api-marwen.onrender.com/api/ticket");
            console.log(res)
            setTickets(res.data)
        }

        fetchTickets()
    },[])



  return (
    <div className='tickets'>
      <SideBar />
      <div className="tickets-section">
        <div className="ticket-heading">
        <div>ID</div>
        <div>Date</div>
        <div>Brand</div>
        <div>Status</div>
        <div>Display</div>

        </div>
   
        {tickets.map((ticket) => (
          <Ticket  ticket={ticket} />
        ))}
      </div>



    </div>
  )
}

export default Tickets
