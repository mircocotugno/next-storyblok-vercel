import type { Header } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface HeaderComponent {
  blok: Header;
}

export default function Header({ blok }: HeaderComponent) {
  return <div>{blok.component}</div>;
}
