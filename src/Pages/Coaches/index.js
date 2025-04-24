import React from "react";
import "./style.css";
import Navbar from "../../Components/NavbarCustom";
import Banner from "../../Components/Coaches/Banner";
import Footer from "../../Components/Footer";
import Grid from "../../Components/Coaches/Grid";

function App() {
  return (
    <div className="App">
      
      <Banner />
      <div className="coaches-text">
        <p className="coaches-line1">
          Meet the passionate and experienced coaches who are dedicated to
          helping your
        </p>
        <p className="coaches-line2">
          child grow, learn, and shine through sports.
        </p>
      </div>
      <Grid />
      
    </div>
  );
}

export default App;
