import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Card } from "./data";

export const Cards = () => {
  return (
    <>
      {Card.map(
        (
          { title, content, vector, righticon, color, backgroundcolor },
          index
        ) => (
          <div
            key={index}
            className="card-telim"
            style={{ background: backgroundcolor }}
          >
            <div className="card-telim__icon">
              <img src={vector} alt="vector" />
            </div>
            <p className="card-telim__title">{title}</p>
            <p className="card-telim__content">{content}</p>
            <div className="card-telim__link">
              <Link to="#" style={{ color: color }}>
                Bax
              </Link>
              <Link to="#">
                <img src={righticon} alt="rigt" />
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
};
