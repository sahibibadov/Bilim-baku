import React from "react";
import "./style.css";
import { Dublimg } from "../../../components";
import Img1 from "../../../assets/contactimg1.png";
import Img2 from "../../../assets/contactimg2.png";

import Playellips from "../../../assets/contacticon1.png";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <section className="contact__pages">
      <div className="about">
        <Dublimg img1={Img1} img2={Img2} imgPbtn={Playellips} />

        <div className="registr_div">
          <h2>Daxİl ol</h2>
          <p>
            Zəhmət olmasa, daxil olmaq üçün aşağıdaki <br /> məlumatları
            doldurun.
          </p>
          <div className="registr_div__righ__input">
            <label htmlFor="inputs">
              <p>E-mail</p>
              <input
                className="footer_input"
                id="inputs"
                type="email"
                placeholder="E-poçt"
              />
            </label>
            <input
              className="footer_input"
              type="password"
              placeholder="Şifrə"
            />
            <div className="pasword-reset">
              <label htmlFor="check">
                <input type="checkbox" id="check" />
                Məni yadda saxla
              </label>
              <Link to="#">Şifrəni unutmuşam</Link>
            </div>
          </div>

          <div className="registr_div__button">
            <button>Daxil ol</button>
            <button>Qeydiyyat</button>
          </div>
        </div>
      </div>
    </section>
  );
};
