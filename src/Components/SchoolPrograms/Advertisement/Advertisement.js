import React from 'react';
import advertisement from '../../../Assets/Images/advertisement.png';
import './advertisement.css';

export default function Advertisement() {
  return (
    <>
        <div className="advertisement">
            <img src={advertisement} alt="advertisement"/>
        </div>
    </>
  )
}
