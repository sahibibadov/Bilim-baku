import React from "react";
import { LabCard } from "../index";
import "./style.css";

export const LabsSection = () => {
  return (
    <>
      <div className="labs">
        <h3>Təlİmlərİmİz</h3>
        <h2>Labaratoriyalar</h2>
        <div className="lab__cards">
          <LabCard />
        </div>
      </div>
    </>
  );
};
