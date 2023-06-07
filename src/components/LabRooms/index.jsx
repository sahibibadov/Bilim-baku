import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const LabsRoom = ({
  img1,
  img2,
  img3,
  img4,
  h2,
  background,
  labimg,
  color,
}) => {
  return (
    <div style={{ background: background }} className="Labsroom">
      <div className="Labsroom__imgs">
        <img className="div1" src={img1} />
        <img className="div2" src={img2} />
        <img className="div3" src={img3} />
        <img className="div4" src={img4} />
      </div>
      <div className="Labsroom__info">
        <h4 style={{ color: color }}>Laboratorİyalar</h4>
        <h2>{h2}</h2>
        <p>
          Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam
          adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada
          pharetra, leo lacinia. Morbi elementum condimentum risus mauris eu.
          Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa.{" "}
        </p>
        <span>Laboratoriya mövuları</span>
        <div className="Labsroom__info_title">
          <p style={{ color: color }}>
            <img src={labimg} />
            Kodlama və alqoritm
          </p>
          <p style={{ color: color }}>
            <img src={labimg} />
            3D proqramlaşdırma
          </p>
          <p style={{ color: color }}>
            <img src={labimg} />
            3D modelləşdirmə
          </p>
          <p style={{ color: color }}>
            <img src={labimg} />
            Artırılmış reallıq
          </p>
          <p style={{ color: color }}>
            <img src={labimg} />
            Robotik layihələr
          </p>
          <p style={{ color: color }}>
            <img src={labimg} />
            Elektronik proqramlaşdırma
          </p>
        </div>
        <Link style={{ background: color }} to="#">
          Qeydiyyat
        </Link>
      </div>
    </div>
  );
};
