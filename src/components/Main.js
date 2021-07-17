import React from 'react';
import sectionData from "./MainSectionData";

const MainSection = () => {
  return(
    <section id="main-section">
      <div className="content-wrapper">
        <div id="deco-div"></div>
        <h1 id="title">{sectionData.title}</h1>

        <div id="ksd-project-div">
          <div id="animation" className="ksd-project">
          
          </div>

          <div id="web-design" className="ksd-project">
            
          </div>
        </div>

        <div id="team">
          <h1>{sectionData.team}</h1>
        </div>

        <div id="img-co-founders">
          <div>
            <img src={sectionData.picture.rene} alt="René Kapaya Co Founder and Artist" />
            <h3>René Kapaya</h3>
            <p>Co Founder and Artist</p>
          </div>

          <div>
            <img src={sectionData.picture.yves} alt="Yves Arthur Co Founder and Developer" />
            <h3>Yves Arthur</h3>
            <p>Co Founder and Developer</p>
          </div>

          <div>
            <img src={sectionData.picture.eric} alt="Éric Kapaya Co Founder and Marketing" />
            <h3>Éric Kapaya</h3>
            <p>Co Founder and Marketing</p>
          </div>
        </div>
      </div>
  


    </section>
  )
}

export default MainSection;