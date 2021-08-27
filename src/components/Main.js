import React from 'react';
import sectionData from "./MainSectionData";
import Header from './Nav';

const MainSection = (props) => {
  return(
    <section id="main-section">
      <div id="background-scope">
        <Header navigation={props.navigationObj}/>

        <div className="content-wrapper">
          <div id="deco-div"></div>
          <h1 id="title">{sectionData.title}</h1>
        </div>
        
        {/**Project and Team */}
        <div id="ksd-project-div">
          <div id="animation" className="ksd-project">
          
          </div>

          <div id="web-design" className="ksd-project">
            
          </div>
        </div>
      </div>
      

        <div id="team">
          <h1>{sectionData.team}</h1>
        </div>

        {/**Co-Founders */}
        <div id="co-founders-div">
          <div id="img-co-founders" className="content-wrapper">
            <div>
              <img src={sectionData.picture.rene} alt="René Kapaya Co Founder and Graphic Designer" />
              <h3>René Kapaya</h3>
              <p>Co Founder and Graphic Designer</p>
            </div>

            <div>
              <img src={sectionData.picture.yves} alt="Yves Arthur Co Founder and Developer" />
              <h3>Yves Arthur</h3>
              <p>Co Founder and Developer</p>
            </div>

            <div>
              <img src={sectionData.picture.eric} alt="Éric Kapaya Co Founder and Marketing Manager" />
              <h3>Éric Kapaya</h3>
              <p>Co Founder and Marketing Manager</p>
            </div>
          </div>
        </div>
      
  


    </section>
  )
}

export default MainSection;