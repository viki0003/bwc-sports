import React from 'react'
import './upcomingevents.css'
import EventContainer from './EventContainer/EventContainer'
import image1 from '../../../Assets/Images/SummerCamp/ec1.png'
import image2 from '../../../Assets/Images/SummerCamp/ec2.png'
import image3 from '../../../Assets/Images/SummerCamp/ec3.png'
export default function UpcomingEvents() {
    const images = [image1,image2,image3];
  return (
    <>
        <div className="ue-container">
            <div className="ue-header">
                <h1>Baseball Summer Camp</h1>
            </div>
            <div className="ue-content">{
                images.map((item, index) => (
  <EventContainer key={index} image={item} />
))
            }
                
            </div>
            <hr className="scp-blurbs-hr"/>
        </div>
    </>
  )
}
