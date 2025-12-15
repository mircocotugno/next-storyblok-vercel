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
  // TODO: add responsive sizes
  // const b = [null, 320, 480, 768, 1024, 1280, 1536];
  // const getSizes = (size: Array<number>) =>
  //   size.map((s, i) => `${b[i] ? `(max-width: ${b[i]}px) ` : ""}${s}`);

  return <HeroImage src={blok.asset?.filename || ""} width={1024} />;
}
