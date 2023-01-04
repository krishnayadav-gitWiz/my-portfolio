import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Citiustech from "../../img/citiustech.jpg";
import Mosambee from "../../img/mosambee.jpg";
import Codingninja from "../../img/codingninja.jpg";
import Aakar from "../../img/aakar.jpg";
import Cbse from "../../img/cbse.jpg";
import Akgec from "../../img/akgec.jpg";
import Devslane from "../../img/devslane.jpg";
import Allen from "../../img/allen.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",

  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>MILESTONES</span>
        <span style={{ color: darkMode ? "white" : "" }}>Career Path Timeline</span>
        <spane style={{ color: darkMode ? "white" : "" }}>
          A quick recap of my Journey...
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Resume</button>
        </a>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Citiustech}
            heading={"CitiusTech"}
            detail={" Software Engineer" +
              +"Working on Insurance claim settlements for USA-based patients & citizens.Working on Insurance claim settlements for USA-based patients & citizens."
              + "Skills: Java backend, Angular/React, MySQL  Full-time"}
            duration={"Nov21-present"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          duration={"Nov21-present"}
        >
          <Card
            emoji={Mosambee}
            heading={"Synergistic Financial Networks(Mosambee)"}
            detail={"Skills: Java backend  Part-time"}
            duration={"Sep21-Oct21"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "20rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Codingninja}
            heading={"Teaching Assistant (Java)-TA"}
            detail={
              "Taking live hand-on doubts regarding DSA (Career Camp) in JAVA."
            }
            color="rgba(252, 166, 31, 0.45)"
            duration={"Jul21-Sep21"}
          />
        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ top: "20rem", left: "-11rem" }}
          whileInView={{ left: "-25rem" }}
          transition={transition}
        >
          <Card
            emoji={Codingninja}
            heading={"Teaching Assistant (Python)-TA"}
            detail={
              "Taking live hand-on doubtsregarding Data Structures and Algorithms in Python."
            }
            color="rgba(252, 166, 31, 0.45)"
            duration={"Jan21-May21"}
          />
        </motion.div>
        {/* 5th */}
        <motion.div
          initial={{ top: "30rem", left: "10rem" }}
          whileInView={{ left: "-5rem" }}
          transition={transition}
        >
          <Card
            emoji={Aakar}
            heading={"Campus Ambassador"}
            detail={
              "Aakaar, IIT Bombay · Internship."
            }
            color="rgba(252, 166, 31, 0.45)"
            duration={"Feb21-Mar21"}
          />
        </motion.div>
        {/* 6th */}
        <motion.div
          initial={{ top: "40rem", left: "-5rem" }}
          whileInView={{ left: "-25rem" }}
          transition={transition}
        >
          <Card
            emoji={Devslane}
            heading={"Frontend Web Developer"}
            detail={
              "Worked on HTML5, CSS3, JS (angular-9) · Internship."
            }
            color="rgba(252, 166, 31, 0.45)"
            duration={"May19-Nov19"}
          />
        </motion.div>
        {/* 7th */}
        <motion.div
          initial={{ top: "40rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Akgec}
            heading={"AKGEC- Ghaziabad"}
            detail={
              "BTech - Bachelor of Technology, Electronics and Communications Engineering."
            }
            color="rgba(252, 166, 31, 0.45)"
            duration={"Jul17-Aug21"}
          />
        </motion.div>
        {/* 8th */}
        <motion.div
          initial={{ top: "50rem", left: "10rem" }}
          whileInView={{ left: "-5rem" }}
          transition={transition}
        >

          <Card
            emoji={Allen}
            heading={"ALLEN CAREER INSTITUTE"}
            detail={
              "IIT-JEE Prepration after 10+2."
            }
            color="rgba(252, 166, 31, 0.45)"
            duration={"May16-Feb17"}
          />
        </motion.div>
        {/* 9th */}
        <motion.div
          initial={{ top: "60rem", left: "-5rem" }}
          whileInView={{ left: "-25rem" }}
          transition={transition}
        >
          <Card
            emoji={Cbse}
            heading={"JDPS - Bhadohi"}
            detail={
              "10th in Science, 12th PCM."
            }
            color="rgba(252, 166, 31, 0.45)"
            duration={"May13-Jul16"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
