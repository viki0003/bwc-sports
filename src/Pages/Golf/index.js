import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import './style.css'
import golf_image1 from '../../Assets/Images/golf_image1.png';
import golf_image2 from '../../Assets/Images/golf_image2.png';
import golf_image3 from '../../Assets/Images/golf_image3.png';

import golf_banner_image from '../../Assets/Images/golf_banner_image.png'

import Testimonial from '../../Components/Testimonial';
import dribbling from '../../Assets/Images/dribbling.png'
import shooting from '../../Assets/Images/shooting.png'
import passing from '../../Assets/Images/passing.png'
import defense from '../../Assets/Images/defense.png'
import PCIcon from '../../Assets/Icons/PCIcon';
import FGSIcon from '../../Assets/Icons/FGSIcon';
import TNFIcon from '../../Assets/Icons/TNFIcon';
import rebounding from '../../Assets/Images/rebounding.png'
import stock_photo from '../../Assets/Images/stock_photo.png';
import soccer_trainer1 from '../../Assets/Images/basketball_trainer1.png'
import soccer_trainer2 from '../../Assets/Images/basketball_trainer2.png'
import soccer_trainer3 from '../../Assets/Images/basketball_trainer3.png'
import Features from '../../Components/Features';


export default function Golf() {
    return (
        <>
            <div className="golf-container">
                <div className="golf-header">
                    <div>
                        <span className="golf-backIcon"><BackIcon /></span>
                    </div>
                    <div className="golf-header-content">

                        <h1>Golf</h1>
                        <h3>Get Ready to Tee Off with Staten Island’s Most Exciting Golf Program</h3>
                        <p>Whether you’re a seasoned pro or picking up a club for the first time, there’s always room to perfect your swing. That’s why Marseille Golf and BWC Sports have teamed up to bring you a golf experience that’s as fun as it is challenging. It’s time to elevate your game and have a blast doing it!</p>

                    </div>
                </div>
                <div className="golf-booking-container">
                    {/* <button className="one-on-one">Schedule 1-on-1 Class Here</button> */}
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one golf-booking-selected">Sign Up for Classes Here</button>
                </div>
                <div className="golf-image-container">
                    <img src={golf_image1} alt="soccer-image" />
                    <img src={golf_image2} alt="soccer-image" />
                    <img src={golf_image3} alt="soccer-image" />
                    <img src={golf_image1} alt="soccer-image" />
                </div>
                <div className="golf-section2">
                    <h3>Why Golf with Us?</h3>
                    <p>Golf isn’t just about sinking putts—it’s about enjoying the journey, one swing at a time. With Marseille Golf and BWC Sports, you’ll find a program that blends expert coaching, cutting-edge technology, and an atmosphere that makes every session something to look forward to.</p>
            
                </div>
                <Features color="#13c900" Icon1={PCIcon} Icon2={FGSIcon} Icon3={TNFIcon}/>

                <div className="golf-section3">
                    <h3>Programs That Make Champions</h3>
                    <p>Our training programs are designed to cover all key aspects of track and field, ensuring that each athlete develops the skills needed for success:</p>
                    <div className="golf-section3-image-container">
                        <div><span className="skill-text-overlay">Driving</span><img src={stock_photo} alt="Dribbling" /></div>
                        <div><span className="skill-text-overlay">Iron Play</span><img src={stock_photo} alt="Shooting" /></div>
                        <div><span className="skill-text-overlay">Putting</span><img src={stock_photo} alt="Passing" /></div>
                        <div><span className="skill-text-overlay">Chipping</span><img src={stock_photo} alt="Defense" /></div>
                        <div><span className="skill-text-overlay">Bunker Play</span><img src={stock_photo} alt="Rebounding" /></div>
                    </div>
                </div>
                
                <div className="testimonial-container">
                    <h1 className="testimonial-header">Hear from Our Golfing Community</h1>
                </div>
                <Testimonial />
                <div className="golf-booking-container2">
                    <div className="golf-booking-container-details">
                        <h3>Ready To Play golf?</h3>
                        <p>Don’t let this opportunity pass you by! Whether your child is new to the game or a seasoned player, BWC golf offers the perfect environment to learn, grow, and have fun. Sign up today and watch them step up to the plate with confidence!</p>
                        <p><strong>Join the Team Now</strong> – Let’s make this season your best one yet!</p>
                    </div>
                    <div className="golf-booking-container inside-booking-container">
                        <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                        <button className="one-on-one">Schedule for Classes Here</button>
                        <button className="one-on-one golf-booking-selected">Sign Up for Classes Here</button>
                    </div>
                </div>
                <div className="golf-booking-container outside-booking-container">
                    <button className="one-on-one">Schedule 1-on-1 Class Here</button>
                    <button className="one-on-one">Schedule for Classes Here</button>
                    <button className="one-on-one golf-booking-selected">Sign Up for Classes Here</button>
                </div>

                <div className="golf-section4" style={{alignItems:"center"}}>
                    <h3>The Power of Partnership</h3>
                    <p>At Marseille Golf, we’re passionate about making golf accessible, enjoyable, and rewarding. By partnering with BWC Sports, we’re able to offer a program that’s second to none. Together, we’re not just teaching golf—we’re building a community of enthusiastic players who know how to have fun while getting better.</p>
                </div>
                <div className="golf-locations">
                    <h3>Locations</h3>
                    <div className="golf-location-container">
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
