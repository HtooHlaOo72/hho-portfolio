import React from "react";
import { projects } from "./data/projectsData";
import Proj from "./Proj";

const Projects = (props) => {
  return (
    <div className="row bg-secondary" id="projects">
      <h3 className="fw-bold ">My Own Works</h3>
      {projects.map((project, i) => (
        <div className="col-12 col-md-6 my-3 " key={i}>
          <Proj
            src={project.src}
            title={project.title}
            content={project.content}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
