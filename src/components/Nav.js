import React from 'react';

const navigation = ["Home", 
"Animation", "Webdesign"];

const navigationObj = navigation.map((nav, i) => ({id: i, title: nav}));

const Header = () => {
  return (
    <nav>
      <div className="content-wrapper">
        <div id="navigation">
          <div id="nav-title">
            <h1>Kapaya SD</h1>
          </div>
          
          <div id="nav-list">
            <ul>
            {navigationObj.map((nav) => <li key={nav.i}>{nav.title}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
  
  
export default Header;