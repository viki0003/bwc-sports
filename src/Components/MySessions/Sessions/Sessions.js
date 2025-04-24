import React from 'react'
import './sessions.css'
export default function Sessions() {
  return (
    <>
        <div className="mysession-container">
    <h2>Your Upcoming Sessions</h2>
    <div className="mysession-session-header">
      <span><em>Sport</em></span>
      <span><em>Location</em></span>
      <span><em>Date</em></span>
      <span><em>Time</em></span>
      <span><em>Type</em></span>
    </div>

    <div className="mysession-session-card">
      <span><strong>Soccer</strong></span>
      <span><strong>ABC Sports Complex,<br/>New York</strong></span>
      <span>29/03/2024</span>
      <span>8:00 AM</span>
      <span><strong>Group Session</strong></span>
      <button>Cancel The Session</button>
    </div>

    <div className="mysession-session-card">
      <span><strong>Soccer</strong></span>
      <span><strong>ABC Sports Complex,<br/>New York</strong></span>
      <span>29/03/2024</span>
      <span>9:00 AM</span>
      <span><strong>Group Session</strong></span>
      <button>Cancel The Session</button>
    </div>

    <div className="mysession-session-card">
      <span><strong>Soccer</strong></span>
      <span><strong>ABC Sports Complex,<br/>New York</strong></span>
      <span>29/03/2024</span>
      <span>8:00 AM</span>
      <span><strong>Group Session</strong></span>
      <button>Cancel The Session</button>
    </div>

    <div className="mysession-session-card">
      <span><strong>Soccer</strong></span>
      <span><strong>ABC Sports Complex,<br/>New York</strong></span>
      <span>29/03/2024</span>
      <span>8:00 AM</span>
      <span><strong>Group Session</strong></span>
      <button>Cancel The Session</button>
    </div>
  </div>
    </>
  )
}
