import React from "react";
import "./style.css";
import Navbar from "../../Components/NavbarCustom";
import Banner from "../../Components/Fundraising/Banner";
import Footer from "../../Components/Footer";
import SwishContainer from "../../Components/Fundraising/SwishContainer";
import TestimonialCard from "../../Components/Fundraising/TestimonialCard";

function App() {
  return (
    <div className="App">
      
      <Banner />
      <div className="FundRaise-text">
        <p className="FundRaise-line1">
          SWISH & WISH - Transform Your School's Fundraising Game!
        </p>
        <p className="FundRaise-line2">
          The #1 way to fundraise For your school or PTA
        </p>
      </div>
      <SwishContainer />
      <TestimonialCard />
      
    </div>
  );
}

export default App;
