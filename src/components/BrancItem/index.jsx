import React from "react";
import "./style.css";
import { Socialinfo } from "../Socialinformation";

export const Branchitem = ({
  row,
  img,
  h4,
  h2,
  p,
  backcolor,
  img1,
  img2,
  img3,
}) => {
  return (
    <div
      style={{ flexDirection: row, background: backcolor }}
      className="branch__div"
    >
      <img src={img} />
      <div className="branch__content">
        <h4>{h4}</h4>
        <h2>{h2}</h2>
        <p>{p}</p>
        <Socialinfo img1={img1} img2={img2} img3={img3} />
      </div>
    </div>
  );
};
