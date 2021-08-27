import React from 'react';
import { Link } from 'react-router-dom';

const navigationObj = {
  ksd: "Kapaya SD",
  home: "Home",
  animation: "Animation",
  web: "WebDesign"
}
//console.log(navigationObj)

const Header = () => {
  return (
    <div id="nav-div">
      <div className="content-wrapper">
        <nav id="navigation">
          <div id="nav-title">
            <h1 id="ksd-nav">{navigationObj.ksd}</h1>
          </div>
          <div id="nav-ul">
           <Link to="/" className="link-nav">{navigationObj.home}</Link>
           <Link to="/animation" className="link-nav">{navigationObj.animation}</Link>
           <Link to="/web" className="link-nav">{navigationObj.web}</Link>
          </div>
          
        </nav>
      </div>
    </div>
  )
}
  
  
export default Header;