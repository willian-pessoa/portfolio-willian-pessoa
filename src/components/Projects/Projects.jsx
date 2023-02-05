import React from "react";

import ContentContainer from "../ContentContainer/ContentContainer";
import ProjectCard from "./ProjectCard";

import PROJECTS from "./data";

import "./Projects.scss";

export default function Projects({ active }) {
  return (
    <ContentContainer active={active}>
      <section className="projects">
        <h1>Principais Projetos</h1>
        <div className="projects-wrapper">
          {PROJECTS.map((item, idx) => {
            return (
              <ProjectCard
                key={idx}
                title={item.name}
                description={item.description}
                image={item.image}
                github={item.github}
                demo={item.demo}
              />
            );
          })}
        </div>
      </section>
    </ContentContainer>
  );
}
