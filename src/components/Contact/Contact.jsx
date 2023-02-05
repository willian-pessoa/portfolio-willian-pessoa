import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import "./Contact.scss";

export default function Contact({ active }) {
  return (
    <ContentContainer active={active}>
      <section className="contact">
        <h1>Entre em contato</h1>
        <ul className="contact__list">
          <li className="contact__list__item">
            <a
              href="https://www.linkedin.com/in/willian-pessoa/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              &nbsp;Linkedin
            </a>
          </li>
          <li className="contact__list__item">
            <a
              href="https://github.com/willian-pessoa"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
              &nbsp;GitHub
            </a>
          </li>
        </ul>
      </section>
    </ContentContainer>
  );
}
