import React from "react";
import SportsGrid from "../../Components/Instruction/SportGrid";
import Banner from "../../Components/Instruction/Banner";
import Navbar from "../../Components/NavbarCustom";
import OneOnOne from "../../Components/Instruction/OneOnOne";
import GroupSession from "../../Components/Instruction/GroupSession";
import SportsProgram from "../../Components/Instruction/Plans";
import Locations from "../../Components/Instruction/Location";
import Class from "../../Components/Instruction/GroupClass";
import Footer from "../../Components/Footer";
import "./style.css"; 

function App() {
  return (
    <div className="App">
      
      <Banner />
      <SportsGrid />

      <div className="signup-text">
        To sign up for instructional classes, visit the specific sport page that
        you are interested in. Each sport has individual and group class
        options.
      </div>
      <div className="learn-more-text">
        Learn more about Our Sessions<span className="arrow-down">↓</span>
      </div>
      <OneOnOne />
      <GroupSession />
      <SportsProgram />
      <Locations />
      <Class />
      

    </div>
  );
}

export default App;
