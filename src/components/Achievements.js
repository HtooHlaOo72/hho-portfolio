import React from "react";

import Certificate from "./Certificate";

const Achievements = (props) => {
  const certi = [
    {
      certi_src: "/images/Certificates/python_certificate.jpg",
      certi_label: "Python Basic",
      certi_description: "A python course from Sarlotepar Institute"
    },
    {
      certi_src: "/images/Certificates/udemy1.jpg",
      certi_label: "Python Basic",
      certi_description: "A python course from Sarlotepar Institute"
    },
    {
      certi_src: "/images/Certificates/udemy2.jpg",
      certi_label: "Python Basic",
      certi_description: "A python course from Sarlotepar Institute"
    },
    {
      certi_src: "/images/Certificates/udemy3.jpg",
      certi_label: "Python Basic",
      certi_description: "A python course from Sarlotepar Institute"
    },
    {
      certi_src: "/images/Certificates/udemy4.jpg",
      certi_label: "Python Basic",
      certi_description: "A python course from Sarlotepar Institute"
    }
  ];

  const CarouselIndicators = (props) =>
    certi.map((item, i) => {
      return i === 1 ? (
        <button
          key={i}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={i}
          className="bg-dark active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
      ) : (
        <button
          key={i}
          type="button"
          className="bg-dark"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={i}
          aria-label={`Slide ${i}`}
        ></button>
      );
    });

  const CarouselItems = (props) =>
    certi.map((item, i) => (
      <div
        key={i}
        className={i === 1 ? "carousel-item active" : "carousel-item"}
      >
        <img src={item.certi_src} className="d-block w-100" alt="..." />
      </div>
    ));
  return (
    <div className="row bg-dark" id="achievements">
      <h3 className="fw-bold text-light py-3 ">Learning Path</h3>
      <div className="col-12">
        <div className="">
          <a
            className="btn btn-light my-3 border border-5 border-secondary w-100"
            href="www.google.com"
          >
            Freecodecamp Frontend Libraries Certification
          </a>
        </div>
        <div>
          <a
            className="btn btn-light my-3 border border-5 border-secondary w-100"
            href="www.google.com"
          >
            Freecodecamp Javascript Algorithms and Data Structures Certification
          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 d-flex flex-column justify-content-center mb-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <CarouselIndicators />
          </div>
          <div className="carousel-inner">
            <CarouselItems />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded py-4 px-3"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded py-4 px-3"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
        className="col-12 col-sm-6 text-light d-flex flex-column justify-content-center mb-5"
        id="achieve_text"
      >
        <h5 className="mb-5">"My Study Resources" </h5>
        <p className="">
          I learnt from freecodecamp, udemy, coursea, Sarlotepar Institute and
          Turing Programming Trainning Center
        </p>
      </div>
    </div>
  );
};

export default Achievements;
