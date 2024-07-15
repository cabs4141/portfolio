import React from "react";
import "./App.css";
import { AuroraBgDemo } from "./components/AuroraBg/index";
import Project from "./components/Project/index";
import { Skills } from "./components/Skills";
import AboutMe from "./components/AboutMe";
import NextNav from "./components/NextNav";
import Sertifikat from "./components/Sertifikat";
import ContactMe from "./components/ContactMe";
import { SpotLight } from "./components/SpotLight";

function App() {
  const navItems = [
    { name: "About Me", link: "section1" },
    { name: "Project", link: "section2" },
    { name: "Skills", link: "section3" },
    { name: "Certificate", link: "section4" },
    { link: "contactme" }, // Tambahkan ini
  ];

  return (
    <>
      <SpotLight />
      {/* <AuroraBgDemo id="section5" /> */}
      <AboutMe id="section1" />
      <Project id="section2" />
      <Skills id="section3" />
      <Sertifikat id="section4" />
      <ContactMe />
    </>
  );
}

export default App;
