import { InfiniteMovingCards } from "./infinite-moving-cards";
import javascript from "../../assets/icons/javascript.png";
import node from "../../assets/icons/node.png";
import mysql from "../../assets/icons/mysql.png";
import tailwind from "../../assets/icons/Tailwind CSS.png";
import vite from "../../assets/icons/Vite.js.png";
import docker from "../../assets/icons/Docker.png";
import github from "../../assets/icons/github.png";
import podman from "../../assets/icons/pngaaa.com-5307940.png";
import postman from "../../assets/icons/Postman.png";
import react from "../../assets/icons/react.png";
import express from "../../assets/icons/Express.png";

export function Skills({ id }) {
  return (
    <div id={id} className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center pt-48 xl:pt-24 pb-60">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="absolite top-8 w-full flex justify-center mb-8">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500">Specified Skills</p>
      </div>
      <p className="text-neutral-500 px-8 max-w-lg mx-auto mb-8 text-base md:text-md text-center relative z-10  pt-10">Semua skill yang muter dibawah masih belum expert, karna saya masih pemula 😌🙏</p>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote: "JavaScript",
    name: "A programming language that I always use when developing applications or websites.",
    image: javascript,
  },
  {
    quote: "Node.js",
    name: "JavaScript runtime that allows you to run JavaScript on the server side.",
    image: node,
  },
  {
    quote: "MySQL",
    name: "An open-source relational database management system used to store application data.",
    image: mysql,
  },
  {
    quote: "Tailwind CSS",
    name: "A utility-first CSS framework for building responsive user interfaces.",
    image: tailwind,
  },
  {
    quote: "Vite",
    name: "A fast bundler and development server for modern web applications.",
    image: vite,
  },
  {
    quote: "Docker",
    name: "A platform for developing, shipping, and running applications in containers.",
    image: docker,
  },
  {
    quote: "GitHub",
    name: "A source code hosting platform for version control using Git.",
    image: github,
  },
  {
    quote: "Podman",
    name: "A tool for managing containers and pods, compatible with Docker.",
    image: podman,
  },
  {
    quote: "Postman",
    name: "A tool for API testing that allows you to send HTTP requests.",
    image: postman,
  },
  {
    quote: "React JS",
    name: "A JavaScript library for the frontend, facilitating the development of interactive web applications.",
    image: react,
  },
  {
    quote: "Express JS",
    name: "A minimal web framework for Node.js, used for quickly building applications and APIs.",
    image: express,
  },
];
