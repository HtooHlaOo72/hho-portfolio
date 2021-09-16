import React from "react";

const Proj = (props) => {
  return (
    <div className="card">
      {/* <img src={props.src} className="card-img-top" alt={props.title||'...'} /> */}
      {/* <div className="ratio ratio-1x1">
        <iframe className="embed-responsive-item" src={props.src} title={props.title}></iframe>
      </div> */}

      {/* <iframe src={props.src} className="proj_frame" title={props.title}></iframe> */}
      <h5 className="card-header">{props.title || "My Project"}</h5>
      <div className="card-body bg-dark text-light">
        <p className="card-text">
          {props.content || "This is my project about something."}
        </p>
        <a href={props.src} className="btn btn-light">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Proj;
