import React from 'react';
import footerObj from "./FooterData";

const FooterHere = () => {
  return(
    <footer>
      <div className="content-wrapper">
        <ul id="footer-list">
          <li className="footer-list">
            <i className="fas fa-phone">{footerObj.phone}</i>
          </li>
          <li className="footer-list">
            <i className="fab fa-twitter"><a href="https://twitter.com/home">{footerObj.twitter}</a></i>
          </li>

          <li className="footer-list">
            <i className="fab fa-facebook">
              <a href="https://www.facebook.com/kisshotacerolaorionheartunderb">
                {footerObj.facebook}
              </a>
            </i>
          </li>

          <li className="footer-list">
            <i className="fas fa-envelope-open-text">
              <a href="mailto:silvermistmuse@protonmail.com">
                {footerObj.emailMe}
              </a>
            </i>
          </li>

          <li>
            <a href="">About Us</a>
          </li>
        </ul>
        
        <div id="made-by"><span>&copy;{footerObj.made}</span>
          <a href="https://www.linkedin.com/in/yvesarthur/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterHere;