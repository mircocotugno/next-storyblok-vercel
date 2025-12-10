import type { Image } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

import { Image as HeroImage } from "@heroui/react";
import { default as NextImage } from "next/image";

export interface ImageComponent {
  blok: Image;
}

export default function Image({ blok }: ImageComponent) {
  return <HeroImage src={blok.asset?.filename || ""} width={1024} />;
}
