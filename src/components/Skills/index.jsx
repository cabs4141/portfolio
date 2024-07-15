"use client";

import { InfiniteMovingCards } from "./infinite-moving-cards";

export function Skills({ id }) {
  return (
    <div id={id} className="h-screen gap-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.03] items-center justify-center relative overflow-hidden">
      <div className=" w-full flex justify-center xl:mb-20 sm:mb-6  ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500">Specified Skills</p>
      </div>
      <p className="text-neutral-500 px-8 max-w-lg mx-auto my-2 text-base md:text-md text-center relative z-10 mt-2 md:mt-4">
        Semua specified skill yang muter dibawah masih belum expert, karna saya pemula, maka dari itu ajarin dong bang 😥
      </p>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote: "Javascript",
    name: "Bahasa pemrograman yang selalu saya gunakan ketika development aplikasi atau website.",
    image: "/src/assets/icons/javascript.png",
  },
  {
    quote: "Node.js",
    name: "JavaScript runtime yang memungkinkan untuk menjalankan JavaScript di sisi server.",
    image: "/src/assets/icons/node.png",
  },
  {
    quote: "MySQL",
    name: "Sistem manajemen basis data relasional open-source yang digunakan untuk menyimpan data aplikasi.",
    image: "/src/assets/icons/mysql.png",
  },

  {
    quote: "Tailwind CSS",
    name: "Framework CSS utilitarian untuk membangun antarmuka pengguna yang responsif.",
    image: "/src/assets/icons/Tailwind CSS.png",
  },
  {
    quote: "Vite",
    name: "Bundler dan development server yang cepat untuk aplikasi web modern.",
    image: "/src/assets/icons/Vite.js.png",
  },
  {
    quote: "Docker",
    name: "Platform untuk mengembangkan, mengirim, dan menjalankan aplikasi dalam kontainer.",
    image: "/src/assets/icons/Docker.png",
  },
  {
    quote: "GitHub",
    name: "Platform hosting kode sumber untuk versi kontrol menggunakan Git.",
    image: "/src/assets/icons/github.png",
  },

  {
    quote: "Podman",
    name: "Tool untuk mengelola kontainer dan pods yang kompatibel dengan Docker.",
    image: "/src/assets/icons/pngaaa.com-5307940.png",
  },
  {
    quote: "Postman",
    name: "Tool untuk pengujian API yang memungkinkan Anda untuk mengirim permintaan HTTP.",
    image: "/src/assets/icons/Postman.png",
  },
  {
    quote: "React JS",
    name: "Library JavaScript untuk membangun antarmuka pengguna, memudahkan pengembangan aplikasi web interaktif.",
    image: "/src/assets/icons/react.png",
  },
  {
    quote: "Express JS",
    name: "Framework web minimalis untuk Node.js, digunakan untuk membangun aplikasi dan API dengan cepat.",
    image: "/src/assets/icons/Express.png",
  },
];
