import type { Wrapper } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface WrapperComponent {
  blok: Wrapper & SbBlokData;
}

export default function Wrapper({ blok }: WrapperComponent) {
  return <div>{blok.component}</div>;
}
