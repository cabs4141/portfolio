import React from "react";
import { Avatar } from "@nextui-org/react";
import github from "../../assets/icons/github.png";
import ig from "../../assets/icons/ig.png";
import gmail from "../../assets/icons/gmail.png";
import wa from "../../assets/icons/wa.png";

const Medsos = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 xl:-pt-20 pt-20">
      <a href="https://www.instagram.com/bindarama_" target="_blank">
        <Avatar isBordered radius="sm" src={ig} size="sm" />
      </a>

      <Avatar isBordered radius="sm" src={wa} size="sm" />
      <a href="https://github.com/cabs4141" target="_blank">
        <Avatar isBordered radius="sm" src={github} size="sm" />
      </a>
      <a href="mailto:crakun95@gmail.com" target="_blank" rel="noopener noreferrer">
        <Avatar isBordered radius="sm" src={gmail} size="sm" />
      </a>
    </div>
  );
};
export default Medsos;
