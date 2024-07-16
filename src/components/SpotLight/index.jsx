import React from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "./Spotlight";
import NextNav from "../NextNav";
import { TypewriterEffect } from "./typewritter-effect";
import MyCard from "./my-card.jsx";
import Medsos from "../Medsos/index.jsx";
const words = [
  {
    text: "Binda",
  },
  {
    text: "Adib",
  },
  {
    text: "Rama",
  },
  {
    text: "Samudra",
  },
];

export function SpotLight() {
  const navItems = [
    { name: "About Me", link: "section1" },
    { name: "Project", link: "section2" },
    { name: "Skills", link: "section3" },
    { name: "Certificate", link: "section4" },
    { link: "contactme" }, // Tambahkan ini
  ];
  return (
    <div className="flex flex-col items-center  mt-12 xl:h-full sm:h-screen max-w-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <NextNav navItems={navItems} />
      <Medsos />
      <div className="my-4">
        <TypewriterEffect words={words} />
      </div>
      <Spotlight fill="white" />
      <p className="text-neutral-500 max-w-lg mx-4 xl:my-2 text-base md:text-md text-center relative z-10 mt-2 md:mt-4">Frontend and Backend Engineer. Experience in React.js and Express.js for developing a website and web applications.</p>
      <MyCard href="#contactme" />
    </div>
  );
}
