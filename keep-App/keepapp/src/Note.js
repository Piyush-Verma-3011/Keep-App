import React from 'react'
import './index.css'

const Note = (props) => {

   
const deleteNote=()=>{
    props.deleteItem(props.id);
}
  return (
    <>
     <div className='_note'>
        <h1>
            {props.title}
        </h1>
        <p> {props.content}</p>
        <button className='deleteicon' onClick={deleteNote}>×</button>
     </div>
    </>
  )
}

export default Note
