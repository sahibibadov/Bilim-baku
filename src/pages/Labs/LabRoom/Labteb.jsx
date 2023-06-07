import React from "react";
import { LabsRoom } from "../../../components";
import riy1 from "../../../assets/riy1.png";
import riy2 from "../../../assets/riy2.png";
import riy3 from "../../../assets/riy3.png";
import riy4 from "../../../assets/riy4.png";
import labimgteb from "../../../assets/labbackimgteb.svg";
export const Labteb = () => {
  return (
    <>
      <LabsRoom
        img1={riy1}
        img2={riy2}
        img3={riy3}
        img4={riy4}
        background="#6A00F41a"
        color="#6A00F4"
        h2="Təbiət elmləri laboratoriyası"
        labimg={labimgteb}
      />
    </>
  );
};
