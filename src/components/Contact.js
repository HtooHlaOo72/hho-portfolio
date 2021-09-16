import React from "react";

import { SiFacebook, SiCodesandbox, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <div className="row my-4" id="contact">
      <h4 className="fw-bold my-3 ">Contact me at!</h4>
      <div className="col-4 social-icon ">
        <a
          href="https://www.facebook.com/htoo.h.oo.921"
          title="_blank"
          className="text-dark"
        >
          <SiFacebook />
        </a>
      </div>
      <div className="col-4 social-icon">
        <a
          href="https://github.com/HtooHlaOo72"
          title="_blank"
          className="text-dark"
        >
          <SiGithub />
        </a>
      </div>
      <div className="col-4 social-icon">
        <a
          href="https://codesandbox.io/u/htoohlaoo7"
          title="_blank"
          className="text-dark"
        >
          <SiCodesandbox />
        </a>
      </div>
    </div>
  );
}
