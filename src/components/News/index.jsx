import { ButtonAbout, ImgCard } from "../index";
import "./style.css";

import React from "react";

export const NewsSection = () => {
  return (
    <div className="News__new">
      <h3>Xəbərlər</h3>
      <div className="News__new__title">
        <h2>Ən son yeniliklər</h2>
        <ButtonAbout text="Hamsına bax" />
      </div>
      <div className="News__new__imgs">
        <ImgCard />
      </div>
    </div>
  );
};
