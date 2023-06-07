import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import right from "../../assets/right.png";
import favorite from "../../assets/favorite.png";

import { labCards } from "./data";

export const LabCard = () => {
  return (
    <>
      {labCards.map(({ img, title, content }, index) => (
        <div key={index} className="lab__card">
          <div className="lab__card__img">
            <img src={img} />
            <Link to="#">
              <img src={favorite} />
            </Link>
          </div>
          <h3>{title}</h3>
          <p>{content}</p>
          <div className="lab__link">
            <Link to="#">Müraciət et</Link>
            <Link to="#">
              <img src={right} alt="rigt" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
