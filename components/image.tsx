import type { Image } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface ImageComponent {
  blok: Image;
}

export default function Image({ blok }: ImageComponent) {
  return <div>{blok.component}</div>;
}
