import React from "react";

//icons
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";

export default function Skills() {
  return (
    <div className="row ">
      <div className="">
        <h2>Skillsets</h2>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>HTML</span>
        <div className="skill-icon">
          <DiHtml5 />
        </div>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>CSS</span>
        <div className="skill-icon">
          <DiCss3 />
        </div>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>Bootstrap</span>
        <div className="skill-icon">
          <DiBootstrap />
        </div>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>Javascript</span>
        <div className="skill-icon">
          <DiJavascript1 />
        </div>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>React</span>
        <div className="skill-icon">
          <DiReact />
        </div>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>Node</span>
        <div className="skill-icon">
          <DiNodejs />
        </div>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>MongoDb</span>
        <div className="skill-icon">
          <DiMongodb />
        </div>
      </div>
      <div className="col-4  my-3 skill-item">
        <span>Python</span>
        <div className="skill-icon">
          <DiPython />
        </div>
      </div>
      <div className="col-4 my-3 skill-item">
        <span>Git</span>
        <div className="skill-icon">
          <DiGit />
        </div>
      </div>
    </div>
  );
}
