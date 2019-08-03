import React from "react";
import { Link } from "react-router-dom";
import Joel from "../../img/joel.JPG";

import "./social-media.styles.scss";

const SocialMedia = () => {
  return (
    <div className="container">
      <div className="title">
        <div className="head">
          <p className="social">Follow us on...</p>
        </div>{" "}
        <span>
          <Link className="option fa fa-instagram" to="/shop" />
        </span>
        <span>
          <Link className="option fa fa-twitter" to="/shop" />
        </span>
        <span>
          <Link className="option fa fa-facebook" to="/shop" />
        </span>
      </div>
      <div className="image">
        <div>
          <img
            src="https://scontent.cdninstagram.com/vp/73a915d15cadc573f4a3fc901c7a72a9/5DEE5443/t51.2885-15/sh0.08/e35/s640x640/66264898_1396766050471160_4342378570446678587_n.jpg?_nc_ht=scontent.cdninstagram.com"
            alt=""
            className="images"
          />
        </div>
        <div>
          <img src={Joel} alt="" className="images" />
        </div>
        <img
          src="https://scontent.cdninstagram.com/vp/edd962b556a31c26078b0f86544fa0e7/5DD81BEE/t51.2885-15/sh0.08/e35/s640x640/66419868_387298025251366_2799604682695020604_n.jpg?_nc_ht=scontent.cdninstagram.com"
          alt=""
          className="images"
        />
        <img
          src="https://scontent.cdninstagram.com/vp/07b05487ba77c8eabc040dc73e2a5c03/5DE35DFA/t51.2885-15/sh0.08/e35/p640x640/67143289_193234265028870_692188595900671052_n.jpg?_nc_ht=scontent.cdninstagram.com"
          alt=""
          className="images"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
