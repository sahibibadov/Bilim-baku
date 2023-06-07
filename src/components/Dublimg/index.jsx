import React from "react";
import "./style.css";

export const Dublimg = ({ img1, img2, btninfo }) => {
  return (
    <div className="About_images">
      <img className="About_images__1" src={img2} />
      <img className="About_images__2" src={img1} />
      <button className="About_images__button">
        <img src="../../assets/contacticon.png" alt="image" />
        <p>{btninfo}</p>
      </button>
    </div>
  );
};
