import React from "react";
import "./style.css";
import Ellips from "../../assets/Ellipse.png";
import Ellips1 from "../../assets/Ellipse1.png";

import mezun from "../../assets/mezun.png";

export const Aboutus = () => {
  return (
    <>
      <div className="about__Aboutus">
        <h4>Haqqımızda</h4>
        <h2>Bilim Bakının tarixi</h2>
        <p className="about__Aboutus__p1">
          Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo.
          Nisl, tincidunt feugiat dictum <br /> consequat faucibus volutpat
          tristique.
        </p>
        <p className="about__Aboutus__p2">
          Adipiscing mauris facilisis rutrum quis egestas nec eget a. Tellus non
          vitae urna eget. Pulvinar donec molestie a phasellus nibh eget etiam.
          Tincidunt amet mollis facilisis id fringilla suspendisse. At magna est
          facilisi ullamcorper lectus orci maecenas in ut. Auctor scelerisque id
          dictum volutpat cum ac. Nunc, nulla pharetra, scelerisque urna odio
          nibh magna eros. Egestas quis metus nisl scelerisque viverra nulla sit
          mauris pulvinar. Ut accumsan donec duis vitae, nunc facilisis tortor
          vel dictum. Egestas at elit et, turpis lorem. Faucibus diam adipiscing
          consectetur augue. Porta in risus pharetra, sit sit. Velit vitae
          integer varius feugiat donec elit id erat a. Hac vel eget consectetur
          risus, cras tristique nec dolor pellentesque. Sit vestibulum magna
          fringilla bibendum mauris, consequat a amet, vestibulum. Posuere proin
          faucibus ac odio mi neque diam, elit. Tortor ac, justo, viverra
          scelerisque sit vitae vitae vulputate. Varius aliquet vel ipsum enim,
          adipiscing. Sodales velit ac nunc, adipiscing consequat sit odio.
          Accumsan lorem morbi eget quis sem eu. Daha çox
        </p>
        <img src={mezun} alt="mezun" />
      </div>

      <div className="About__ellips">
        <div>
          <img src={Ellips} />
          <h4>Vizyonumuz</h4>
          <p>
            Adipiscing mauris facilisis rutrum quis egestas nec eget a. Tellus
            non vitae urna eget. Pulvinar donec molestie a phasellus nibh eget
            etiam. Tincidunt amet mollis facilisis id fringilla suspendisse. At
            magna est facilisi ullamcorper lectus orci maecenas in ut. Auctor
            scelerisque id dictum volutpat cum ac.
          </p>
        </div>
        <div>
          <img src={Ellips1} />
          <h4>Missiyamız</h4>
          <p>
            Adipiscing mauris facilisis rutrum quis egestas nec eget a. Tellus
            non vitae urna eget. Pulvinar donec molestie a phasellus nibh eget
            etiam. Tincidunt amet mollis facilisis id fringilla suspendisse. At
            magna est facilisi ullamcorper lectus orci maecenas in ut. Auctor
            scelerisque id dictum volutpat cum ac.
          </p>
        </div>
      </div>
    </>
  );
};
