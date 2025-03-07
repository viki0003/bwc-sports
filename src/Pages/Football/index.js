import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import soccer_image from '../../Assets/Images/soccer_image.png'

import soccer_banner_image from '../../Assets/Images/soccer_banner_image.png'
import soccer_banner_image2 from '../../Assets/Images/soccer_banner_image2.png'

import dribbling from '../../Assets/Images/dribbling.png'
import shooting from '../../Assets/Images/shooting.png'
import passing from '../../Assets/Images/passing.png'
import defense from '../../Assets/Images/defense.png'
import rebounding from '../../Assets/Images/rebounding.png'
import soccer_trainer1 from '../../Assets/Images/basketball_trainer1.png'
import soccer_trainer2 from '../../Assets/Images/basketball_trainer2.png'
import soccer_trainer3 from '../../Assets/Images/basketball_trainer3.png'


export default function Football() {
    return (
        <>
            <div className="football-container">
                <div className="football-header">
                    <div>
                        <span className="football-backIcon"><BackIcon /></span>
                    </div>
                    <div className="football-header-content">

                        <h1>Football</h1>
                        <h3>Kickstart Your Child's Soccer Journey with BWC Sports!!</h3>
                        <p>BWC Sports is bringing Staten Island top-tier soccer training designed to inspire and develop young soccer enthusiasts. Whether your child is just beginning their soccer journey or looking to refine their skills, our programs offer the perfect blend of fun, learning, and growth.</p>

                    </div>
                </div>
                <div className="football-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule Group Class Here</button>
                    <button className="one-on-one">Sign Up for Classes Here</button>
                </div>
                <div className="football-image-container">
                    <img src={soccer_image} alt="soccer-image" />
                    <img src={soccer_image} alt="soccer-image" />
                    <img src={soccer_image} alt="soccer-image" />
                    <img src={soccer_image} alt="soccer-image" />
                </div>
                <div className="football-section2">
                    <h3>Why Choose Our Soccer Program?</h3>
                    <p>Soccer isn’t just a game; it’s a path to lifelong skills. We combine state-of-the-art training facilities and focused, detail-oriented, game-based learning. The result? A program that nurtures your child’s love for soccer while building their confidence, teamwork, sportsmanship and technical skills.</p>
                    <div className="football-section2-image-container">
                        <span className="football-overlay-text bottom-left">1-on-1 Training</span>
                        <span className="football-overlay-text top-right">Group Training</span>
                        <img src={soccer_banner_image} alt="soccer-image-session" />
                    </div>
                </div>

                <div className="football-section3">
                    <h3>Dive into Our Exciting Programs</h3>
                    <p>Our programs are packed with a variety of drills and games designed to sharpen your skills and boost your confidence:</p>
                    <div className="football-section3-image-container">
                        <div><span className="skill-text-overlay">Ball Control</span><img src={dribbling} alt="Dribbling" /></div>
                        <div><span className="skill-text-overlay">Passing</span><img src={shooting} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Shooting</span><img src={passing} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Defending</span><img src={defense} alt="Defense" /></div>
                        <div><span className="skill-text-overlay">Goal Keeping</span><img src={rebounding} alt="Rebounding" /></div>
                    </div>
                </div>
                <div className="football-section4">
                    <h3>Scrimmages and Games</h3>
                    <p>Practice makes perfect, but nothing beats game day. Our scrimmages and games give players the chance to apply what they’ve learned in a real-game setting, building confidence and experience. We cater to all skill levels, from ages 4 to 18, ensuring that every player finds their place on the field.</p>
                </div>
                <div className="football-booking-container2">
                    <div className="football-booking-container-details">
                        <h3>READY TO GET STARTED?</h3>
                        <p>Don’t miss out on this incredible opportunity to give your child the best start in soccer. Our spots fill up fast—secure your place today!</p>
                        <p><strong>Sign Up Now</strong> – Empower your child to succeed on and off the court.</p>
                    </div>
                    <div className="football-booking-container">
                        <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule Group Class Here</button>
                        <button className="one-on-one">Sign Up for Classes Here</button>
                    </div>
                </div>

                <div className="football-trainers">
                    <h3>Our Trainers</h3>
                    <div className="football-trainer-image-container">
                        <div className="football-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer1} alt="trainer-image" />

                        </div>
                        <div className="football-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer2} alt="trainer-image" />

                        </div>
                        <div className="football-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer3} alt="trainer-image" />

                        </div>
                    </div>
                </div>
                <div className="football-locations">
                    <h3>Locations</h3>
                    <div className="football-location-container">
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image"/>
                                <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image"/>
                                <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image"/>
                                <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                        <div class="card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image"/>
                                <div class="card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
