import React from "react";
import "./style.css";
import asandicon from "../../assets/socialasand.png";
import turkicon from "../../assets/socialturk.png";

export const SocialIcon = () => {
  return (
    <div className="social__icon_imgs">
      <div>
        <img src={asandicon} />
      </div>
      <div>
        <img src={turkicon} />
      </div>
      <div>
        <img src={asandicon} />
      </div>
      <div>
        <img src={turkicon} />
      </div>
    </div>
  );
};
