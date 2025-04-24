import React from 'react'
import cv_basketball from '../../../Assets/Images/cv-basketball.png'
import cv_soccer from '../../../Assets/Images/cv-soccer.png'
import cv_football from '../../../Assets/Images/cv-football.png'
import cv_track_and_field from '../../../Assets/Images/cv-track-and-field.png'
import cv_fitness from '../../../Assets/Images/cv-fitness.png'
import './choosevariety.css'
export default function ChooseVariety() {
    return (
        <>
            <div className="variety-container">
                <div className="variety-header">
                    <h2>Why Choose Us?</h2>
                </div>
                <div className="variety-description">
                    <p>At Because We Can, we believe in the power of sports to inspire and empower children. Our afterschool program is more than just a place to play sports; it’s a community where children can thrive, learn, and have fun. Join us and give your child the opportunity to experience the joy of sports, make new friends, and develop a lifelong love for physical activity.</p>
                    <p><strong>Our After School Program costs $600 per hour. Two specialists will be assigned per 30 players that participate.</strong></p>
                </div>
                <p className="variety-usp">Choose from a variety of sports that include:</p>
            </div>
            <div className="asp-image-container cv">
                <div className="image-container cv-item">
                    <img src={cv_basketball} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Basketball</p></div>
                </div>
                <div className="image-container cv-item">
                    <img src={cv_soccer} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Soccer</p></div>
                </div>
                <div className="image-container cv-item">
                    <img src={cv_football} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Football</p></div>
                </div>
                <div className="image-container cv-item">
                    <img src={cv_track_and_field} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Track & Field</p></div>
                </div>
                <div className="image-container cv-item">
                    <img src={cv_fitness} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">Fitness</p></div>
                </div>
            </div>

        </>
    )
}
