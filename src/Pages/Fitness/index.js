import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import fitness_image1 from '../../Assets/Images/fitness_image1.png';
import fitness_image2 from '../../Assets/Images/fitness_image2.png';
import fitness_image3 from '../../Assets/Images/fitness_image3.png';

import fitness_banner_image from '../../Assets/Images/fitness_banner_image.png'
import Features from '../../Components/Features';
import Testimonial from '../../Components/Testimonial';
import dribbling from '../../Assets/Images/dribbling.png'
import shooting from '../../Assets/Images/shooting.png'
import passing from '../../Assets/Images/passing.png'
import defense from '../../Assets/Images/defense.png'
import rebounding from '../../Assets/Images/rebounding.png'
import stock_photo from '../../Assets/Images/stock_photo.png'
import PCBIcon from '../../Assets/Icons/PCBIcon';
import FGSBIcon from '../../Assets/Icons/FGSBIcon';
import TNFBIcon from '../../Assets/Icons/TNFBIcon';


export default function Fitness() {
    return (
        <>
            <div className="fitness-container">
                <div className="fitness-header">
                    <div>
                        <span className="fitness-backIcon"><BackIcon /></span>
                    </div>
                    <div className="fitness-header-content">

                        <h1>Fitness</h1>
                        <h3>Get Fit, Stay Strong, and Feel Your Best with Staten Island’s Premier Training Program</h3>
                        <p>Whether you’re looking to build strength, improve agility, or just feel more confident in your body, BWC Fitness has got you covered. Led by the incredible Nina Romano, our program is designed to meet you where you are and help you reach your personal fitness goals. It’s time to take your fitness journey to the next level!</p>

                    </div>
                </div>
                <div className="fitness-booking-container">
                    {/* <button className="one-on-one">Schedule 1-on-1 Class Here</button> */}
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one fitness-booking-selected">Sign Up for Classes Here</button>
                </div>
                <div className="fitness-image-container">
                    <img src={fitness_image1} alt="soccer-image" />
                    <img src={fitness_image2} alt="soccer-image" />
                    <img src={fitness_image3} alt="soccer-image" />
                    <img src={fitness_image1} alt="soccer-image" />
                </div>
                <div className="fitness-section2">
                    <h3>Why Choose BWC Fitness?</h3>
                    <p>At BWC Fitness, we believe that fitness is for everyone, regardless of age, ability, or experience. Our program, located at the state-of-the-art Inoxx Fitness facility, offers a welcoming environment with top-tier equipment and personalized training that’s tailored to your individual needs.</p>
            
                </div>

                <Features color="#474d52" Icon1={PCBIcon} Icon2={FGSBIcon} Icon3={TNFBIcon}/>

                <div className="fitness-section3">
                    <h3>What We Offer</h3>
                    <p>Our training programs are designed to cover all key aspects of track and field, ensuring that each athlete develops the skills needed for success:</p>
                    <div className="fitness-section3-image-container">
                        <div><span className="skill-text-overlay">Strength Training</span><img src={stock_photo} alt="Dribbling" /></div>
                        <div><span className="skill-text-overlay">Agility Drills</span><img src={stock_photo} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Cardio Conditioning</span><img src={stock_photo} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Flexibility</span><img src={stock_photo} alt="Defense" /></div>
                        
                    </div>
                </div>
                <div className="fitness-section2">
                    <h3>Train in a State-of-the-Art Facility</h3>
                    <p>Located at Intoxx Fitness, our program gives you access to top-of-the-line equipment in a clean, modern, and motivating environment. We’ve got everything you need to power through your workouts, from advanced strength machines to versatile functional training areas.</p>
            
                </div>
                
                <div className="testimonial-container">
                    <h1 className="testimonial-header">Hear from Our fitnessing Community</h1>
                </div>
                <Testimonial />
                <div className="fitness-booking-container2">
                    <div className="fitness-booking-container-details">
                        <h3>Ready To Play fitness?</h3>
                        <p>The greens are calling! Don’t wait—join our program and discover just how much fun golf can be. Slots are limited, so grab your spot now and start swinging with confidence!</p>
                        <p><strong>Join the Team Now</strong> – Let’s make this season your best one yet!</p>
                    </div>
                    <div className="fitness-booking-container inside-booking-container">
                        <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule for Classes Here</button>
                        <button className="one-on-one fitness-booking-selected">Sign Up for Classes Here</button>
                    </div>
                </div>
                <div className="fitness-booking-container outside-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one fitness-booking-selected">Sign Up for Classes Here</button>
                </div>

                <div className="fitness-section4" style={{alignItems:"center"}}>
                    <h3>WHY BWC FITNESS?</h3>
                    <p>BWC Fitness stands out for our personalized approach and dedication to making fitness accessible and effective for everyone. We’re not just about lifting weights; we’re about lifting your confidence, energy, and quality of life.</p>
                </div>
                <div className="fitness-locations">
                    <h3>Locations</h3>
                    <div className="fitness-location-container">
                        <div class="ss-card">
                            <img src="https://todocodigo.net/img/626.jpg" alt="Image" />
                            <div class="ss-card-description"><p><strong>Holy Family</strong>, New York</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
