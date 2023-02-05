import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";

export default function Contact({ active }) {
  return (
    <ContentContainer active={active}>
      <section className="contact">Entre em contato</section>
    </ContentContainer>
  );
}
