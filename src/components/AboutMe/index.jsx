import React from "react";
import AboutCard from "./about-card";
import TechStack from "./TechStack";

const AboutMe = ({ id }) => {
  return (
    <div id={id} className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center mt-48">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-8 w-full flex justify-center mb-8">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500">About Me</p>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center h-screen mt-42 pb-20 gap-4">
        <AboutCard />
        <TechStack />
      </div>
    </div>
  );
};

export default AboutMe;
