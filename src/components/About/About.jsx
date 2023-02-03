import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";

import "./About.scss";

export default function About({ active }) {
  return (
    <ContentContainer active={active}>Olá eu sou Willian</ContentContainer>
  );
}
