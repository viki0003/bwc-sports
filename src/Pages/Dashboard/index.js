import React from 'react';
import './style.css';
import NavbarCustom from '../../Components/NavbarCustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import soccerSkill1 from '../../Assets/Images/Soccer/soccer_skill1.png';
import basketball1 from '../../Assets/Images/Basketball/basketball1.png';
import basketball2 from '../../Assets/Images/Basketball/basketball2.png';
import basketball3 from '../../Assets/Images/Basketball/basketball3.png';
import basketball4 from '../../Assets/Images/Basketball/basketball4.png';
import EventOne from "../../Assets/Images/events-one.png";
import EventTWO from "../../Assets/Images/events-two.png";
import EventThree from "../../Assets/Images/events-three.png";
import TrendingSports from "../../Assets/Images/TrendingSports.png";
import TrendingSportImage from "../../Assets/Images/TrendingSportsImage.png";

const Dashboard = () => {
    return (
        <>
            <NavbarCustom />
            <div className="dashboard">
                <div className="dashboard-header">
                    <div className="dashboard-header-left">
                        <h2>Welcome John</h2>
                        <p>Your Sessions are funded by ------</p>
                    </div>
                    <div className="dashboard-header-right">
                        <button className="dashboard-call-btn">📞 Call Us at xxxxx xxxx xxxx</button>
                        <div className="dashboard-social-icons">
                            <i className="fa-brands fa-square-facebook dashboard-icon" style={{ color: '#2586d0' }}></i>
                            <i class="fa-brands fa-square-instagram dashboard-icon instagram-icon" style={{ background: 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7);' }}></i>
                        </div>
                    </div>
                </div>

                <div className="dashboard-grid">
                    <div className="dashboard-card dashboard-upcoming-sessions">
                        <h3>Your Upcoming Sessions</h3>
                        <div className="sesions-list">
                            <div className="dashboard-session-entry">
                                <div>
                                    <p><strong>ABC Sports Complex, New York</strong></p>
                                    <p>Saturday | 29/03/2024</p>
                                </div>
                                <div >
                                    <p>Soccer / Group Session</p>
                                    <p>8:00 AM</p>
                                </div>
                            </div>
                            <div className="dashboard-session-entry">
                                <div>
                                    <p><strong>ABC Sports Complex, New York</strong></p>
                                    <p>Saturday | 29/03/2024</p>
                                </div>
                                <div>
                                    <p>Soccer / Group Session</p>
                                    <p>8:00 AM</p>
                                </div>
                            </div>
                            <div className="dashboard-session-entry">
                                <div>
                                    <p><strong>ABC Sports Complex, New York</strong></p>
                                    <p>Saturday | 29/03/2024</p>
                                </div>
                                <div>
                                    <p>Soccer / Group Session</p>
                                    <p>8:00 AM</p>
                                </div>
                            </div>
                            <div className="dashboard-session-entry">
                                <div>
                                    <p><strong>ABC Sports Complex, New York</strong></p>
                                    <p>Saturday | 29/03/2024</p>
                                </div>
                                <div>
                                    <p>Soccer / Group Session</p>
                                    <p>8:00 AM</p>
                                </div>
                            </div>
                            <div className="dashboard-session-entry">
                                <div>
                                    <p><strong>ABC Sports Complex, New York</strong></p>
                                    <p>Saturday | 29/03/2024</p>
                                </div>
                                <div>
                                    <p>Soccer / Group Session</p>
                                    <p>8:00 AM</p>
                                </div>
                            </div>
                            <div className="dashboard-session-entry">
                                <div>
                                    <p><strong>ABC Sports Complex, New York</strong></p>
                                    <p>Saturday | 29/03/2024</p>
                                </div>
                                <div>
                                    <p>Soccer / Group Session</p>
                                    <p>8:00 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-session-buttons">
                            <button>View All Sessions</button>
                            <button className="dashboard-primary">Schedule New Session</button>
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-favorite-sports">
                        <h3>Choose from your Favorite Sports</h3>
                        <div className="soccer-section3-image-container">
                            <div class="sc-card">
                                <img src={basketball1} alt="Card Image" />
                                <div className="sc-overlay"></div>
                                <div class="sc-card-content">
                                    <div class="sc-card-title">Basketball</div>
                                    <div class="sc-card-desc">This paragraph appears and slides up on hover.</div>
                                </div>
                            </div>
                            <div class="sc-card">
                                <img src={soccerSkill1} alt="Card Image" />
                                <div className="sc-overlay"></div>
                                <div class="sc-card-content">
                                    <div class="sc-card-title">Soccer</div>
                                    <div class="sc-card-desc">This paragraph appears and slides up on hover.</div>
                                </div>
                            </div>
                            <div class="view-more-container">
                                <div class="view-more-container__grid">
                                    <img src={basketball2} alt="Rugby" className="view-more-container__image" />
                                    <img src={basketball3} alt="Baseball" className="view-more-container__image" />
                                    <img src={basketball2} alt="Running" className="view-more-container__image" />
                                    <img src={basketball4} alt="Golf" className="view-more-container__image" />
                                </div>
                                <p class="view-more-container__text">View All Sports</p>
                            </div>
                            {/* <div className="dashboard-sport">⚽ Soccer</div>
                            <div className="dashboard-sport">🏃‍♂️ Others</div> */}
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-upcoming-events-container">
                        <h3>Our Upcoming Events</h3>
                        <div className="dashboard-event-list">
                            <div class="dashboard-upcoming-events">
                                <img src={EventOne} alt="Baseball Summer Camp" class="dashboard-upcoming-events__image" />
                                <button class="dashboard-upcoming-events__button">View Event</button>
                            </div>
                            <div class="dashboard-upcoming-events">
                                <img src={EventTWO} alt="Baseball Summer Camp" class="dashboard-upcoming-events__image" />
                                <button class="dashboard-upcoming-events__button">View Event</button>
                            </div>
                            <div class="dashboard-upcoming-events">
                                <img src={EventThree} alt="Baseball Summer Camp" class="dashboard-upcoming-events__image" />
                                <button class="dashboard-upcoming-events__button">View Event</button>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-trending-sports">
                        <h3>Trending Sports</h3>
                        <div  className="sticky-image">
                        <img src={TrendingSportImage} alt="trending-sport"/>
                        </div>
                        <div className="dashboard-trending-content">
                            <h3>Basketball is Trending!</h3><p> Join the latest sessions and improve your skills on the court.</p>
                            <button className="dashboard-primary">Book Your Session Now</button>
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-announcements">
                        <h3>Announcements</h3>
                        <div className="dashboard-announcement">New soccer training grounds opening in XYZ</div>
                        <div className="dashboard-announcement">Fall season schedule is now live!</div>
                    </div>

                    <div className="dashboard-card dashboard-achievements">
                        <h3>User Achievements</h3>
                    </div>
                </div>

                <div className="dashboard-card dashboard-scheduler">
                    <h3>Weekly Scheduler</h3>
                    <select className="dashboard-dropdown">
                        <option>All Sports</option>
                    </select>
                    <div className="dashboard-scheduler-placeholder"></div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
