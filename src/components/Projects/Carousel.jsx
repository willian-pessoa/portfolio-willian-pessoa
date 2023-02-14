"use client";
import React from "react";
import { useState } from "react";

import ProjectCard from "./ProjectCard";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

import PROJECTS from "./data";

import "./Carousel.scss";

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <div className="container-pai">
      <div className="carousel">
        <IoIosArrowDropleftCircle size="50" />
        <div className="carousel__cards">
          {PROJECTS.map((item, idx) => {
            if (idx !== currentCard) return null;
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
          <div className="carousel__circles">
            {PROJECTS.map((item, idx) => {
              if (idx === currentCard)
                return <RiCheckboxBlankCircleFill key={idx} />;
              return <RiCheckboxBlankCircleLine key={idx} />;
            })}
          </div>
        </div>
        <IoIosArrowDroprightCircle size="50" />
      </div>
    </div>
  );
};

export default Carousel;
