import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ContactButton from "./contactme";
import moai from "../../assets/icons/pngwing.com.png";

const NextNav = ({ navItems }) => {
  return (
    <Navbar className="fixed   bg-transparent">
      <NavbarBrand className="absolute left-1/2 transform -translate-x-1/2 sm:relative sm:left-0 sm:transform-none">
        <Link href="#section9">
          <div className="flex flex-row items-center gap-2">
            <p className="font-bold text-inherit bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold  ">P, INFO LOKER</p>
            <img src={moai} alt="" className="max-w-7" />
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link color="foreground" href={`#${item.link}`}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <ContactButton href="#contactme" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NextNav;
