import type { Carousel } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface CarouselComponent {
  blok: Carousel & SbBlokData;
}

export default function Carousel({ blok }: CarouselComponent) {
  return <div>{blok.component}</div>;
}
