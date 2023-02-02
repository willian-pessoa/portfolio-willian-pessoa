import "./App.scss";

import SideBar from "@/components/SideBar/SideBar";
import ShowContent from "@/components/ShowContent/ShowContent";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function App() {
  return (
    <main className="App">
      <SideBar />
      <ShowContent>
        <About />
        <Projects />
        <Contact />
      </ShowContent>
    </main>
  );
}
