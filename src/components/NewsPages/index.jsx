import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import search from "../../assets/search.png";
import mezun from "../../assets/mezun.png";

export const NewsPages = () => {
  return (
    <>
      <div className="News__page__search">
        <div className="News__page__search_input">
          <img src={search} />
          <input type="text" placeholder="Xəbər axtar..." />
        </div>
        <div className="News__page__search_buttons">
          <button>Axtar</button>
          <button>Filter</button>
        </div>
      </div>
      {/* xeberler */}
      <div className="News__page__xeber">
        <img className="News__page__xeber__img" src={mezun} />
        <span>29 Avq 2021</span>
        <h2>
          Bİlİm Bakı <br /> yenİ yarışlar elan edİr!{" "}
        </h2>
        <p>
          Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam{" "}
          <br />
          adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada
          pharetra, leo.
        </p>

        <Link to="/news/Bilim-Bakı ">Xəbərə bax</Link>
      </div>
    </>
  );
};
