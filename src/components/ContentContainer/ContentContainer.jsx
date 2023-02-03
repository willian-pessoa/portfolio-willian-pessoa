import React from "react";

import "./ContentContainer.scss"

const ContentContainer = ({ active, children }) => {
  return (
    <div
      className={`content-container ${
        active ? "active-content" : "inactive-content"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
