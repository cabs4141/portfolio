import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import profile3 from "../../assets/img/profile3.jpg";

const AboutCard = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="lg:max-w-[640px] max-w-[320px] sm:max-w-[480px] max-h-[440px] sm:max-h-[240px] mb-60 xl:min-h-[300px] xl:mt-40">
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
        <p className="mb-4">Hi, saya Binda, saat ini sebagai mahasiswa jenjang S1 Ilmu Komputer. Saya berasal dari Selong, Lombok Timur, Nusa Tenggara Barat</p>
        <p className="mb-4">Pengalaman saya menjadi Web Developer dimulai sejak tahun 2023 saat magang di Dinas Sosial Provinsi NTB, yaitu membuat Website sederhana pengelola data penerima bantuan sosial.</p>
        <p className="mb-4">
          Saat ini saya sudah menguasai beberapa teknologi untuk kebtuhan development, seperti React.js di frontend, Express.js dan Hapi.js di backend dengan MySql sebagai database, dan saya gunakan container seperti Docker atau Podman
          untuk kebutuhan deployment dan monitoring
        </p>
        <p>Untuk styling saya menggunakan Tailwind yang dikombinasikan dengan framework seperti Aceternity UI dan Next UI yang jua digunakan untuk membuat website ini.</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className=" text-small">#masihpemula</p>
        </div>
        <div className="flex gap-1">
          <p className=" text-small">#ajarindongbang</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AboutCard;
