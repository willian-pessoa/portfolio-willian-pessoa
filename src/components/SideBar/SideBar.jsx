"use client";

import React, { useState } from "react";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import "./SideBar.scss";

export default function SideBar({ handleContentToShow, contentToShow }) {
  return (
    <nav className="side-bar">
      <br />
      <ul className="side-bar__menu">
        <li
          onClick={() => handleContentToShow("sobre")}
          className={`side-bar__menu__item ${
            contentToShow.about ? "in-focus" : "out-focus"
          }`}
        >
          Sobre
        </li>
        <li
          onClick={() => handleContentToShow("projects")}
          className={`side-bar__menu__item ${
            contentToShow.projects ? "in-focus" : "out-focus"
          }`}
        >
          Projetos
        </li>
        <li
          onClick={() => handleContentToShow("contact")}
          className={`side-bar__menu__item ${
            contentToShow.contact ? "in-focus" : "out-focus"
          }`}
        >
          Contato
        </li>
      </ul>
      <div className="side-bar__contact">
        <a
          href="https://www.linkedin.com/in/willian-pessoa/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          &nbsp;Linkedin
        </a>
        <a
          href="https://github.com/willian-pessoa"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
          &nbsp;GitHub
        </a>
      </div>
    </nav>
  );
}
