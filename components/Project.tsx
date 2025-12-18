import type { Project } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface ProjectComponent {
  blok: Project;
}

export default function Project({ blok }: ProjectComponent) {
  return <div>{blok.component}</div>;
}
