import React from "react";
import Header from "./Nav";
import FooterHere from "./Footer";

const about = 
"Kapaya Studio Design is a Studio Company that provides Graphic and Web Design services at affordable prices."

const AboutUs = () => {
  return(
    <div>
      <div id="about-component" className="about-component">
        <Header />
      </div>
      <div className="content-wrapper">
        <h2>{about}</h2>
      </div>
      <FooterHere />
    </div>
  )
}

export default AboutUs;
