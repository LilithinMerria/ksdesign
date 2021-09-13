import React from "react";
import Header from "./Nav";
import FooterHere from "./Footer";

const WebDesign = () => {
    return(
      <div>
        <div id="web-component" className="about-component">
          <Header />
        </div>
        <div className="content-wrapper">
          <div id="our-works">
            <h2 id="our-work-title">Our works</h2>
            <a href="" id="ksd-grid-item2"></a>
            <a href="https://silver-muse.web.app/" id="ksd-grid-item3"></a>
            <a href="https://mygarden-54713.web.app/flower" id="ksd-grid-item4"></a>

          </div>
        </div>
        <FooterHere />
      </div>
    )
  }

  export default WebDesign;