import React from 'react'

export default function Projects({active}) {
  return (
    <div
      className={`content-container ${
        active ? "active-content" : "inactive-content"
      }`}
    >
       Projetos de Willian
    </div>
  )
}
