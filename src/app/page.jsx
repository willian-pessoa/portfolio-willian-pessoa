"use client";
import { useEffect, useState } from "react";

import "./App.scss";

import SideBar from "@/components/SideBar/SideBar";
import ShowContent from "@/components/ShowContent/ShowContent";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function App() {
  const [contentToShow, setContentToShow] = useState({
    about: false,
    projects: false,
    contact: false,
  });

  const handleContentToShow = (content) => {
    switch (content) {
      case "about":
        setContentToShow({ about: true, projects: false, contact: false });
        break;
      case "projects":
        setContentToShow({ about: false, projects: true, contact: false });
        break;
      case "contact":
        setContentToShow({ about: false, projects: false, contact: true });
        break;
      default:
        setContentToShow({ about: true, projects: false, contact: false });
    }
  };

  useEffect(() => {
    handleContentToShow("about");
  }, []);

  return (
    <main className="App">
      <SideBar
        contentToShow={contentToShow}
        handleContentToShow={handleContentToShow}
      />
      <ShowContent>
        <About active={contentToShow.about} />
        <Projects active={contentToShow.projects} />
        <Contact active={contentToShow.contact} />
      </ShowContent>
    </main>
  );
}
