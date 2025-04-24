import React from 'react'
import RecessImage from "../../../Assets/Images/recess-1.png";
import RecessImageTwo from "../../../Assets/Images/recess-2.png";
import RecessImageThree from "../../../Assets/Images/recess-3.png";
import RecessImageFour from "../../../Assets/Images/RecessImageFour.png";
import FDServices from "../../../Assets/Images/fd-services.png";
import FDCarnival from "../../../Assets/Images/fd-carnival.png";
import './fde.css'
export default function FDE() {
    return (
        <>
            <div className="recess">
                <div className="recess-heading fde">
                    <div className="recess-images">
                        <img src={RecessImageFour} alt="recess" />
                    </div>
                    <h2>Field Day Enhancements / Carnival Specials</h2>
                    <div className="recess-images">
                        <img src={RecessImageThree} alt="recess" />
                    </div>
                </div>
            </div>
            <div className="activity-container fde-as">
                <div className="activity-features">
                    <div className="activity-header">
                        <h2>Add additional services for your FIELD DAY!</h2>
                    </div>
                    <div className="activity-features-banner">
                        <img src={FDServices} alt="activity-features"/>
                    </div>
                    
                        <button className="fde-btn">
                            Learn More
                        </button>
                    
                </div>

                <div className="activity-features">
                    <div className="activity-features-banner">
                        <img src={FDCarnival} alt="activity-features"/>
                    </div>
                    
                        <button className="fde-btn carnival-btn">
                            Learn More
                        </button>
                    
                </div>
            </div>
        </>
    )
}
