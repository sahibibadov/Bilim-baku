import React from "react";
import { LabsRoom } from "../../../components";

import tex1 from "../../../assets/tex1.png";
import tex2 from "../../../assets/tex2.png";
import tex3 from "../../../assets/tex3.png";
import tex4 from "../../../assets/tex4.png";
import labimgastro from "../../../assets/labbackimgastro.svg";
export const LabAstro = () => {
  return (
    <>
      <LabsRoom
        img1={tex1}
        img2={tex2}
        img3={tex3}
        img4={tex4}
        background="#FFBE0B1a"
        color="#FFBE0B"
        h2="Astronomiya labaratoriyası"
        labimg={labimgastro}
      />
    </>
  );
};
