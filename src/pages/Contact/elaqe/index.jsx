import React from "react";
import "./style.css";
import {
  Dublimg,
  Socialinfo,
  Socialaccount,
  ButtonAbout,
} from "../../../components";
import location from "../../../assets/location.png";

import phone from "../../../assets/phone.png";
import mail from "../../../assets/mail.png";

import Img1 from "../../../assets/contactimg1.png";
import Img2 from "../../../assets/contactimg2.png";

export const ContactIndex = () => {
  return (
    <>
      <section className="contact__pages">
        <div className="about">
          <Dublimg img1={Img1} img2={Img2} />

          <div className="about__content">
            <h4>BİZİMlə əlaqə</h4>
            <h2>Suallarınız varsa bizə ünvanlayın.</h2>
            <Socialinfo img1={phone} img2={mail} img3={location} />
            <Socialaccount />
          </div>
        </div>
      </section>
      <section className="about__content__bottom">
        <div className="about__content__bottom__left">
          <h4>Bİzə yaz</h4>
          <h2>Və ya bizə yazaraq birbaşa soruşun!</h2>
          <p>
            Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo.
            Nisl, tincidunt feugiat dictum consequat faucibus volutpat
            tristique. Varius nulla id enim, ante nisl, elementum lobortis
            tincidunt leo. Nisl, tincidunt feugiat dictum consequat faucibus
            volutpat tristique. Varius nulla id enim, ante nisl, elementum
            lobortis tincidunt leo. Nisl, tincidunt feugiat dictum consequat
            faucibus volutpat tristique. Nisl, tincidunt feugiat dictum
            consequat faucibus volutpat tristique.
          </p>
        </div>
        <div className="about__content__bottom__right">
          <div className="about__content__bottom__righ__input">
            <label htmlFor="input">
              <p>Ad və soyad</p>
              <input
                className="footer_input"
                placeholder="Ad soyad"
                id="input"
                type="text"
              />
            </label>
            <input className="footer_input" type="email" placeholder="E-poçt" />
          </div>
          <textarea placeholder="Mesajınız"></textarea>
          <ButtonAbout text="Göndər" />
        </div>
      </section>
    </>
  );
};
