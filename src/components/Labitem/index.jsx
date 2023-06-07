import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Labitem = ({
  row,
  img,
  h4,
  h2,
  p,
  color,
  backcolor,
  labs_item,
}) => {
  return (
    <div
      b
      style={{ flexDirection: row, background: backcolor }}
      className="Labs__div"
    >
      <img src={img} />
      <div className="Labs__div__content">
        <h4 style={{ color: color }}>{h4}</h4>
        <h2>{h2}</h2>
        <p>{p}</p>
        <div className="Labs__div__content__button">
          <Link style={{ background: color }} to="#">
            Qeydiyyat
          </Link>

          <Link to={labs_item}>Ətraflı bax</Link>
        </div>
      </div>
    </div>
  );
};
