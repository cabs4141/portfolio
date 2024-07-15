import { motion } from "framer-motion";
import { AuroraBg } from "./aurora-background";
import MyCard from "./my-card.jsx";
import Medsos from "../Medsos/index.jsx";
import { TypewriterEffect } from "./typewritter-effect";
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

export function AuroraBgDemo({ id }) {
  return (
    <AuroraBg id={id}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4 md:px-8 -mt-40 md:mt-2" // Adjusted margin top for mobile and desktop
      >
        <Medsos />
        <TypewriterEffect words={words} />

        {/* <h1 className="relative z-10 text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mt-4 md:mt-0">Binda Adib Rama Samudra</h1> */}
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base md:text-md text-center relative z-10 mt-2 md:mt-4">
          Frontend Engineer and Backend Engineer. Experience in React.js and Express.js for developing a website and web applications.
        </p>
        <MyCard />
      </motion.div>
    </AuroraBg>
  );
}
