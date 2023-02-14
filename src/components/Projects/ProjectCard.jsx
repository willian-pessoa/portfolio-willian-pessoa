import React from "react";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import "./ProjectCard.scss";

const ProjectCard = ({ title, description, image, github, demo }) => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <Image
          src={image}
          fill
          alt={title}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="project-card__text">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub />
            <span>Git Hub</span>
          </a>
          <a href={demo} target="_blank" rel="noreferrer">
            <CgWebsite />
            <span>Demo</span>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
