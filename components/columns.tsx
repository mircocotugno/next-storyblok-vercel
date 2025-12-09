import type { Columns } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface ColumnsComponent {
  blok: Columns & SbBlokData;
}

export default function Columns({ blok }: ColumnsComponent) {
  return <div {...storyblokEditable(blok)}> {blok.component}</div>;
}
