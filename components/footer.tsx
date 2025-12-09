import type { Footer } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface FooterComponent {
  blok: Footer;
}

export default function Footer({ blok }: FooterComponent) {
  return <div>{blok.component}</div>;
}
