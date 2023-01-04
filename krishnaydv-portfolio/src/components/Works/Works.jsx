import React, { useContext } from "react";
import "./Works.css";
import Mysql from "../../img/mysql.png";
import Reactjs from "../../img/react.png";
import Java from "../../img/java.png";
import Angular from "../../img/angular.png";
import Python from "../../img/python.png";
import Pointing from "../../img/pointing.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  // const transition = {
  //   duration: 1,
  //   type: "spring",
  // };
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span style={{ color: darkMode ? "white" : "" }}>language & framework</span>
          <img style={{ height: '100px', width: '100px', marginLeft: '70%' }} src={Pointing} alt="" />
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button" id="Contact">Let's Talk</button>
          </Link>
        </div>
        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Python} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reactjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Java} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Angular} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mysql} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
