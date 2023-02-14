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

const LENGHT = PROJECTS.length;

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev === LENGHT - 1 ? 0 : prev + 1));
  };

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? LENGHT - 1 : prev - 1));
  };

  return (
    <div className="container-pai">
      <div className="carousel">
        <IoIosArrowDropleftCircle
          onClick={handlePrevCard}
          className="carousel__arrow"
        />
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
        <IoIosArrowDroprightCircle
          onClick={handleNextCard}
          className="carousel__arrow"
        />
      </div>
    </div>
  );
};

export default Carousel;
