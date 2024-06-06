import React from 'react'
import './index.css'

const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <>
        <footer>
       <p>©️ Piyush Verma {year}</p>
       </footer>
    </>
  )
}

export default Footer
