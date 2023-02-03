import React from "react";

import "./SideBar.scss";

export default function SideBar({ handleContentToShow }) {
  return (
    <div className="side-bar">
      <ul className="side-bar__menu">
        <li onClick={()=>handleContentToShow("sobre")} className="side-bar__menu__item">Sobre</li>
        <li onClick={()=>handleContentToShow("projects")}  className="side-bar__menu__item">Projetos</li>
        <li onClick={()=>handleContentToShow("contact")}  className="side-bar__menu__item">Contato</li>
      </ul>
    </div>
  );
}
