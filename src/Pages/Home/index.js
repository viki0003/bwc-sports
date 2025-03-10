import React from "react";
import EventCard from "../../Components/EventCard";
import EllipseCard from "../../Components/EllipseCard";
import ellipse1 from '../../Assets/Images/ellipse1.png'
import ellipse2 from '../../Assets/Images/ellipse2.png'
import ellipse3 from '../../Assets/Images/ellipse3.png'
import ellipse4 from '../../Assets/Images/ellipse4.png'
import ellipse5 from '../../Assets/Images/ellipse5.png'
import ellipse6 from '../../Assets/Images/ellipse6.png'
import './style.css'
import HomeMenuIcon from "../../Assets/Icons/HomeMenuIcon";
import OurServices from "../../Components/Home/OurServices/OurServices";
import MissionStatement from "../../Components/Home/MissionStatement/MissionStatement";

const Home = () => {
  return (
    <>

      <div className="home-container">
        <div className="home-banner">
          <div className="home-left-banner">
            <h1>Unlock Your True Potential with <span>Judgment-Free</span> Sports</h1>
            <p>From beginners to advanced players, we foster growth in a supportive, judgment-free environment.</p>
            <button>View All Packages</button>
          </div>
        </div>
        {/* <div className="home-menu-container">
          <div className="home-menu-items">
            <div className="home-menu-child circle-1"><EllipseCard imageSrc={ellipse1} text={"Field Days Carnivals"} /></div>
            <div className="home-menu-child circle-2"><EllipseCard imageSrc={ellipse2} text={"Instructional Classes"} /></div>
            <div className="home-menu-child circle-3"><EllipseCard imageSrc={ellipse3} text={"Summer Camp"} /></div>
            <div className="home-menu-child circle-4"><EllipseCard imageSrc={ellipse4} text={"School Program"} /></div>
            <div className="home-menu-child circle-5"><EllipseCard imageSrc={ellipse5} text={"After School Programs"} /></div>
            <div className="home-menu-child circle-6"><EllipseCard imageSrc={ellipse6} text={"Funding Program"} /></div>
          </div>
          <div className="home-menu-box">
            <div className="home-menu-header"><h1>What we offer</h1></div>
            <div className="home-menu-box-description">
              <div className="home-menu-box-items">
                <HomeMenuIcon/><p>Quality Sports Services</p>
              </div>
              <div className="home-menu-box-items">
              <HomeMenuIcon/><p>Multi Sports and Instructions</p>
              </div>
              <div className="home-menu-box-items">
              <HomeMenuIcon/><p>Judgement Free</p>
              </div>
              <div className="home-menu-box-items">
              <HomeMenuIcon/><p>DOE Vendor</p>
              </div>
              <div className="home-menu-box-items">
              <HomeMenuIcon/><p>State of the Art Facilities</p>
              </div>
            </div>
            <button className="home-menu-button">See Upcoming Events</button>
          </div>

        </div> */}
        <OurServices/>
        <MissionStatement />
        {/* <div className="home-mission-container">
          <div className="home-mission-card">
            <div className="home-mission-left">
              <h1>Mission Statement</h1>
              <p>Because We Can is dedicated to providing all players with a supportive and judgment-free environment where they can learn and master the fundamentals of sports. Our mission is to foster a positive and inclusive atmotsphere that encourages growth, teamwork, and a lifelong passion for athletics.</p>

            </div>
            <div className="home-mission-right">
              <div className="video-container">

              </div>
            </div>
          </div>
        </div> */}
        <div className="upcoming-event-container">
          <div className="upcoming-event-header">
            <h1>Upcoming Events</h1>
          </div>
          <div className="upcoming-event-cards">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>

      </div>
    </>
  );
};
export default Home;
