import React from "react";

import { Labitems } from "../Labitem";
import { Labitem } from "../../../components";

export const Labsindex = () => {
  return (
    <>
      {Labitems.map(
        ({ img, backcolor, color, h2, h4, p, row, labs_item }, index) => (
          <Labitem
            backcolor={backcolor}
            color={color}
            h2={h2}
            h4={h4}
            img={img}
            p={p}
            row={row}
            key={index}
            labs_item={labs_item}
          />
        )
      )}
    </>
  );
};
