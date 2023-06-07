import React from "react";
import "./style.css";

import copy from "../../assets/copy.png";

export const Socialinfo = ({ img1, img2, img3 }) => {
  return (
    <>
      <div className="footer-main-connection__box">
        <img src={img1} />
        <p>+994 12 222 22 22</p>
        <img src={copy} />
      </div>
      <div className="footer-main-connection__box">
        <img src={img2} />
        <p>hello@bilimbaku.com</p>
        <img src={copy} />
      </div>
      <div className="footer-main-connection__box">
        <img src={img3} />
        <p>Nizami küçəsi 12, Bakı</p>
        <img src={copy} />
      </div>
    </>
  );
};
