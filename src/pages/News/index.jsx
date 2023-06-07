import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";

export const News = () => {
  return (
    <>
      <section className="News__page">
        <Outlet />
      </section>
    </>
  );
};
