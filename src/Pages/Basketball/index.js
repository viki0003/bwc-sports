import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import basketball1 from '../../Assets/Images/basketball1.jpg'
import basketball2 from '../../Assets/Images/basketball2.jpg'
import basketballimage from '../../Assets/Images/basketballsectionimage.png'
import dribbling from '../../Assets/Images/dribbling.png'
import shooting from '../../Assets/Images/shooting.png'
import passing from '../../Assets/Images/passing.png'
import defense from '../../Assets/Images/defense.png'
import rebounding from '../../Assets/Images/rebounding.png'
import basketball_trainer1 from '../../Assets/Images/basketball_trainer1.png'
import basketball_trainer2 from '../../Assets/Images/basketball_trainer2.png'
import basketball_trainer3 from '../../Assets/Images/basketball_trainer3.png'


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
                    <button className="one-on-one">Sign Up for Classes Here</button>
                </div>
                <div className="basketball-image-container">
                    <img src={basketball1} alt="basketball-image" />
                    <img src={basketball2} alt="basketball-image" />
                    <img src={basketball1} alt="basketball-image" />
                    <img src={basketball2} alt="basketball-image" />
                </div>
                <div className="basketball-section2">
                    <h3>Why Choose BWC Basketball?</h3>
                    <p>At BWC Basketball, we offer a range of programs that are as comprehensive as they are fun. Our goal is to provide every player with the tools they need to succeed, both on and off the court. Our carefully designed drills and games create an environment where learning is exciting and improvement is inevitable.</p>
                    <div className="basketball-section2-image-container">
                        <span className="basketball-overlay-text bottom-left">1-on-1 Training</span>
                        <span className="basketball-overlay-text top-right">Group Training</span>
                        <img src={basketballimage} alt="basketball-image-session" />
                    </div>
                </div>

                <div className="basketball-section3">
                    <h3>Dive into Our Exciting Programs</h3>
                    <p>Our programs are packed with a variety of drills and games designed to sharpen your skills and boost your confidence:</p>
                    <div className="basketball-section3-image-container">
                        <div><span className="skill-text-overlay">Dribbling</span><img src={dribbling} alt="Dribbling" /></div>
                        <div><span className="skill-text-overlay">Shooting</span><img src={shooting} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Passing</span><img src={passing} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Defense</span><img src={defense} alt="Defense" /></div>
                        <div><span className="skill-text-overlay">Rebounding</span><img src={rebounding} alt="Rebounding" /></div>
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
                    <div className="basketball-booking-container">
                        <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule Group Class Here</button>
                        <button className="one-on-one">Sign Up for Classes Here</button>
                    </div>
                </div>

                <div className="basketball-trainers">
                    <h3>Our Trainers</h3>
                    <div className="basketball-trainer-image-container">
                        <div className="basketball-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={basketball_trainer1} alt="trainer-image" />

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
                            <img src={basketball_trainer3} alt="trainer-image" />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
