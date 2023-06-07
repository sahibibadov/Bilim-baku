import React from "react";
import { menuItems, LangItems } from "./data";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import headerback from "../../assets/headerhand.png";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" srcset="" />
      </Link>
      <nav className="header__nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__action">
        <select className="header__action__lang">
          {LangItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Link to="contact/qeydiyyat" className="header__action__register">
          Register
        </Link>
      </div>
    </header>
  );
};
