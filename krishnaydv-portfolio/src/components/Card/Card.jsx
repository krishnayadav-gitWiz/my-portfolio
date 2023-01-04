import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";


const Card = ({emoji, heading, detail, color,duration}) => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" style={{marginBottom:'2px'}}/>
      <div style={{ color: darkMode ? "purple" : "" }} className="heading">{heading}</div>
      <span style={{ color: darkMode ? "gray" : "" }}>{detail}</span>
      <span style={{ color: darkMode ? "gray" : "" }}>{duration}</span>
    </div>
  );
};

export default Card;
