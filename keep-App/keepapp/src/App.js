import React,{useState} from 'react'
import Header from './Header.js'
import './index.css'
import Footer from './Footer.js'
import CreateNote from './CreateNote.js'
import Note from './Note.js'


const App = () => {
  const [addItem,setAddItem]=useState([]);
const addNote=(note)=>{
  // alert("i am clicked");
  setAddItem((prevData)=>{
          return [...prevData,note]
  })
}
const onDelete=(id)=>{
      setAddItem((olddata)=>
        olddata.filter((currentdata,index)=>{
          return index!==id;
        })
      )
}

  return (
    <>
    <Header/>
   
   <CreateNote passNote={addNote}/>
   
   { addItem.map((val,index)=>{
      return <Note
      key={index}
      id={index}
      title={val.title}
      content={val.content}
        deleteItem={onDelete}
      />
    })}
   <Footer/>
    </>
  )
}

export default App
