import React from 'react'
import './style.css'
import SprintIcon from '../../Assets/Icons/SprintIcon'
export default function Features({ color, Icon1, Icon2, Icon3 }) {
    
  return (
    <>
        <div className="features-container">
        <div className="features-card" style={{ border: `2px solid ${color}`}}>
            <div className="features-icon" style={{ border: `2px solid ${color}`}}>
            {Icon1 && <Icon1 className="features-icon-tag" />}
            </div>
            <h2 style={{color: `${color}`}}>Personalized Coaching</h2>
            <p>Because your game is unique, and so is our approach.</p>
        </div>
        <div className="features-card" style={{ border: `2px solid ${color}`}}>
            <div className="features-icon" style={{ border: `2px solid ${color}`}}>
            {Icon2 && <Icon2 className="features-icon-tag" />}
            </div>
            <h2 style={{color: `${color}`}}>Fun Group Sessions</h2>
            <p>Learn and laugh with others who love the game as much as you do.</p>
        </div>
        <div className="features-card" style={{ border: `2px solid ${color}`}}>
            <div className="features-icon" style={{ border: `2px solid ${color}`}}>
            {Icon3 && <Icon3 className="features-icon-tag" />}
            </div>
            <h2 style={{color: `${color}`}}>Top Notch Facilities</h2>
            <p>Practice with the best equipment in a welcoming environment.</p>
        </div>
    </div>
    </>
  )
}
