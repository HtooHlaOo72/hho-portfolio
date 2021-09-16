import React from "react";

import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Achievements from "./Achievements";
import Projects from "./Projects";
import Skills from "./Skills";

class Box extends React.Component {
  render() {
    return (
      <>
        <div className="container bg-secondary">
          <Nav />
          <Home />
          <Achievements />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </>
    );
  }
}

export default Box;
