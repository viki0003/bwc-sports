import React from 'react'
import LeftIcon from '../../../Assets/Icons/LeftIcon'
import { Link } from 'react-router-dom'
import './banner.css'
export default function Banner() {
    return (
        <>
            <div className="sp-banner">
                <div className="sp-banner-content">
                    <Link to="">
                        <LeftIcon />
                    </Link>
                    <h1 className="after-school-program"><span>After School Programs</span></h1>
                </div>
            </div>
        </>
    )
}
