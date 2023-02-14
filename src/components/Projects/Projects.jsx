import React from "react";

import ContentContainer from "../ContentContainer/ContentContainer";
import Carousel from "./Carousel";

import "./Projects.scss";

export default function Projects({ active }) {
  return (
    <ContentContainer active={active}>
      <section className="projects">
        <h1>Principais Projetos</h1>
        <div className="projects-wrapper">
          <Carousel />
        </div>
      </section>
    </ContentContainer>
  );
}
