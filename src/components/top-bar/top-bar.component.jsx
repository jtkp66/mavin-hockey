import React from "react";
import { Link } from "react-router-dom";

import "./top-bar.styles.scss";

const TopBar = ({ currentUser, hidden }) => (
  <div className="topbar">
    <Link className="logo-container" to="/" />
    <div className="options">
      <Link className="option fa fa-facebook" to="/shop" />
      <Link className="option fa fa-twitter" to="/shop" />
      <Link className="option fa fa-instagram" to="/shop" />
    </div>
  </div>
);

export default TopBar;
