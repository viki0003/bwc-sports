import React from 'react'
import './style.css'

export const ConfirmationPopup = () => {
  return (
    <>
        <div className="popup-container">
            <div className="popup-header">
                <h2>Your Chosen Items Are</h2>
            </div>
            <div className="popup-item-container">
                <div className="popup-item-header">
                    <p>Basketball</p>
                </div>
                <div className="popup-item-content">
                    <div className="popup-item-row">
                        <p> 1 ) </p>
                        <p>ABC Sports Complex, New York</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                    </div>
                    <div className="popup-item-row">
                        <p> 2) </p>
                        <p>ABC Sports Complex, New York</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                    </div>
                </div>
            </div>
            <div className="popup-item-container">
                <div className="popup-item-header">
                    <p>Basketball</p>
                </div>
                <div className="popup-item-content">
                    <div className="popup-item-row">
                        <p> 1 ) </p>
                        <p>ABC Sports Complex, New York</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                    </div>
                    <div className="popup-item-row">
                        <p> 2) </p>
                        <p>ABC Sports Complex, New York</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                    </div>
                </div>
            </div>
        <div className="popup-button-container">
            <button className="popup-back-button">
                Go Back
            </button>
            <button className="popup-confirm-button">
                Book Your Sessions
            </button>
        </div>
        </div>
    </>
  )
}
