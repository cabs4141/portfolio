import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import profile from "../../assets/img/profile.jpg";

export default function MyCard() {
  return (
    <Card isFooterBlurred className="w-fit h-[220px] col-span-12 sm:col-span-7 ">
      {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/100 uppercase font-bold">web developer</p>
      </CardHeader> */}
      <Image removeWrapper alt="Relaxing app background" className="z-0 w-auto h-64 object-cover" src={profile} />
      <CardFooter className="max-h-4 pb-6 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 pt-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Contact Me</p>
          </div>
        </div>
        <div className="pt-2">
          <Button radius="full" size="sm" className="max-w-10 max-h-6">
            Whats App
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
