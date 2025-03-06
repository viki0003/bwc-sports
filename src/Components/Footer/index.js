import React from 'react'
import sponser1 from '../../Assets/Images/sponser1.png';
import sponser2 from '../../Assets/Images/sponser2.png';
import sponser3 from '../../Assets/Images/sponser3.png';
import sponser4 from '../../Assets/Images/sponser4.png';
import './style.css'
export default function Footer() {
  return (
   <>
    <div className="footer-container">
        <div className="footer-header">
            <h1>Proudly Affiliated with</h1>
        </div>
        <div className="footer-sponser">
            <div className="sponser-image"><img src={sponser1} alt="sponser"/></div>
            <div className="sponser-image"><img src={sponser2} alt="sponser"/></div>
            <div className="sponser-image"><img src={sponser3} alt="sponser"/></div>
            <div className="sponser-image"><img src={sponser4} alt="sponser"/></div>
        </div>
    </div>
   </>
  )
}
