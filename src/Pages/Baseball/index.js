import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import soccer_image from '../../Assets/Images/soccer_image.png'

import baseball_section_image from '../../Assets/Images/baseball_section_image.png'
import soccer_banner_image2 from '../../Assets/Images/soccer_banner_image2.png'

import dribbling from '../../Assets/Images/dribbling.png'
import shooting from '../../Assets/Images/shooting.png'
import passing from '../../Assets/Images/passing.png'
import defense from '../../Assets/Images/defense.png'
import rebounding from '../../Assets/Images/rebounding.png'
import soccer_trainer1 from '../../Assets/Images/basketball_trainer1.png'
import soccer_trainer2 from '../../Assets/Images/basketball_trainer2.png'
import soccer_trainer3 from '../../Assets/Images/basketball_trainer3.png'


export default function Baseball() {
    return (
        <>
            <div className="baseball-container">
                <div className="baseball-header">
                    <div>
                        <span className="baseball-backIcon"><BackIcon /></span>
                    </div>
                    <div className="baseball-header-content">

                        <h1>Baseball</h1>
                        <h3>Where Passion Meets Precision—Train with the Best in Staten Island</h3>
                        <p>At BWC Baseball, we believe the diamond is more than just a field—it’s a place where young athletes can grow, challenge themselves, and have a blast while doing it. With our head instructor, Vinny D’Acunto, leading the way, we’re committed to teaching the next generation of players the skills and values that baseball instills.</p>

                    </div>
                </div>
                <div className="baseball-booking-container">
                    
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one baseball-booking-selected">Sign Up for Classes Here</button>
                </div>
                <div className="baseball-image-container">
                    <img src={soccer_image} alt="soccer-image" />
                    <img src={soccer_image} alt="soccer-image" />
                    <img src={soccer_image} alt="soccer-image" />
                    <img src={soccer_image} alt="soccer-image" />
                </div>
                <div className="baseball-section2">
                    <h3>Why Choose BWC Baseball?</h3>
                    <p>At BWC Baseball, we offer a range of programs that are as comprehensive as they are fun. Our goal is to provide every player with the tools they need to succeed, both on and off the field. Our carefully designed drills and games create an environment where learning is exciting and improvement is inevitable.</p>
                    <div className="baseball-section2-image-container">
                        <span className="baseball-overlay-text bottom-left">1-on-1 Training</span>
                        {/* <span className="baseball-overlay-text top-right">Group Training</span> */}
                        <img src={baseball_section_image} alt="soccer-image-session" />
                    </div>
                </div>

                <div className="baseball-section3">
                    <h3>Dive into Our Exciting Programs</h3>
                    <p>Our programs are packed with a variety of drills and games designed to sharpen your skills and boost your confidence:</p>
                    <div className="baseball-section3-image-container">
                        <div><span className="skill-text-overlay">Ball Control</span><img src={dribbling} alt="Dribbling" /></div>
                        <div><span className="skill-text-overlay">Passing</span><img src={shooting} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Shooting</span><img src={passing} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Defending</span><img src={defense} alt="Defense" /></div>
                        <div><span className="skill-text-overlay">Goal Keeping</span><img src={rebounding} alt="Rebounding" /></div>
                    </div>
                </div>
                <div className="baseball-section4">
                    <h3>Scrimmages and Games</h3>
                    <p>Practice makes perfect, but nothing beats game day. Our scrimmages and games give players the chance to apply what they’ve learned in a real-game setting, building confidence and experience. We cater to all skill levels, from ages 4 to 18, ensuring that every player finds their place on the field.</p>
                </div>
                <div className="baseball-booking-container2">
                    <div className="baseball-booking-container-details">
                        <h3>Ready To Play Baseball?</h3>
                        <p>Don’t let this opportunity pass you by! Whether your child is new to the game or a seasoned player, BWC Baseball offers the perfect environment to learn, grow, and have fun. Sign up today and watch them step up to the plate with confidence!</p>
                        <p><strong>Join the Team Now</strong> – Let’s make this season your best one yet!</p>
                    </div>
                    <div className="baseball-booking-container inside-booking-container">
                        
                        <button className="one-on-one">Schedule for Classes Here</button>
                        <button className="one-on-one baseball-booking-selected">Sign Up for Classes Here</button>
                    </div>
                </div>
                <div className="baseball-booking-container outside-booking-container">
                        
                        <button className="one-on-one">Schedule for Classes Here</button>
                        <button className="one-on-one baseball-booking-selected">Sign Up for Classes Here</button>
                    </div>

                <div className="baseball-trainers">
                    <h3>Our Trainers</h3>
                    <div className="baseball-trainer-image-container">
                        <div className="baseball-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer1} alt="trainer-image" />

                        </div>
                        <div className="baseball-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer2} alt="trainer-image" />

                        </div>
                        <div className="baseball-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer3} alt="trainer-image" />

                        </div>
                    </div>
                </div>
                <div className="baseball-locations">
                    <h3>Locations</h3>
                    <div className="baseball-location-container">
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
