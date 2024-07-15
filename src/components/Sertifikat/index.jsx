import React from "react";
import MyCard from "../MyCard/index.jsx";
import dicoding from "../../assets/img/backend.jpg";
import cisco from "../../assets/img/cybersecurity.jpg";
import redhat from "../../assets/img/redhat.jpg";
import udemy from "../../assets/img/fullstack.jpg";

const Sertifikat = ({ id }) => {
  return (
    <div id={id} className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" w-full flex justify-center xl:mt-32 sm:mb-6 ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">Sertifikat</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-2 px-2">
        {" "}
        {/* Reduced gap further */}
        <MyCard judul="Dicoding Indonesia" title="Membuat service backend" img={dicoding} />
        <MyCard judul="Cisco Networking Academy" title="Pengenalan cyber security" img={cisco} />
        <MyCard judul="Red Hat Academy" title="Pengenalan redhat openshift container platform" img={redhat} />
        <MyCard judul="Udemy" title="Fullstack programming untuk pemula" img={udemy} />
      </div>
    </div>
  );
};

export default Sertifikat;
