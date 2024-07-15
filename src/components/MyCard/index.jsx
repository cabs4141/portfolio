import React from "react";
import { CardBody, CardContainer, CardItem } from "../MyCard/3d-card";
import { Image } from "@nextui-org/react";

const MyCard = ({ judul, title, img }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-w-auto sm:w-[20rem] h-auto rounded-xl p-3 border cursor-pointer">
        <CardItem className="text-md font-bold text-neutral-600 dark:text-white">{judul}</CardItem>
        <CardItem as="p" className="text-neutral-500 text-xs mt-1 dark:text-neutral-300 pb-1">
          {title}
        </CardItem>
        <CardItem>
          <Image src={img} className="w-full h-auto" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default MyCard;
