import React, {useState, useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../../pages/sidebar/SideBar';
import axios from 'axios';
import { AppContext } from '../../context/context';
import "./singleticket.scss";


const SingleTicket = () => {
    const { user } = useContext(AppContext);
    const [title, setTitle]= useState("")
    const [product, setProduct]= useState("")
    const [description, setDescription]= useState("")
    const [status, setStatus]= useState("")


    const location = useLocation();
    console.log(location);
    const path = location.pathname.split("/")[2]
    console.log(path)

    const [singleTicket, setSingleTicket] = useState([]);

    useEffect(() => {
        const getSingleTicket = async() => {
           const res = await axios.get("/ticket/" + path);
           console.log(res.data)
           setSingleTicket(res.data)
        }

        getSingleTicket()
    }, [])





  return (
    <div className='singleTicket'>
        <SideBar />
        <div className="singleTicket-section">
            <div className="top">
                <span className='Id'>Ticket ID: {singleTicket._id}</span>
                <span className='date'>Date Submitted: {singleTicket.createdAt} </span>
                <span className='product'>Product: {singleTicket.product}</span>
            </div>
            <div className="center">
                description

            </div>
            <div className="down">
                <h1>Notes</h1>
                <button>Add Note</button>

            </div>
        </div>

    </div>
  )
}

export default SingleTicket