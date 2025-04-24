import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import bowling_image1 from '../../Assets/Images/bowling_image1.png'
import bowling_image2 from '../../Assets/Images/bowling_image2.png'
import bowling_image3 from '../../Assets/Images/bowling_image3.png'
import bowling_image4 from '../../Assets/Images/bowling_image4.png'
import Bowling21 from '../../Assets/Images/Bowling21.png'
import Bowling22 from '../../Assets/Images/Bowling22.png'
import Bowling23 from '../../Assets/Images/Bowling23.png'
import Bowling24 from '../../Assets/Images/Bowling24.png'
import Bowling25 from '../../Assets/Images/Bowling25.png'
import bowling11 from '../../Assets/Images/Bowling11.png'
import bowling12 from '../../Assets/Images/Bowling12.png'
import bowling13 from '../../Assets/Images/Bowling13.png'


import bowling_section_image from '../../Assets/Images/bowling_section_image.png'

import stock_photo from '../../Assets/Images/stock_photo.png'
import dribbling from '../../Assets/Images/dribbling.png'
import shooting from '../../Assets/Images/shooting.png'
import passing from '../../Assets/Images/passing.png'
import defense from '../../Assets/Images/defense.png'
import rebounding from '../../Assets/Images/rebounding.png'
import bowling_trainer1 from '../../Assets/Images/basketball_trainer1.png'
import bowling_trainer2 from '../../Assets/Images/basketball_trainer2.png'
import bowling_trainer3 from '../../Assets/Images/basketball_trainer3.png'


export default function Bowling() {
    return (
        <>
            <div className="bowling-container">
                <div className="bowling-header">
                    <div>
                        <span className="bowling-backIcon"><BackIcon /></span>
                    </div>
                    <div className="bowling-header-content">

                        <h1>Bowling</h1>
                        <h3>Looking to improve your bowling skills?</h3>
                        <p>Our expert bowling trainer offers personalized lessons tailored to bowlers of all levels. Whether you’re a beginner aiming to learn the basics or an experienced player seeking to refine your technique, our lessons cover everything from grip and stance to advanced strategies and tips. Join us to boost your confidence on the lanes, perfect your form, and achieve higher scores. Let’s bowl your way to success! Sign up today and start rolling strikes!</p>

                    </div>
                </div>
                <div className="bowling-booking-container">
                <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one bowling-booking-selected">Sign Up for Classes Here</button>
                </div>
                <div className="bowling-image-container">
                    <img src={bowling_image1} alt="bowling-image" />
                    <img src={bowling_image2} alt="bowling-image" />
                    <img src={bowling_image3} alt="bowling-image" />
                    <img src={bowling_image4} alt="bowling-image" />
                </div>
                <div className="bowling-section2">
                    <h3>Why Choose BWC Bowling?</h3>
                    <p>At BWC Bowling, we offer a range of programs that are as comprehensive as they are fun. Our goal is to provide every player with the tools they need to succeed, both on and off the lane. Our carefully designed drills and games create an environment where learning is exciting and improvement is inevitable.</p>
                    <div className="bowling-section2-image-container">
                        <span className="bowling-overlay-text bottom-left">1-on-1 Training</span>
                        <span className="bowling-overlay-text top-right">Group Training</span>
                        <img src={bowling_section_image} alt="bowling-image-session" />
                    </div>
                </div>

                <div className="bowling-section3">
                    <h3>Dive into Our Exciting Programs</h3>
                    <p>Our programs are packed with a variety of drills and games designed to sharpen your skills and boost your confidence:</p>
                    <div className="bowling-section3-image-container">
                        <div className="bowling-overlay"><span className="skill-text-overlay">Stance & Approach</span><img src={Bowling21} alt="Dribbling" /></div>
                        <div><span className="skill-text-overlay">Grip & Release</span><img src={Bowling22} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Targeting</span><img src={Bowling23} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Ball Speed & Control</span><img src={Bowling24} alt="Defense" /></div>
                        <div><span className="skill-text-overlay">Ball Speed & Control</span><img src={Bowling25} alt="Defense" /></div>
                    </div>
                </div>
                <div className="bowling-section4">
                    <h3>Scrimmages and Games</h3>
                    <p>Practice makes perfect, but nothing beats game day. Our scrimmages and games give players the chance to apply what they’ve learned in a real-game setting, building confidence and experience. We cater to all skill levels, from ages 4 to 18, ensuring that every player finds their place on the field.</p>
                </div>
                <div className="bowling-booking-container2">
                    <div className="bowling-booking-container-details">
                        <h3>Ready To Get Started?</h3>
                        <p>Don’t miss out on this incredible opportunity to give your child the best start in soccer. Our spots fill up fast—secure your place today!</p>
                        <p><strong>Join the Team Now</strong> – Let’s make this season your best one yet!</p>
                    </div>
                    <div className="bowling-booking-container inside-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule for Classes Here</button>
                        <button className="one-on-one bowling-booking-selected">Sign Up for Classes Here</button>
                    </div>
                </div>
                <div className="bowling-booking-container outside-booking-container">
                <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule for Classes Here</button>
                        <button className="one-on-one bowling-booking-selected">Sign Up for Classes Here</button>
                    </div>

                <div className="bowling-trainers">
                    <h3>Our Trainers</h3>
                    <div className="bowling-trainer-image-container">
                        <div className="bowling-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={bowling11} alt="trainer-image" />

                        </div>
                        <div className="bowling-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={bowling12} alt="trainer-image" />

                        </div>
                        <div className="bowling-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={bowling13} alt="trainer-image" />

                        </div>
                    </div>
                </div>
                <div className="bowling-locations">
                    <h3>Locations</h3>
                    <div className="bowling-location-container">
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
