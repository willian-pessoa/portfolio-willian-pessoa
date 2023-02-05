import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";

import Image from "next/image";

import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandSass,
} from "react-icons/tb";

import "./About.scss";

const TECHNOLOGIES = [
  {
    name: "React js",
    icon: <RiReactjsFill />,
  },
  {
    name: "Next js",
    icon: <TbBrandNextjs />,
  },
  {
    name: "JavaScript",
    icon: <TbBrandJavascript />,
  },
  {
    name: "HTML",
    icon: <TbBrandHtml5 />,
  },
  {
    name: "CSS",
    icon: <TbBrandCss3 />,
  },
  {
    name: "SASS",
    icon: <TbBrandSass />,
  },
  {
    name: "Node js",
    icon: <FaNodeJs />,
  },
];

export default function About({ active }) {
  return (
    <ContentContainer active={active}>
      <div className="about">
        <div className="about__profile">
          <div className="about__profile__image">
            <Image
              src={"/assets/willian.jpg"}
              alt="foto de perfil willian pessoa"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <div className="about__profile__description">
            <h1>Olá eu sou Willian</h1>
            <p>
              Desenvolvedor front-end, estudo programação desde agosto de 2021
              de forma autodidata via cursos online. Também sou formado em
              matemática e quatro vezes medalhista na olimpíada nacional de
              matemática, sendo duas medalhas de ouro e duas medalhas de bronze.
            </p>
          </div>
        </div>
        <div className="about__technologies">
          <h1>Tecnologias</h1>
          <ul className="about__technologies__list">
            {TECHNOLOGIES.map((item, idx) => {
              return (
                <li key={idx} className="about__technologies__list__item">
                  {item.icon} <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </ContentContainer>
  );
}
