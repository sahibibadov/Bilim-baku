import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import fb from "../../assets/facebook.png";
import tw from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";

export const Socialaccount = () => {
  return (
    <div className="footer-main-media">
      <Link to="#">
        <img src={fb} />
      </Link>
      <Link to="#">
        <img src={tw} />
      </Link>
      <Link to="#">
        <img src={insta} />
      </Link>
    </div>
  );
};
