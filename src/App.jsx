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
  return (
    <>
      <SpotLight id="section9" />
      <AboutMe id="section1" />
      <Project id="section2" />
      <Skills id="section3" />
      <Sertifikat id="section4" />
      <ContactMe id="contactme" />
    </>
  );
}

export default App;
