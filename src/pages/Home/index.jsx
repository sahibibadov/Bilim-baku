import React from "react";
import "./style.css";
import {
  Cards,
  AboutSection,
  NewsSection,
  LabsSection,
  Galery,
  WhyBilim,
  SocialIcon,
  Slider,
  Backimg,
} from "../../components";

export const Home = () => {
  return (
    <>
      <Backimg />
      <section className="slider-telim">
        <Slider />
      </section>
      <section className="Cards-telim">
        <Cards />
      </section>
      <section className="about__bilim">
        <AboutSection />
      </section>
      <section className="news__Card">
        <NewsSection />
      </section>
      <section className="Labs__bilim">
        <LabsSection />
      </section>
      <section className="Galery__bilim">
        <Galery />
      </section>
      <section className="Why__bilim">
        <WhyBilim />
        <SocialIcon />
      </section>
    </>
  );
};
