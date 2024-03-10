import React from 'react';
import './footer.css'; 
import { Link } from 'react-router-dom';
import { urlLogoFooter } from '../utils/global.context';


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* <div className="right">
          <img src="./img/instagram.png" alt="Instagram" />
          <img src="./img/facebook.png" alt="Facebook" />
          <img src="./img/youtube.png" alt="YouTube" />
          <img src="./img/whatsapp.png" alt="WhatsApp" />
        </div> */}
        <div className="left">
        <div className="logo"><img src={urlLogoFooter} alt="Logo" /></div>
          <div className="copy"> <p>Copyright © 2024</p></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
