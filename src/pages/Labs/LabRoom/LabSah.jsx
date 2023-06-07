import React from "react";
import { LabsRoom } from "../../../components";

import tex1 from "../../../assets/tex1.png";
import tex2 from "../../../assets/tex2.png";
import tex3 from "../../../assets/tex3.png";
import tex4 from "../../../assets/tex4.png";
import labimgsah from "../../../assets/labbackimgsah.svg";
export const LabSah = () => {
  return (
    <>
      <LabsRoom
        img1={tex1}
        img2={tex2}
        img3={tex3}
        img4={tex4}
        background="#00B71D1a"
        color="#00B71D"
        h2="Sahibkarlıq labaratoriyası"
        labimg={labimgsah}
      />
    </>
  );
};
