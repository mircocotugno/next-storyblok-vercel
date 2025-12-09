import type { Post } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface PostComponent {
  blok: Post;
}

export default function Post({ blok }: PostComponent) {
  return <div>{blok.component}</div>;
}
