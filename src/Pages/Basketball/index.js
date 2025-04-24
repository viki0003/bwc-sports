import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'


import basket_trainer from '../../Assets/Images/Basketball/basket_trainer.png';
import basket_trainer2 from '../../Assets/Images/Basketball/basket_trainer2.png';
import basketball_banner from '../../Assets/Images/Basketball/basketball_banner.png';
import basketball_section from '../../Assets/Images/Basketball/basketball_section.png';
import basketball_section2 from '../../Assets/Images/Basketball/basketball_section2.png';
import basketball_skill1 from '../../Assets/Images/Basketball/basketball_skill1.png';
import basketball_skill2 from '../../Assets/Images/Basketball/basketball_skill2.png';
import basketball_skill3 from '../../Assets/Images/Basketball/basketball_skill3.png';
import basketball_skill4 from '../../Assets/Images/Basketball/basketball_skill4.png';
import basketball_skill5 from '../../Assets/Images/Basketball/basketball_skill5.png';
import basketball1 from '../../Assets/Images/Basketball/basketball1.png';
import basketball2 from '../../Assets/Images/Basketball/basketball2.png';
import basketball3 from '../../Assets/Images/Basketball/basketball3.png';
import basketball4 from '../../Assets/Images/Basketball/basketball4.png';

import basketball_trainer2 from "../../Assets/Images/basketball_trainer2.png"


export default function Basketball() {
    return (
        <>
            <div className="basketball-container">
                <div className="basketball-header">
                    <div>
                        <span className="basketball-backIcon"><BackIcon /></span>
                    </div>
                    <div className="basketball-header-content">

                        <h1>Basketball</h1>
                        <h3>WANT TO TAKE YOUR BASKETBALL GAME TO THE NEXT LEVEL?</h3>
                        <p>Our skilled basketball trainer offers customized lessons for players of all ages and abilities. Whether you’re just starting out or looking to sharpen your skills, our sessions focus on fundamental techniques, game strategies, and physical conditioning. Learn dribbling, shooting, passing, defense, and more in a supportive and encouraging environment. Join us to enhance your performance, build confidence, and excel on the court. Sign up today and start your journey to basketball greatness!</p>

                    </div>
                </div>
                <div className="basketball-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule Group Class Here</button>
                    <button className="one-on-one basketball-booking-selected">Sign Up for Classes Here</button>
                </div>
                <div className="basketball-image-container">
                    <img src={BasketBall1} alt="basketball-image" />
                    <img src={basketball2} alt="basketball-image" />
                    <img src={basketball3} alt="basketball-image" />
                    <img src={basketball4} alt="basketball-image" />
                </div>
                <div className="basketball-section2">
                    <h3>Why Choose BWC Basketball?</h3>
                    <p>At BWC Basketball, we offer a range of programs that are as comprehensive as they are fun. Our goal is to provide every player with the tools they need to succeed, both on and off the court. Our carefully designed drills and games create an environment where learning is exciting and improvement is inevitable.</p>
                    <div className="basketball-section2-image-container">
                        <span className="basketball-overlay-text bottom-left">1-on-1 Training</span>
                        <span className="basketball-overlay-text top-right">Group Training</span>
                        <img src={basketball_section2} alt="basketball-image-session" />
                    </div>
                </div>

                <div className="basketball-section3">
                    <h3>Dive into Our Exciting Programs</h3>
                    <p>Our programs are packed with a variety of drills and games designed to sharpen your skills and boost your confidence:</p>
                    <div className="basketball-section3-image-container">
                        <div><span className="skill-text-overlay">Dribbling</span><img src={basketball_skill1} alt="Dribbling" /></div> 
                        <div><span className="skill-text-overlay">Shooting</span><img src={basketball_skill2} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Passing</span><img src={basketball_skill3} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Defense</span><img src={basketball_skill4} alt="Defense" /></div>
                        <div><span className="skill-text-overlay">Rebounding</span><img src={basketball_skill5} alt="Rebounding" /></div>
                    </div>
                </div>
                <div className="basketball-section4">
                    <h3>Scrimmages and Games</h3>
                    <p>Practice makes perfect, but nothing beats game day. Our scrimmages and games give players the chance to apply what they’ve learned in a real-game setting, building confidence and experience. We cater to all skill levels, from ages 4 to 18, ensuring that every player finds their place on the field.</p>
                </div>
                <div className="basketball-booking-container2">
                    <div className="basketball-booking-container-details">
                        <h3>READY TO GET STARTED?</h3>
                        <p>Don’t miss out on this incredible opportunity to give your child the best start in basketball. Our spots fill up fast—secure your place today!</p>
                        <p><strong>Sign Up Now</strong> – Empower your child to succeed on and off the court.</p>
                    </div>
                    <div className="basketball-booking-container inside-booking-container">
                        <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule Group Class Here</button>
                        <button className="one-on-one">Sign Up for Classes Here</button>
                    </div>
                </div>
                <div className="basketball-booking-container outside-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule Group Class Here</button>
                    <button className="one-on-one basketball-booking-selected">Sign Up for Classes Here</button>
                </div>

                <div className="basketball-trainers">
                    <h3>Our Trainers</h3>
                    <div className="basketball-trainer-image-container">
                        <div className="basketball-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={basket_trainer} alt="trainer-image" />

                        </div>
                        <div className="basketball-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={basketball_trainer2} alt="trainer-image" />

                        </div>
                        <div className="basketball-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={basket_trainer2} alt="trainer-image" />

                        </div>
                    </div>
                </div>
                <div className="basketball-locations">
                    <h3>Locations</h3>
                    <div className="basketball-location-container">
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
