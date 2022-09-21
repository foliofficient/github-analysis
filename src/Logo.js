import React from "react";
import logo from "./logo/header_logo.png";

export default () => (
  <div className={"box"}>
    <div className={"red"}>
      <img src={logo} height={"100px"} />
    </div>
    <div className={"logo-text"}>
      <h2>We are building some dashboards for the community.</h2>
      <h3>
        <a href={"mailto: dashboards@foliofficient.com"}>
          Want one for yours? Send an email with details.
        </a>
      </h3>
    </div>
  </div>
);
