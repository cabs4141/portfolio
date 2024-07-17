import React from "react";
import { Spotlight } from "./Spotlight";
import NextNav from "../NextNav";
import MyCard from "./my-card.jsx";
import Medsos from "../Medsos/index.jsx";
import { motion, useInView } from "framer-motion";

export function SpotLight({ id }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false });
  const navItems = [{ name: "About Me", link: "section1" }, { name: "Project", link: "section2" }, { name: "Skills", link: "section3" }, { name: "Certificate", link: "section4" }, { link: "section9" }];
  return (
    <div id={id} className="flex flex-col items-center  mt-12 xl:h-full sm:h-screen max-w-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <NextNav navItems={navItems} />
      <motion.div ref={ref} initial={{ y: -100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 2 }}>
        <Medsos />
      </motion.div>
      <motion.div ref={ref} initial={{ y: -100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1.5 }}>
        <div className="my-4">
          <p className=" z-10 text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold xl:mt-4 md:mt-0">Binda Adib Rama Samudra</p>
        </div>
      </motion.div>

      <Spotlight fill="white" />
      <motion.div ref={ref} initial={{ y: -100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1 }}>
        <p className="text-neutral-500 max-w-lg mx-4 xl:my-2 text-base md:text-md text-center relative z-10 mt-2 md:mt-4">
          Frontend and Backend Engineer. Experience in React.js and Express.js for developing a website and web applications.
        </p>
      </motion.div>
      <motion.div ref={ref} initial={{ y: -100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }}>
        <MyCard href="#contactme" />
      </motion.div>
    </div>
  );
}
