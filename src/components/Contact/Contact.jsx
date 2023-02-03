import React from "react";

export default function Contact({ active }) {
  return (
    <div
    style={{zIndex:"3"}}
      className={`content-container ${
        active ? "active-content" : "inactive-content"
      }`}
    >
      Enter em contato
    </div>
  );
}
