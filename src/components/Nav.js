import React from "react";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-light sticky-top py-0" id="navbar">
      <a className="navbar-brand" href="#home">
        <img src="/images/portfolio_logo.png" alt="portfolio" id="logo" />
      </a>
      <button
        className="navbar-toggler mr-5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#nav_contents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-end bg-dark"
        tabIndex="-1"
        id="nav_contents"
        aria-labelledby="navbarOffcanvas"
      >
        <div className="offcanvas-header bg-secondary">
          <div className="offcanvas-title text-dark">
            <h2 className="">Menu</h2>
          </div>
          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achievements">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
