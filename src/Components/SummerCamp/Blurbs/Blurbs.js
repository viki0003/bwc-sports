import React from "react";
import BlurbImage from "../../../Assets/Images/Football-wave.png";
import "./Blurbs.css";

const Blurbs = () => {
    return (
        <>
        <div className="sp-blurbs scp-blurbs">
            <p>
                Our summer camp and clinics are designed to provide children with a fun, safe, and enriching environment where they can explore new activities, develop skills, and make lasting friendships.
            </p>
            <div class="scp-blurb-container">
                <div class="scp-blurb-container-item blue">BWC Baseball Summer Camp at Ferryhawks</div>
                <div class="scp-blurb-container-item yellow">Sports & Rec Summer Camp at I.S. 34</div>
                <div class="scp-blurb-container-item green">BWC Soccer Summer Camp</div>
                <div class="scp-blurb-container-item red">Sports & Rec Summer Camp at MSI MCCOWN</div>
            </div>
            <div className="variety-header">
                <h2>Why Choose Us?</h2>
            </div>
            <div className="variety-description">
                <p>At BWC, we believe in creating experiences that children will remember for a lifetime. Our summer camp and clinics are not just about keeping kids busy; they are about inspiring them to explore their interests, challenge themselves, and grow in a community of peers.</p>
                <p>Join us for a summer filled with adventure, learning, and fun! For more information and to enroll, contact us at (347) 212-0028.</p>
            </div>
            <hr className="scp-blurbs-hr"/>
        </div>
        
        </>
    );
};
export default Blurbs;
