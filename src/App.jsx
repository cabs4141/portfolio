import React from "react";
import "./App.css";
import Project from "./components/Project/index";
import { Skills } from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Sertifikat from "./components/Sertifikat";
import ContactMe from "./components/ContactMe";
import { SpotLight } from "./components/SpotLight";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <SpotLight id="section9" />
      <AboutMe id="section1" />
      <Project id="section2" />
      <Skills id="section3" />
      <Sertifikat id="section4" />
      <ContactMe id="contactme" />
      <MyFooter />
    </>
  );
}

export default App;
