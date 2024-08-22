import React from 'react';
import gpt3Logo from '../../assets/logo.jpg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">These are just a few of the many reasons why I love you and a testament that i will always love you.</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>My Goddess</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p> Your beauty na my address, <br /> All Rights Reserved by Gozman Gonzalez</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>
          <a href="https://www.facebook.com/profile.php?id=100090492018672&mibextid=LQQJ4d">Facebook</a>
          </p>
        <p>
          <a href="https://www.instagram.com/megz_crafthub?igsh=MXBhdGNnYndqaGpkag==">Instagram </a>
          </p>
        <p>Whatsapp</p>
        <p>Email</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Moonnighttech</p>
        <p>+234 9035726385</p>
        <p>moonnighttech@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 moonnighttech. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;