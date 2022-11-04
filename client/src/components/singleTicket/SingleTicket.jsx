import React, {useState, useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../../pages/sidebar/SideBar';
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import { AppContext } from '../../context/context';
import "./singleticket.scss";


const SingleTicket = () => {
    const { user } = useContext(AppContext);
    // const [title, setTitle]= useState("")
    // const [product, setProduct]= useState("")
    const [description, setDescription]= useState("")
    // const [status, setStatus]= useState("");

    const [updateMode, setUpdateMode] = useState(false);


    const location = useLocation();
    console.log(location);
    const path = location.pathname.split("/")[2]
    console.log(path)

    //get single ticket

    const [singleTicket, setSingleTicket] = useState([]);

    useEffect(() => {
        const getSingleTicket = async() => {
           const res = await axios.get("/ticket/" + path);
           console.log(res.data)
           setSingleTicket(res.data)
        }

        getSingleTicket()
    }, [])


    //update ticket

   const updateTicket = async() => {
    try {
        await axios.put(`/ticket/${singleTicket._id}`, {
            description,
        })
        
        setUpdateMode(false)
        
    } catch (error) {
        console.log(error)
        
    }
   }




  return (
    <div className='singleTicket'>
        <SideBar />
        <div className="singleTicket-section">
        <span className='edit'
        onClick={()=> setUpdateMode((prev) =>!prev)}
        > 
        
        <FaEdit />     
        
        </span>
       
            <ul className="top">
          
                <div className="left">
                <li className='Id'>Ticket ID: {singleTicket._id}</li>
                <li className='date'>Date Submitted: {singleTicket.createdAt} </li>
                <li className='product'>Product: {singleTicket.product}</li>

              

                </div>
                <div className="right">
                    <span>{singleTicket.status}</span>
                   
                </div>
               
            </ul>
            <div className="center">
        
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

                            <button onClick={updateTicket} >update</button>
                        
                        
                        </>
                        


                    ): (
                        <p>{singleTicket.description}</p>



                    )
                
                
                }
          
                  
                </div>
                


            </div>
            <div className="down">
                <h1>Notes</h1>
                <button className='addNote'>Add Note</button>

                <button className='closeTicket'>Close ticket</button>

            </div>
        </div>

    </div>
  )
}

export default SingleTicket