import type { Wrapper } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import { tv } from "tailwind-variants";

export interface WrapperComponent {
  blok: Wrapper & SbBlokData;
}

export default function Wrapper({ blok }: WrapperComponent) {
  return (
    <div className={classes()} {...storyblokEditable(blok)}>
      {blok.body?.map((child) => (
        <StoryblokComponent blok={child} key={child._uid} />
      ))}
    </div>
  );
}

const classes = tv({ base: "" });
