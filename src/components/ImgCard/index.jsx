import React from "react";
import "./style.css";
import { data } from "./data";

export const ImgCard = () => {
  return (
    <>
      {data.map(({ img, title }) => (
        <div className="Img-card">
          <img src={img} />
          <h2>{title}</h2>
          <span>29 Avq 2021</span>
        </div>
      ))}
    </>
  );
};
