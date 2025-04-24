import React from 'react'
import usp1 from '../../../Assets/Images/SummerCamp/usp1.png'
import usp2 from '../../../Assets/Images/SummerCamp/usp2.png'
import usp3 from '../../../Assets/Images/SummerCamp/usp3.png'
import usp4 from '../../../Assets/Images/SummerCamp/usp4.png'
import usp5 from '../../../Assets/Images/SummerCamp/usp5.png'
import './usp.css'
export default function USP() {
  return (
    <>
      <div className="usp-container">
        <div className="usp-header">
          <h1>Reason to join us?</h1>
        </div>
        <div className="usp-content">
          
            <img src={usp1} alt="USP" />
            <img src={usp2} alt="USP" />
            <img src={usp3} alt="USP" />
            <img src={usp4} alt="USP" />
            <img src={usp5} alt="USP" />
          
        </div>
      </div>
    </>
  )
}
