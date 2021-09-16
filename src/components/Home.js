import React from "react";

const Home = (props) => {
  return (
    <div className="row bg-dark " id="home">
      <div
        className="col-sm-6 col-md-6 col-12  bg-dark my-auto"
        id="profile-box"
      >
        <img
          src={`/images/profile.jpg`}
          id="profile_img"
          alt="profile"
          className="img-fluid "
        />
      </div>
      <div
        className="col-sm-6 col-md-6 col-12 bg-dark d-flex flex-column justify-content-center text-left"
        id="home_text"
      >
        <h3 className="fs-3 text-secondary mb-5">I'm Htoo Hla Oo</h3>
        <h3 className="fs-5 " id="moto">
          A Computer Science Student
          <br />
          Currently learning "React" and "JS" to be a skillfull web developer.
        </h3>
      </div>
    </div>
  );
};

export default Home;
