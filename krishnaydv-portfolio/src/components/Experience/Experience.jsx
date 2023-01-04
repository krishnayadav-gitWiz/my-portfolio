import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import Webstrom from '../../img/webstrom.jpg'
import Eclipse from '../../img/eclipse.png'
import Vscode from '../../img/vscode.jpg'
import Pycharm from '../../img/pycharm.jpg'
import Sts from '../../img/sts.jpg'
import Mysql from '../../img/sql.png'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
          <img src={Eclipse} alt="" />
        </div>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
          <img src={Pycharm} alt="" />
        </div>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
          <img src={Sts} alt="" />
        </div>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
          <img src={Vscode} alt="" />
        </div>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
          <img src={Mysql} alt="" />
        </div>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
          <img src={Webstrom} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Experience;
