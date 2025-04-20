import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import soccer_image from '../../Assets/Images/soccer_image.png'
import soccerBanner from "../../Assets/Images/Soccer/soccer_banner.png";
import soccerSkill1 from "../../Assets/Images/Soccer/soccer_skill1.png";
import soccerSkill2 from "../../Assets/Images/Soccer/soccer_skill2.png";
import soccerSkill3 from "../../Assets/Images/Soccer/soccer_skill3.png";
import soccerSkill4 from "../../Assets/Images/Soccer/soccer_skill4.png";
import soccer2 from "../../Assets/Images/Soccer/soccer1.png";
import soccer3 from "../../Assets/Images/Soccer/soccer3.png";
import soccer4 from "../../Assets/Images/Soccer/soccer4.png";

import soccer1 from "../../Assets/Images/Soccer/soccer1.png"; // Note the typo in the file name
import soccer_trainer1 from '../../Assets/Images/basketball_trainer1.png'
import soccer_trainer2 from '../../Assets/Images/basketball_trainer2.png'
import soccer_trainer3 from '../../Assets/Images/basketball_trainer3.png'


export default function Soccer() {
    return (
        <>
            <div className="soccer-container">
                <div className="soccer-header">
                    <div>
                        <span className="soccer-backIcon"><BackIcon /></span>
                    </div>
                    <div className="soccer-header-content">

                        <h1>Soccer</h1>
                        <h3>Kickstart Your Child's Soccer Journey with BWC Sports!!</h3>
                        <p>BWC Sports is bringing Staten Island top-tier soccer training designed to inspire and develop young soccer enthusiasts. Whether your child is just beginning their soccer journey or looking to refine their skills, our programs offer the perfect blend of fun, learning, and growth.</p>

                    </div>
                </div>
                <div className="soccer-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule Group Class Here</button>
                    <button className="one-on-one soccer-booking-selected">Sign Up for Classes Here</button>
                </div>
                <div className="soccer-image-container">
                    <img src={soccer1} alt="soccer-image" />
                    <img src={soccer2} alt="soccer-image" />
                    <img src={soccer3} alt="soccer-image" />
                    <img src={soccer4} alt="soccer-image" />
                </div>
                <div className="soccer-section2">
                    <h3>Why Choose Our Soccer Program?</h3>
                    <p>Soccer isn’t just a game; it’s a path to lifelong skills. We combine state-of-the-art training facilities and focused, detail-oriented, game-based learning. The result? A program that nurtures your child’s love for soccer while building their confidence, teamwork, sportsmanship and technical skills.</p>
                    <div className="soccer-section2-image-container">
                        <span className="soccer-overlay-text bottom-left">1-on-1 Training</span>
                        <span className="soccer-overlay-text top-right">Group Training</span>
                        <img src={soccerBanner} alt="soccer-image-session" />
                    </div>
                </div>

                <div className="soccer-section3">
                    <h3>Dive into Our Exciting Programs</h3>
                    <p>Our programs are packed with a variety of drills and games designed to sharpen your skills and boost your confidence:</p>
                    <div className="soccer-section3-image-container">
                        <div class="sc-card">
                            <img src={soccerSkill1} alt="Card Image" />
                            <div className="sc-overlay"></div>
                            <div class="sc-card-content">
                                <div class="sc-card-title">Passing</div>
                                <div class="sc-card-desc">This paragraph appears and slides up on hover.</div>
                            </div>
                        </div>
                        <div class="sc-card">
                            <img src={soccerSkill1} alt="Card Image" />
                            <div className="sc-overlay"></div>
                            <div class="sc-card-content">
                                <div class="sc-card-title">Shooting</div>
                                <div class="sc-card-desc">This paragraph appears and slides up on hover.</div>
                            </div>
                        </div>
                        <div class="sc-card">
                            <img src={soccerSkill1} alt="Card Image" />
                            <div className="sc-overlay"></div>
                            <div class="sc-card-content">
                                <div class="sc-card-title">Defending</div>
                                <div class="sc-card-desc">This paragraph appears and slides up on hover.</div>
                            </div>
                        </div>
                        <div class="sc-card">
                            <img src={soccerSkill1} alt="Card Image" />
                            <div className="sc-overlay"></div>
                            <div class="sc-card-content">
                                <div class="sc-card-title">Goal Keeping</div>
                                <div class="sc-card-desc">This paragraph appears and slides up on hover.</div>
                            </div>
                        </div>
                        {/* <div className="soccer_section_image_cont"><span className="skill-text-overlay">Passing</span><img src={soccerSkill1} alt="Shooting" /></div>
                        <div className="soccer_section_image_cont"><span className="skill-text-overlay">Shooting</span><img src={soccerSkill2} alt="Passing" /></div>
                        <div className="soccer_section_image_cont"><span className="skill-text-overlay">Defending</span><img src={soccerSkill3} alt="Defense" /></div>
                        <div className="soccer_section_image_cont"><span className="skill-text-overlay">Goal Keeping</span><img src={soccerSkill4} alt="Rebounding" /></div> */}
                    </div>
                </div>
                <div className="soccer-section4">
                    <h3>Scrimmages and Games</h3>
                    <p>Practice makes perfect, but nothing beats game day. Our scrimmages and games give players the chance to apply what they’ve learned in a real-game setting, building confidence and experience. We cater to all skill levels, from ages 4 to 18, ensuring that every player finds their place on the field.</p>
                </div>
                <div className="soccer-booking-container2">
                    <div className="soccer-booking-container-details">
                        <h3>READY TO GET STARTED?</h3>
                        <p>Don’t miss out on this incredible opportunity to give your child the best start in soccer. Our spots fill up fast—secure your place today!</p>
                        <p><strong>Sign Up Now</strong> – Empower your child to succeed on and off the court.</p>
                    </div>
                    <div className="soccer-booking-container inside-booking-container">
                        <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule Group Class Here</button>
                        <button className="one-on-one soccer-booking-selected">Sign Up for Classes Here</button>
                    </div>
                </div>
                <div className="soccer-booking-container outside-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule Group Class Here</button>
                    <button className="one-on-one soccer-booking-selected">Sign Up for Classes Here</button>
                </div>

                <div className="soccer-trainers">
                    <h3>Our Trainers</h3>
                    <div className="soccer-trainer-image-container">
                        <div className="soccer-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer1} alt="trainer-image" />

                        </div>
                        <div className="soccer-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer2} alt="trainer-image" />

                        </div>
                        <div className="soccer-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer3} alt="trainer-image" />

                        </div>
                    </div>
                </div>
                <div className="soccer-locations">
                    <h3>Locations</h3>
                    <div className="soccer-location-container">
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image" />
                            <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image" />
                            <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image" />
                            <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image" />
                            <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
