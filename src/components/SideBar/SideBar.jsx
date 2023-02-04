"use client";

import React, { useState } from "react";

import "./SideBar.scss";

export default function SideBar({ handleContentToShow, contentToShow }) {
  return (
    <div className="side-bar">
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
    </div>
  );
}
