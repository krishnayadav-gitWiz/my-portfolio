import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.jpg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";
import Behance from "../../img/behance.png";
import Dribble from "../../img/dribble.png";
import Reddit from "../../img/reddit.png";
import Pinterest from "../../img/pinterest.png";
import Discord from "../../img/discord.png";
import Facebook from "../../img/fb.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" />
      <div className="f-content">
        <span>krishna.coninja@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Krishna10798"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/krishna-ydv/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/krishna_yaduvanshi__/"><img src={Instagram} alt="" /></a>
          <a href="https://www.facebook.com/Krishna98yD"><img src={Facebook} alt="" /></a>
          <a href="https://discord.gg/4JTUFxSv"><img src={Discord} alt="" /></a>
          <a href="https://dribbble.com/KrishnayD"><img src={Dribble} alt="" /></a>
          <a href="https://behance.net/2e67fa1b"><img src={Behance} alt="" /></a>
          <a href="https://www.reddit.com/u/KrishnayD?utm_medium=android_app&utm_source=share"><img src={Reddit} alt="" /></a>
          <a href="http://pin.it/4Kr5vDH"><img src={Pinterest} alt="" /></a>
          <a href="https://twitter.com/It_sLeviosa?t=U2buzZuFM6P0qsqGjgM_Xw&s=09"><img src={Twitter} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
