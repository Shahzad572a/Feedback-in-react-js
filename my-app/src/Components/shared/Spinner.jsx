import React from 'react'
import spinner from '../assets/Spin-1s-200px.gif'

function Spinner() {
  return (
    <img 
        src={spinner} 
        alt="Loading..." 
        style={{
        width: '150px',
        margin:'auto',
        display:'block'}} />
  )
}

export default Spinner
