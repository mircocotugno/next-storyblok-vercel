import type { Text } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface TextComponent {
  blok: Text;
}

export default function Text({ blok }: TextComponent) {
  return <div>{blok.component}</div>;
}
