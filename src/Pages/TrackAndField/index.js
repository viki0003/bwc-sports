import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import Track1 from '../../Assets/Images/Track1.png'
import Track2 from '../../Assets/Images/Track2.png'
import Track3 from '../../Assets/Images/Track3.png'
import Track4 from '../../Assets/Images/Track4.png'
import Track5 from '../../Assets/Images/Track5.png'
import Track6 from '../../Assets/Images/Track6.png'
import Track7 from '../../Assets/Images/Track7.png'
import Track8 from '../../Assets/Images/Track8.png'
import stock_photo from '../../Assets/Images/stock_photo.png'
import track_and_field_banner_image from '../../Assets/Images/track_and_field_banner_image.png'
import soccer_banner_image2 from '../../Assets/Images/soccer_banner_image2.png'
import Testimonial from '../../Components/Testimonial';
import Features from '../../Components/Features';
import dribbling from '../../Assets/Images/dribbling.png'
import shooting from '../../Assets/Images/shooting.png'
import passing from '../../Assets/Images/passing.png'
import defense from '../../Assets/Images/defense.png'
import rebounding from '../../Assets/Images/rebounding.png'
import SprintIcon from '../../Assets/Icons/SprintIcon';
import ACIcon from '../../Assets/Icons/ACIcon';
import ECIcon from '../../Assets/Icons/ECIcon';
import soccer_trainer1 from '../../Assets/Images/basketball_trainer1.png'
import soccer_trainer2 from '../../Assets/Images/basketball_trainer2.png'
import soccer_trainer3 from '../../Assets/Images/basketball_trainer3.png'


export default function TrackAndField() {
    // const featuresData = {
    //     color: 'red',
    //     Icon1: SprintIcon,
    //     Icon2: ACIcon,
    //     Icon3: ECIcon
    // }
    return (
        <>
            <div className="track-and-field-container">
                <div className="track-and-field-header">
                    <div>
                        <span className="track-and-field-backIcon"><BackIcon /></span>
                    </div>
                    <div className="track-and-field-header-content">

                        <h1>Track & Field</h1>
                        <h3>Train Like a Champion with Staten Island’s Elite Track & Field Program</h3>
                        <p>Whether your child is looking to sprint faster, jump higher, or improve their endurance, BWC Track & Field offers expert training designed to take young athletes to the next level. With world-class instruction and a supportive, fun environment, BWC Track & Field is the perfect place to kickstart your child’s journey into the world of track and field.</p>

                    </div>
                </div>
                <div className="track-and-field-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one track-and-field-booking-selected">Sign Up for Classes Here</button>
                </div>
                <div className="track-and-field-image-container">
                    <img src={Track1} alt="soccer-image" />
                    <img src={Track2} alt="soccer-image" />
                    <img src={Track3} alt="soccer-image" />
                    {/* <img src={track_and_field_image1} alt="soccer-image" /> */}
                </div>
                <div className="track-and-field-section2">
                    <h3>Why Choose BWC Track & Field?</h3>
                    <p>At BWC Track & Field, we believe in creating a fun and competitive atmosphere where athletes of all ages and abilities can grow. Our program caters to kids from 4 to 18 years old, offering a wide range of training options that cover every aspect of track and field.</p>
                    <div className="track-and-field-section2-image-container">
                        <span className="track-and-field-overlay-text bottom-left">1-on-1 Training</span>
                        <span className="track-and-field-overlay-text bottom-right">Group Training</span>
                        <span className="track-and-field-overlay-text bottom-middle">1-on-1 Training</span>
                        <img src={track_and_field_banner_image} alt="soccer-image-session" />
                    </div>
                </div>

                <div className="track-and-field-section3">
                    <h3>Programs That Make Champions</h3>
                    <p>Our training programs are designed to cover all key aspects of track and field, ensuring that each athlete develops the skills needed for success:</p>
                    <div className="track-and-field-section3-image-container">
                        <div><span className="skill-text-overlay">Sprinting</span><img src={Track4} alt="Dribbling" /></div>
                        <div><span className="skill-text-overlay">Distance Running</span><img src={Track5} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Jumping</span><img src={Track6} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Throwing</span><img src={Track7} alt="Defense" /></div>
                        <div><span className="skill-text-overlay">Agility and Speed</span><img src={Track8} alt="Rebounding" /></div>
                    </div>
                </div>
                <div className="track-and-field-section4">
                    <h3>Fun and Competitive Games</h3>
                    <p>Our track & field program isn’t just about drills and technique—it’s about having fun while competing. We incorporate exciting challenges and games like:</p>
                </div>
                <Features color="red" Icon1={SprintIcon} Icon2={ACIcon} Icon3={ECIcon}/>
                <div className="track-and-field-section4">
                    <h3>Scrimmages and Track Meets</h3>
                    <p>No training is complete without the thrill of competition. Our scrimmages and track meets give athletes the chance to apply what they’ve learned in a real-world setting. These events help build confidence, camaraderie, and the competitive spirit needed for success in track and field.</p>
                </div>
                <div className="testimonial-container">
                    <h1 className="testimonial-header">WHAT PARENTS ARE SAYING</h1>
                </div>
                <Testimonial/>



                <div className="track-and-field-booking-container2">
                    <div className="track-and-field-booking-container-details">
                        <h3>Ready To Play track-and-field?</h3>
                        <p>Don’t let this opportunity pass you by! Whether your child is new to the game or a seasoned player, BWC track-and-field offers the perfect environment to learn, grow, and have fun. Sign up today and watch them step up to the plate with confidence!</p>
                        <p><strong>Join the Team Now</strong> – Let’s make this season your best one yet!</p>
                    </div>
                    <div className="track-and-field-booking-container inside-booking-container">
                        <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule for Classes Here</button>
                        <button className="one-on-one track-and-field-booking-selected">Sign Up for Classes Here</button>
                    </div>
                </div>
                <div className="track-and-field-booking-container outside-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one track-and-field-booking-selected">Sign Up for Classes Here</button>
                </div>

                <div className="track-and-field-trainers">
                    <h3>Our Trainers</h3>
                    <div className="track-and-field-trainer-image-container">
                        <div className="track-and-field-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer1} alt="trainer-image" />

                        </div>
                        <div className="track-and-field-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer2} alt="trainer-image" />

                        </div>
                        <div className="track-and-field-trainer-image">
                            <div className="skill-text-overlay">
                                <h4>Trainer Name</h4>
                                <p>Trainer Specification</p>
                            </div>
                            <img src={soccer_trainer3} alt="trainer-image" />

                        </div>
                    </div>
                </div>
                <div className="track-and-field-locations">
                    <h3>Locations</h3>
                    <div className="track-and-field-location-container">
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
