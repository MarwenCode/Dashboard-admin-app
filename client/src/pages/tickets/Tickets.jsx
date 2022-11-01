import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Tickets = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const fetchTickets = async() => {
            const res = await axios.get("/ticket");
            console.log(res)
        }

        fetchTickets()
    })



  return (
    <div className='tickets'>



    </div>
  )
}

export default Tickets