import React from "react";
import Header from "./Nav";
import FooterHere from "./Footer";
import sectionData from "./MainSectionData";


const Animation = () => {
    return(
      <div>
        <div id="animation-component" className="about-component">
          <Header />
        </div>
        <div className="content-wrapper">
          <div id="animation-grid-div">
            <h2>KSD Animation</h2>
            <iframe src={`https://www.youtube.com/embed/${sectionData.videoId}`}
              allow='encrypted-media'
              frameBorder='0'
              allowFullScreen
              title="Spot Covid"/>
          </div>
        </div>
        <FooterHere />
      </div>
    )
  }

  export default Animation;