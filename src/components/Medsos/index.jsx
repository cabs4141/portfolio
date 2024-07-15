import React from "react";
import { Avatar } from "@nextui-org/react";

const Medsos = () => {
  return (
    <div className="flex gap-4 items-center">
      <a href="https://www.instagram.com/bindarama_" target="_blank">
        <Avatar isBordered radius="sm" src="/src/assets/icons/ig.png" size="sm" />
      </a>

      <Avatar isBordered radius="sm" src="/src/assets/icons/wa.png" size="sm" />
      <a href="https://github.com/cabs4141" target="_blank">
        <Avatar isBordered radius="sm" src="/src/assets/icons/github.png" size="sm" />
      </a>
      <a href="mailto:crakun95@gmail.com" target="_blank" rel="noopener noreferrer">
        <Avatar isBordered radius="sm" src="/src/assets/icons/gmail.png" size="sm" />
      </a>
    </div>
  );
};
export default Medsos;
