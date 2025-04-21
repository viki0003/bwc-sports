import React from 'react'
import RecessImage from "../../../Assets/Images/recess-1.png";
import RecessImageTwo from "../../../Assets/Images/recess-2.png";
import RecessImageThree from "../../../Assets/Images/recess-3.png";
import FdSectionImage from "../../../Assets/Images/fd-section-image.png"
import './fielddayssection.css'
export default function FieldDaysSection() {
    return (
    <>
            <div className="recess fd-section">
                <div className="recess-heading">
                    <h2>Field Days</h2>
                    <div className="recess-images">
                        <img src={RecessImage} alt="recess" />
                        <img src={RecessImageTwo} alt="recess" />
                        <img src={RecessImageThree} alt="recess" />
                    </div>
                </div>
                <div className="fd-section-container">
                    <div className="fd-image-container">
                        <img src={FdSectionImage} alt="fd-image"/>
                    </div>
                    <div className="fd-image-description">
                        <p>Get ready for an unforgettable day of fun, excitement, and adventure with our Field Day/Carnival packages! Perfect for schools looking to create lasting memories, our packages are designed to cater to both elementary and intermediate school students. With a variety of activities, a DJ, and hours of non-stop entertainment, there’s something for everyone!</p>
                        <p>Don’t miss out on this incredible opportunity to bring joy, excitement, and team spirit to your students. Book your Field Day/Carnival today and let’s create a day they’ll never forget!</p>
                        <p>For more information or to book now, <strong>contact us at (347) 212-0028.</strong></p>
                    </div>
                </div>
            </div>
            </>
            )
}
