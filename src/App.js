import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
const anchors = ["About", "Portfolio", "Resume", "Contact"];

const App = () => (
  <ReactFullpage
    licenseKey={"62K98-EQG1I-CI51I-J4J7H-YMSUP"}
    scrollingSpeed={1000} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#003f63", "#28666e", "#7c9885", "#003f63"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section">
            <h3>Kyle Reynolds</h3>
            <About/>
          </div>
          <div className="section">
            <h3>Portfolio</h3>
            <Portfolio/>
          </div>
          <div className="section">
            <h3>Resume</h3>
            <Resume/>
          </div>
          <div className="section">
            <h3>Contact</h3>
            <Contact/>
          </div>
        </div>
      );
    }}
  />
);
export default App;
