import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonAbout = ({ text }) => {
  return (
    <Link className="about__link" to="#">
      {text}
    </Link>
  );
};
