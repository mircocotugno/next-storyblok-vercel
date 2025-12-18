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
import { default as NextLink } from "next/link";

export interface HeaderComponent {
  blok: Header & SbBlokData;
  parent: string;
}

export default function Header({ blok }: HeaderComponent) {
  const [isOpen, setOpen] = useState(false);

  const classes = {
    base: "px-2 xs:px-4 sm:px-6 md:px-8 md:h-16 lg:h-20", //if light bg-foreground/70
    wrapper: "px-0 max-w-5xl lg:max-w-7xl",
    item: "hidden sm:list-item",
    menu: "items-end gap-6 py-8", //if light bg-foreground/70
    menuItem: "text-foreground", //if light text-background
  };

  return (
    <HeroNavbar
      classNames={classes}
      height={"3rem"}
      isBlurred
      shouldHideOnScroll
      {...storyblokEditable(blok)}
      onMenuOpenChange={setOpen}
    >
      {blok.image?.filename && (
        <NextLink href="/">
          <NextImage
            className="h-12 w-auto max-h-8 md:max-h-10 lg:max-h-12 "
            src={blok.image.filename}
            alt={blok.image.alt || ""}
            width={128}
            height={64}
          />
        </NextLink>
      )}
      <HeroNavbarContent justify="end">
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
