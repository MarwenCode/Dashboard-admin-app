import React, {useContext, useState} from "react";
import { AppContext } from "../../context/context";
import axios from "axios";
import "./modalticket.scss";

const ModalTicket = ({setShowLModalTicket, singleTicket}) => {
    const {user,getUser } = useContext(AppContext)
    const [newDescription, setNewDescription] = useState([])

    const addNewDescription = async (e) => {
        e.preventDefault();
   
       const newDescr = {
        ticketId:singleTicket._id,
         username:getUser.username,
         userId: getUser._id,
         text: newDescription
       }

       try {
        const res = await axios.post(`/description/${singleTicket._id}`, newDescr )
        console.log(res.data);
        window.location.replace(`/ticket/${singleTicket._id}` );
        
       } catch (error) {
        console.log(error)
        
       }

       addNewDescription()
    }

    console.log(newDescription)


    
  return (
    <div className="modal">
        
       
        <form className="settingForm">
        <button onClick={() => setShowLModalTicket((prev) => !prev)}>x</button>
     
    

          <div className="inputText">
            <label>Description</label>
            <textarea type="text" className="settingInput"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            
            />
          </div>
          <div className="buttons">
            <button className="settingsSubmit "  onClick={(e) => addNewDescription(e)}>
              add
            </button>
          </div>
        </form>
      </div>
   
  );
};

export default ModalTicket;
