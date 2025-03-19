import React from 'react'
import LeftIcon from '../../../Assets/Icons/LeftIcon'
import { Link } from 'react-router-dom'
import './banner.css'
export default function Banner() {
    
    return (
        <>
            <div className="sp-banner fd-banner">
                <div className="sp-banner-content fd-banner-content">
                    <Link to="">
                        <LeftIcon />
                    </Link>
                    <h1>Field Days</h1>
                </div>
                
            </div>
        </>
    )
}
