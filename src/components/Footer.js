import React from 'react';
import { Link } from 'react-router-dom';
import footerObj from "./FooterData";

const FooterHere = () => {
  return(
    <footer>
      <div className="content-wrapper" id="footer-flex">
         {/*Contact Section */}
        <div id="contact">
          <h2>{footerObj.footerContact.contact}</h2>
          
          <ul className="footer-list-ul">
              <li className="footer-list"><i className="fas fa-phone icons"></i> <br/>
                {footerObj.footerContact.telephone1} <br/>
                {footerObj.footerContact.telephone2} <br/>
                {footerObj.footerContact.telephone3}
              </li>
              <li className="footer-list">
                <a href="mailto:kapayastudio@protonmail.com"className="a-visited">
                  <i className="fas fa-envelope-open-text icons"></i>
                  {footerObj.footerContact.email}
                </a>
              </li>
            </ul>
          </div>

       {/*Follow-Us Section */}
        <div id="follow-us">
          <h2>FOLLOW US ON:</h2>
          <ul>
           <li className="footer-list">
              <i className="fab fa-twitter icons"></i>
              <a href="https://twitter.com/home">{footerObj.twitter}</a>
            </li>

            <li className="footer-list">
              <i className="fab fa-facebook icons"></i>
              <a href="https://www.facebook.com/kisshotacerolaorionheartunderb">
                  {footerObj.facebook}
              </a>
            </li>
          </ul>

        </div>

         {/*About-Us Section */}
        <div id="about-us">
          <h2>MORE ABOUT US</h2>
          <nav>
            <Link to="/about">About Us</Link>
          </nav>
        </div>
      </div>

      <div id="made-by"><span>&copy;{footerObj.made}</span>
        <a href="https://www.linkedin.com/in/yvesarthur/">
          <i className="fab fa-linkedin icons"></i>
        </a>
      </div>
    </footer>
  )
}

export default FooterHere;