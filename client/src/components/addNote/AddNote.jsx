import React, {useContext} from 'react';
import { AppContext } from '../../context/context';
import "./addnote.scss"

const AddNote = () => {
    const {modalOpen,setModalOpen } = useContext(AppContext)
  return (
    <div className='addnote'>
        {modalOpen && (
            <>
                     <form>
                <input 
                className='textinput'
                
                />
    
            </form>
            <button className='modalBtn'>Add</button>
            <button className='modalBtn' onClick={() => setModalOpen((prev) => !prev)} >Cancel</button>

            
            </>
       



        )}
    

    </div>
  )
}

export default AddNote