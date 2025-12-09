import type { Link } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface LinkComponent {
  blok: Link;
}

export default function Link({ blok }: LinkComponent) {
  return <div>{blok.component}</div>;
}
