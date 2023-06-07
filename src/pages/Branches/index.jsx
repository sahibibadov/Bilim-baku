import React from "react";
import "./style.css";
import { Branchitems } from "./branchitem";
import { Branchitem } from "../../components";

export const Branches = () => {
  return (
    <section className="branches__pages">
      {Branchitems.map(
        (
          { img, backcolor, color, h2, h4, p, row, img1, img2, img3 },
          index
        ) => (
          <Branchitem
            backcolor={backcolor}
            color={color}
            h2={h2}
            h4={h4}
            img={img}
            p={p}
            row={row}
            key={index}
            img1={img1}
            img2={img2}
            img3={img3}
          />
        )
      )}
    </section>
  );
};
