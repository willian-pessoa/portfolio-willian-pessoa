import React from "react";

import "./About.scss";

export default function About({ active }) {
  return (
    <div
      className={`content-container ${
        active ? "active-content" : "inactive-content"
      }`}
    >
      Olá eu sou Willian
    </div>
  );
}
