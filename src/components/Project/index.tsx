import React from "react";
import MyCard from "../MyCard/index.jsx";
import kube from "../../assets/img/kube.png";
import jrmonas from "../../assets/img/jrmonas.png";
import undangan from "../../assets/img/undangan.png";

const Project = ({ id }) => {
  return (
    <div id={id} className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center mt-28 xl:mt-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" w-full flex justify-center xl:mb-20 sm:mb-6 ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500">Projects</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-2 px-2">
        {" "}
        {/* Reduced gap further */}
        <MyCard judul="KUBE website" title="Dinas Sosial Kelompok Usaha Bersama" img={kube} />
        <MyCard judul="JR Monas (Desktop)" title="Jasa Raharja Monitoring Kendaraan Dinas" img={jrmonas} />
        <MyCard judul="Undangan Pernikahan" title="Website Undangan Pernikahan" img={undangan} />
      </div>
    </div>
  );
};

export default Project;
