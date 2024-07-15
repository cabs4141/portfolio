import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ContactButton from "./contactme";

const NextNav = ({ navItems }) => {
  return (
    <Navbar shouldHideOnScroll className="relative">
      <NavbarBrand className="absolute left-1/2 transform -translate-x-1/2 sm:relative sm:left-0 sm:transform-none">
        <p className="font-bold text-inherit bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mt-4 md:mt-0">P, INFO LOKER</p>
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
