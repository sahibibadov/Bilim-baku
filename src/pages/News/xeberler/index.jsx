import React from "react";
import { Socialaccount } from "../../../components";
import "./style.css";
import mezun from "../../../assets/mezun.png";

export const Newsinfo = () => {
  return (
    <div className="newsinfo">
      <span>29 Avq 2021</span>
      <h2>
        Bİlİm Bakı <br /> yenİ yarışlar elan edİr!{" "}
      </h2>
      <img src={mezun} />
      <div className="newsinfo__content">
        <h3>Xəbər haqqında birinci başlıq</h3>
        <p>
          Aenean nam id neque vitae, blandit. Vestibulum tempus morbi ut
          gravida. In porttitor faucibus et mattis libero praesent. Ipsum magna
          vestibulum, sit fusce sagittis, sit duis est. Nec, tristique lacus,
          enim odio ornare lacus, luctus. Urna neque nulla amet, eget elit
          aliquet tristique at orci. Aenean non ultricies condimentum mollis in.
          Est, facilisi erat id urna non. Bibendum urna fringilla lacus duis
          tempus non in. <br />
          <br /> Aenean nam id neque vitae, blandit. Vestibulum tempus morbi ut
          gravida. In porttitor faucibus et mattis libero praesent. Ipsum magna
          vestibulum, sit fusce sagittis, sit duis est. Nec, tristique lacus,
          enim odio ornare lacus, luctus. Aenean nam id neque vitae, blandit.
          Vestibulum tempus morbi ut gravida. In porttitor faucibus et mattis
          libero praesent. Ipsum magna vestibulum, sit fusce sagittis, sit duis
          est. Nec, tristique lacus, enim odio ornare lacus, luctus. Urna neque
          nulla amet, eget elit aliquet tristique at orci. Aenean non ultricies
          condimentum mollis in. Est, facilisi erat id urna non. Bibendum urna
          fringilla lacus duis tempus non in. Aenean nam id neque vitae,
          blandit. Vestibulum tempus morbi ut gravida. In porttitor faucibus et
          mattis libero praesent. Ipsum magna vestibulum, sit fusce sagittis,
          sit duis est. Nec, tristique lacus, enim odio ornare lacus, luctus.{" "}
          <br />
          <br />{" "}
          <span>
            Aenean nam id neque vitae, blandit. Vestibulum tempus morbi ut
            gravida. In porttitor faucibus et mattis libero praesent. Ipsum
            magna vestibulum, sit fusce sagittis, sit duis est.{" "}
          </span>{" "}
          <br />
          <br /> Nec, tristique lacus, enim odio ornare lacus, luctus. Urna
          neque nulla amet, eget elit aliquet tristique at orci. Aenean non
          ultricies condimentum mollis in. Est, facilisi erat id urna non.
          Bibendum urna fringilla lacus duis tempus non in. “Aenean nam id neque
          vitae, blandit. Vestibulum tempus morbi ut gravida. In porttitor
          faucibus et mattis libero praesent. Ipsum magna vestibulum” Aenean nam
          id neque vitae, blandit. Vestibulum tempus morbi ut gravida. In
          porttitor faucibus et mattis libero praesent. Ipsum magna vestibulum,
          sit fusce sagittis, sit duis est. Nec, tristique lacus, enim odio
          ornare lacus, luctus. Urna neque nulla amet, eget elit aliquet
          tristique at orci. Aenean non ultricies condimentum mollis in. Est,
          facilisi erat id urna non. Bibendum urna fringilla lacus duis tempus
          non in. dio ornare lacus, luctus.
        </p>

        <div className="newsinfo__content__buton">
          <p>Paylaş:</p>
          <Socialaccount />
        </div>
      </div>
    </div>
  );
};
