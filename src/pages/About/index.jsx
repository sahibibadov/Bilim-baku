import React from "react";
import { AboutSection, WhyBilim, SocialIcon, Aboutus } from "../../components";
import "./style.css";

export const About = () => {
  return (
    <>
      <section className="about__bilim">
        <AboutSection />
      </section>
      <section className="about__why">
        <Aboutus />
      </section>
      <section className="Galery__bilim">
        <WhyBilim />
        <SocialIcon />
      </section>
    </>
  );
};
