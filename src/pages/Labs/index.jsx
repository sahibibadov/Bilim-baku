import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";

export const Labs = () => {
  return (
    <section className="Labs__pages">
      <Outlet />
    </section>
  );
};
