import sectionData from "./mainSectionData";

const MainSection = () => {
  return(
    <section id="main-section" className="content-wrapper">
      <div id="deco-div"></div>
      <h1>{sectionData.title}</h1>

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
          <img src={sectionData.picture.Rene} alt="René Kapaya Co Founder and Artist" />
          <h3>René Kapaya</h3>
          <p>Co Founder and Artist</p>
        </div>

        <div>
          <img src={sectionData.picture.Yves} alt="Yves Arthur Co Founder and Developer" />
          <h3>Yves Arthur</h3>
          <p>Co Founder and Developer</p>
        </div>

        <div>
          <img src={sectionData.picture.Eric} alt="Éric Kapaya Co Founder and Marketing" />
          <h3>Éric Kapaya</h3>
          <p>Co Founder and Marketing</p>
        </div>
      </div>
  


    </section>
  )
}

export default MainSection;