
import React from 'react'

const Services = (props) => {
    const serviceStyle ={
        border: '2px solid red',
        padding: '50px 10px',
        backgroundColor: 'green',
        margin: '5px',
    }
  return (
    <div style={serviceStyle}>
        <h1>Service Component...</h1>
        <h2>Name:{props.name}</h2>
        </div>
  )
}

export default Services