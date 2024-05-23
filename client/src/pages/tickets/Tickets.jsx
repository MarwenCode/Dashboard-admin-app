import React, { useState, useEffect } from 'react';
import SideBar from "../sidebar/SideBar";
import Ticket from '../../components/ticket/Ticket';
import "./tickets.scss"

import axios from 'axios';

const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                // const res = await axios.get("/ticket");
                const res = await axios.get("https://dashboard-api-marwen.onrender.com/api/ticket");
                console.log(res.data);
                setTickets(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tickets:", error);
                setError(error);
                setLoading(false);
            }
        }

        fetchTickets();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
                {tickets?.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
}

export default Tickets;
