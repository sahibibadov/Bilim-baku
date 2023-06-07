import React from "react";
import { ButtonAbout, Dublimg } from "../index";
import "./style.css";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Playellips from "../../assets/Group.png";

export const AboutSection = () => {
  return (
    <div className="about">
      <Dublimg
        btninfo="Video izlə"
        img1={Img1}
        img2={Img2}
        imgPbtn={Playellips}
      />

      <div className="about__content">
        <h4>Haqqımızda</h4>
        <h2>Bilim Bakı Haqqında Məlumat</h2>
        <span>
          Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo.
          Nisl, tincidunt feugiat dictum consequat faucibus volutpat tristique.
        </span>
        <div className="about__content__footer">
          <p>
            Morbi elementum condimentum risus mauris eu. Mauris, tincidunt
            aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis
            malesuada pharetra, leo lacinia.
          </p>
          <p>
            Lectus auctor sed id magna aliquam quam. Ultrices faucibus facilisi
            velit purus neque. Risus id auctor mauris ut duis eu felis tortor.
          </p>
          <p>
            Odio ante blandit egestas sed arcu. Sit tellus ac amet sit
            vulputate. Euismod pellentesque morbi libero, montes, nulla.
          </p>
        </div>
        <ButtonAbout text="Ətraflı bax" />
      </div>
    </div>
  );
};
