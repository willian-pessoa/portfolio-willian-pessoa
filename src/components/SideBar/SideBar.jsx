import React from "react";

import "./SideBar.scss";

export default function SideBar() {
  return (
    <div className="side-bar">
      <ul className="side-bar__menu">
        <li className="side-bar__menu__item">Sobre</li>
        <li className="side-bar__menu__item">Projetos</li>
        <li className="side-bar__menu__item">Contato</li>
      </ul>
    </div>
  );
}
