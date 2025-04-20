import React from 'react'
import './eventcontainer.css'
export default function EventContainer({image}) {
  return (
    <>
        <div className="ec">
            <img className="ec-image" src={image} alt="events"/>
            <button className="ec-btn">Register</button>
        </div>
    </>
  )
}
