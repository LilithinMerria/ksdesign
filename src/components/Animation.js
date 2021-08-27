import React from "react";
import Header from "./Nav";
import FooterHere from "./Footer";

const Animation = () => {
    return(
      <div>
        <div id="animation-component" className="about-component">
          <Header />
        </div>
        <div className="content-wrapper">
          <h2>Coming Soon</h2>
        </div>
        <FooterHere />
      </div>
    )
  }

  export default Animation;