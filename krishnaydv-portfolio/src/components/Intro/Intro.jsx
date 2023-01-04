import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
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
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello 👋</span>
          <span style={{ color: darkMode ? "white" : "" }}>I am Krishna Yadav</span>
          <span style={{ color: darkMode ? "gray" : "" }}>
            Junior full-stack developer
          </span>
          <span>
            from XX21 with hands-on experience developing scalable websites and applications using a variety of front-end and back-end skills such as HTML, CSS, JavaScript, Java (Spring Boot), and so on. developed some websites from scratch, looking to further enhance & learn more skills as a future full-stack developer.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button" id="Contact">Let's Talk</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
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
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-10%" }}
          whileInView={{ left: "22%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <div className="blur" style={{ background: "rgb(238 200 255)" }}></div>
      </div>
    </div>
  );
};
export default Intro;
