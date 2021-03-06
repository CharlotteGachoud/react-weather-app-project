import React from "react";
import "./Footer.css";

function Footer(){
  return(
    <div className="Footer">
      <div className="code-by">
        <a href="https://github.com/CharlotteGachoud/react-weather-app-project" className="open-source-link" target="_blank" rel="noreferrer">
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://www.linkedin.com/in/charlotte-gachoud-5210811b9/" target="_blank" rel="noreferrer" className="author-link">
            Charlotte Gachoud
        </a>
      </div>
        <div className="icon-credit">
        <a href="https://www.amcharts.com/free-animated-svg-weather-icons/" target="_blank" rel="noreferrer" className="icon-link">Weather icons</a> by{" "}
         <a href="https://www.amcharts.com/" target="_blank" rel="noreferrer" className="link">amCharts</a>
        </div>
    </div>
  )
}

export default Footer;