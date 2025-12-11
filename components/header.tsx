import type { Header } from "@/sbComponentType";
import { useState } from "react";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

import {
  Navbar as HeroNavbar,
  NavbarBrand as HeroNavbarBrand,
  NavbarContent as HeroNavbarContent,
  NavbarItem as HeroNavbarItem,
  NavbarMenu as HeroNavbarMenu,
  NavbarMenuItem as HeroNavbarMenuItem,
  NavbarMenuToggle as HeroNavbarMenuToggle,
} from "@heroui/react";
import { default as NextImage } from "next/image";

export interface HeaderComponent {
  blok: Header & SbBlokData;
}

export default function Header({ blok }: HeaderComponent) {
  const [isOpen, setOpen] = useState(false);
  return (
    <HeroNavbar {...storyblokEditable(blok)} onMenuOpenChange={setOpen}>
      {blok.image?.filename && (
        <HeroNavbarBrand>
          <NextImage
            src={blok.image.filename}
            alt={blok.image.alt || ""}
            width={128}
            height={64}
          />
        </HeroNavbarBrand>
      )}
      <HeroNavbarContent>
        {blok.links?.map((child) => (
          <HeroNavbarItem key={child._uid}>
            <StoryblokComponent blok={child} />
          </HeroNavbarItem>
        ))}
        <HeroNavbarMenuToggle
          className="sm:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        />
      </HeroNavbarContent>
      <HeroNavbarMenu>
        {blok.links?.map((child) => (
          <HeroNavbarMenuItem key={child._uid}>
            <StoryblokComponent blok={child} />
          </HeroNavbarMenuItem>
        ))}
      </HeroNavbarMenu>
    </HeroNavbar>
  );
}
