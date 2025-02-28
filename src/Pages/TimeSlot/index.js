import React from 'react'
import NavbarCustom from '../../Components/NavbarCustom'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import DropdownFilter from '../../Components/DropdownFilter'
import CartIcon from '../../Assets/Icons/CartIcon'
import { ConfirmationPopup } from '../../Components/ConfirmationPopup'

export const TimeSlot=()=> {
    
    return (
        <>
            <NavbarCustom />
            <div className="time-slot-container">
                <div className="time-slot-header">
                    {/* <IoArrowBack className={styles.backIcon} onClick={handleBack} /> */}
                    <span className="backIcon"><BackIcon /></span>
                    <div className="time-slot-header-content">
                        <h1 className="time-slot-heading">Choose Your Preferred Location, Date & Time</h1>  
                    </div>
                </div>
                <div className="time-slot-sports-header">
                    <h2>Basketball</h2>
                    <DropdownFilter/>  
                </div>
                <div className="time-slot-items">
                    <div className="time-slot-book-container">
                        <input type="checkbox"/>
                        <p>ABC Sports Complex, New York</p>
                        <p className="time-slot-day">Saturday</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                        <button className="book-slot-button"><span className="btn-text">Book Your Slot</span><span className="btn-icon"><CartIcon/></span></button>
                    </div>
                    <div className="time-slot-book-container">
                        <input type="checkbox"/>
                        <p>ABC Sports Complex, New York</p>
                        <p className="time-slot-day">Saturday</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                        <button className="book-slot-button"><span className="btn-text">Book Your Slot</span><span  className="btn-icon"><CartIcon/></span></button>
                    </div>
                    <div className="time-slot-book-container">
                        <input type="checkbox"/>
                        <p>ABC Sports Complex, New York</p>
                        <p className="time-slot-day">Saturday</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                        <button className="book-slot-button"><span className="btn-text">Book Your Slot</span><span  className="btn-icon"><CartIcon/></span></button>
                    </div>
                </div>
                <div className="time-slot-sports-header">
                    <h2>Baseball</h2> 
                </div>
                <div className="time-slot-items">
                    <div className="time-slot-book-container">
                        <input type="checkbox"/>
                        <p>ABC Sports Complex, New York</p>
                        <p className="time-slot-day">Saturday</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                        <button className="book-slot-button"><span className="btn-text">Book Your Slot</span><span  className="btn-icon"><CartIcon/></span></button>
                    </div>
                    <div className="time-slot-book-container">
                        <input type="checkbox"/>
                        <p>ABC Sports Complex, New York</p>
                        <p className="time-slot-day">Saturday</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                        <button className="book-slot-button"><span className="btn-text">Book Your Slot</span><span  className="btn-icon"><CartIcon/></span></button>
                    </div>
                    <div className="time-slot-book-container">
                        <input type="checkbox"/>
                        <p>ABC Sports Complex, New York</p>
                        <p className="time-slot-day">Saturday</p>
                        <p>29/03/2024</p>
                        <p>8:00 AM</p>
                        <button className="book-slot-button"><span className="btn-text">Book Your Slot</span><span  className="btn-icon"><CartIcon/></span></button>
                    </div>
                </div>
                <button type="submit" className="p-submit-button">Proceed</button>
                
            </div>


        </>
    )
}
