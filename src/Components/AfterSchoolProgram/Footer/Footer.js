import React from 'react'
import blank_image from "../../../Assets/Images/blank-image.png"
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="f-container">
                <p>Enroll now and be part of our vibrant afterschool sports program! Bulk discounts are also available. For more information, contact us at (347) 212-0028.</p>
                <div className="f-image-container">
                    <div className="f-image-item"><img src={blank_image} alt="blank Image" /></div>
                    <div className="f-image-item"><img src={blank_image} alt="blank Image" /></div>
                    <div className="f-image-item"><img src={blank_image} alt="blank Image" /></div>
                    <div className="f-image-item"><img src={blank_image} alt="blank Image" /></div>
                </div>
            </div>
        </>
    )
}
