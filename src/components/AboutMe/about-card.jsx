import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import profile3 from "../../assets/img/profile3.jpg";

const AboutCard = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="lg:max-w-[640px] max-w-[320px] sm:max-w-[480px] max-h-[440px] sm:max-h-[80px] mb-10 xl:min-h-[300px] md:min-h-[250px] mt-32 xl:mt-10 md:mt-60">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={profile3} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Binda Adib Rama Samudra</h4>
            <h5 className="text-small tracking-tight text-default-400">@bindarama_</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="mb-4">Hi, I am Binda, currently an undergraduate student in Computer Science. I am from Selong, East Lombok, West Nusa Tenggara.</p>
        <p className="mb-4">I started my experience as a Web Developer in 2023 during an internship at the Social Service Office of NTB Province, where I created a simple website to manage social assistance recipient data.</p>
        <p className="mb-4">
          Currently, I have mastered several technologies for development needs, such as React.js for the frontend, Express.js for the backend with Mongo DB as the database, and I use containers like Docker or Podman for deployment and
          monitoring purposes.
        </p>
        <p>For styling, I use Tailwind combined with frameworks like Aceternity UI and Next UI for building websites.</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className=" text-small">#masihpemula</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AboutCard;
