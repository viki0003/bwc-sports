import React from 'react'
import asp_image1 from '../../../Assets/Images/asp-image.png'
import asp_image2 from '../../../Assets/Images/asp-image1.png'
import './photocontainer.css'
export default function PhotoContainer() {
    return (
        <>
            <div className="asp-image-container">
                <div className="image-container asp-item">
                    <img src={asp_image2} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Diverse Sports</p></div>
                </div>
                <div className="image-container asp-item">
                    <img src={asp_image1} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Experienced Coaches</p></div>
                </div>
                <div className="image-container asp-item">
                    <img src={asp_image2} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Skill Development</p></div>
                </div>
                <div className="image-container asp-item">
                    <img src={asp_image1} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Skill Development</p></div>
                </div>
                <div className="image-container asp-item">
                    <img src={asp_image2} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Safe Environment</p></div>
                </div>
            </div>
        </>
    )
}
