import React from "react";
import { Link } from "react-router-dom";
import { ButtonAbout, Socialaccount, Socialinfo } from "../index";
import "./style.css";
import location from "../../assets/location.png";

import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__header__background">
        <div className="container footer__header">
          <h3>Abunə ol və heçbir yeniliyi qaçırma!</h3>
          <div>
            <input className="footer_input" type="email" placeholder="E-poçt" />
            <button type="submit">Göndər</button>
          </div>
        </div>
      </div>
      {/* footer maain */}
      <div className="footer-main container">
        {/* left */}
        <div className="footer-main__left">
          <div className="footer-main__left__title">
            <p className="footer-main__elaqe">Əlaqə</p>
            <h3 className="footer-main__title">Bizimlə əlaqə</h3>
          </div>

          <div className="footer-main-connection">
            <Socialinfo img1={phone} img2={mail} img3={location} />
          </div>
          <Socialaccount />
        </div>

        {/* right */}
        <div className="footer-main__right">
          <label htmlFor="text">
            <p>Ad soyad</p>
            <input
              id="text"
              className="footer_input"
              type="text"
              placeholder="AdSoyad"
            />
          </label>
          <input className="footer_input" type="email" placeholder="E-poçt" />
          <textarea placeholder="Mesajınız"></textarea>
          <ButtonAbout text="Göndər" />
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          Copyright © 2021 <Link to="#"> Bilim Baku.</Link> Bütün hüquqlar
          qorunur.
        </p>
        <p>
          <Link to="#"> </Link>
        </p>
      </div>
    </div>
  );
};
