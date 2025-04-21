import React from 'react'
import BackIcon from '../../../Assets/Icons/BackIcon'
import './header.css'
export default function Header() {
    return (
        <>
            <div className="mysessions-container">

                <span className="baseball-backIcon mysessions-icon"><BackIcon /></span>
                <h1>My Sessions</h1>
            </div>

        </>
    )
}
