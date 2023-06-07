import React from "react";
import { Link } from "react-router-dom";
import { WhyCards } from "./data";
import "./style.css";

export const WhyBilim = () => {
  return (
    <div className="why__about">
      <h4>Nİyə bİz?</h4>
      <h2>Niyə Bilim Bakı?</h2>
      <div className="why__about__box">
        {WhyCards.map(({ color, right, content, human, numb }) => (
          <div className="why__about__item">
            <div className="why__about__item__title">
              <p className="why__about__item_number" style={{ color: color }}>
                {numb}
              </p>
              <span>{human}</span>
            </div>
            <p>{content}</p>
            <div className="why__link">
              <Link to="#" style={{ color: color }}>
                Bax
              </Link>
              <Link to="#">
                <img src={right} alt="rigt" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
