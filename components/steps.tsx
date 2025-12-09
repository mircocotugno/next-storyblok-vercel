import type { Steps } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface StepsComponent {
  blok: Steps;
}

export default function Steps({ blok }: StepsComponent) {
  return <div>{blok.component}</div>;
}
