import React from 'react'
import fd_basketball from '../../../Assets/Images/fd-basketball.png';
import fd_wiffle from '../../../Assets/Images/fd-wiffle.png';
import fd_taf from '../../../Assets/Images/fd-taf.png';
import fd_bg from '../../../Assets/Images/fd-bg.png';
import fd_rs from '../../../Assets/Images/fd-rs.png';
import fd_ds from '../../../Assets/Images/fd-ds.png';
import activity_features from '../../../Assets/Images/activity-features.png'
import './activity.css'

export default function Activity() {
    return (
        <>
            <div className="activity-container">
                <div className="activity-header">
                    <h2>Here just a few of the activities you can choose from!</h2>
                </div>
                <div className="activity-content">
                    <div className="activity-item">
                        <img src={fd_basketball} alt="basketball" />
                    </div>
                    <div className="activity-item">
                        <img src={fd_wiffle} alt="Wiffle" />
                    </div>
                    <div className="activity-item">
                        <img src={fd_taf} alt="Track and Field" />
                    </div>
                    <div className="activity-item">
                        <img src={fd_bg} alt="Board Games" />
                    </div>
                    <div className="activity-item">
                        <img src={fd_rs} alt="Rec Station" />
                    </div>
                    <div className="activity-item">
                        <img src={fd_ds} alt="Dance Station" />
                    </div>
                </div>

                <div className="activity-features">
                    <div className="activity-header">
                        <h2>Choices for team bonding & leadership activities include</h2>
                    </div>
                    <div className="activity-features-banner">
                        <img src={activity_features} alt="activity-features"/>
                    </div>
                </div>
            </div>
        </>
    )
}
