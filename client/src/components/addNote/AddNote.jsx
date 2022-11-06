// import React, {useContext, useEffect, useState} from 'react';
// import { AppContext } from '../../context/context';
// import { useLocation } from "react-router-dom";
// import Note from '../note/Note';
// import axios from "axios";
// import "./addnote.scss";



// const getlocalStorage = () => {
//   let note = localStorage.getItem("note")
//   if(note) {
//     return JSON.parse(localStorage.getItem("note"))
//   }else {
//     return []

//   }
// }

// const AddNote = () => {
//     const {modalOpen,setModalOpen } = useContext(AppContext)
//     const [note, setNote] = useState("")
//     const [inputNote, setInputeNote] = useState(getlocalStorage())

//     const handleNote = (e) => {
//       e.preventDefault();
//       const newNote = {
       
//         id: new Date().getTime().toString(),
//         note: note,
//       };

//       setInputeNote([newNote]);
//       setNote("")

//     }

//     console.log(inputNote);

//     useEffect(() => {
//       localStorage.setItem("note", JSON.stringify(inputNote))


//     }, [inputNote])





//   return (
//     <div className='addnote'>
//         {modalOpen ? (
//             <>
//                      <form>
//                 <input 
//                 className='textinput'
//                 value={note}
//                 onChange={(e) => setNote(e.target.value)}
                
//                 />
    
//             </form>
//             <button className='modalBtn'  onClick={handleNote}  >Add</button>
//             <button className='modalBtn' onClick={() => setModalOpen((prev) => !prev)} >Cancel</button>

            
//             </>
       



//         ) : (
//           <div className="inputNote">
//               {inputNote.map((note) => (
//                 <div className="note">
//                   <Note note={note}  />
                
//                 </div>
//               ))}
//             </div>


//         )
      
      
//       }


    

//     </div>
//   )
// }

// export default AddNote
