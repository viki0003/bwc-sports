import React from "react";
import FeatureSection from "../../Components/BirthDay/FeatureButton";
import PartyForm from "../../Components/BirthDay/Form";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavbarCustom";
import "./style.css";

function BirthdayPage() {
  return (
    <div className="birthday-page">
      
      <section className="img-section-1"></section>

      <section className="hero-section">
        <h1>BIRTHDAY PARTIES</h1>
        <p className="subtitle">CELEBRATE YOUR BIRTHDAY WITH BWC SPORTS!</p>
        <p className="description">
          Make your birthday unforgettable with BWC Sports! We offer
          action-packed Basketball, Soccer, Football, & Bumper Ball birthday
          parties for sports lovers of all ages. Have a special request? Let us
          know, and we’ll do our best to accommodate your needs for a
          one-of-a-kind celebration!
        </p>
      </section>

      <FeatureSection />

      <section className="call-to-action-section">
        <h2>TELL US ABOUT YOUR DREAM PARTY!</h2>
        <p>
          <span className="highlight-line">
            FILL OUT THE FORM BELOW AND OUR TEAM WILL GET IN TOUCH TO HELP YOU
            PLAN AN UNFORGETTABLE BIRTHDAY CELEBRATION
          </span>
          &nbsp;PACKED WITH FUN, GAMES, AND MEMORIES!
        </p>
      </section>

      <PartyForm />

      
    </div>
  );
}

export default BirthdayPage;
