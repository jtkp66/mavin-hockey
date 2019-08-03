import React from "react";

import Directory from "../../components/directory/directory.component";
import SocialMedia from "../../components/social-media-section/social-media.component";
import logo from "../../img/logomvn.png";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="after">
      <div className="showcase">
        <img className="mvnlogo" src={logo} alt="Logo" />
        <hr />
        <p>A HOCKEY COMPANY WITH A SOUL</p>
        <hr />
      </div>
      <Directory />
      <SocialMedia />
    </div>
  </div>
);

export default HomePage;
