import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { GaleryCards } from "./data";
import { ButtonAbout } from "../ButtonAbout";
import Gimg12 from "../../assets/Group12.png";

export const Galery = () => {
  return (
    <div className="Galery__special">
      <h3>Qalareya</h3>
      <div className="Galery__special__title">
        <h2>Xüsusi anlardan görüntülər</h2>
        <ButtonAbout text="Hamsına bax" />
      </div>
      <div className="Galery__special__imgs">
        {GaleryCards.map(({ img, content }) => (
          <div
            className="Galery__img"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`,
            }}
          >
            <img src={Gimg12} />
            <Link to="#">
              {content} <span>{">>"}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
