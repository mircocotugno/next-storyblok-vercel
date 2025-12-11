import type { Wrapper } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import { tv } from "tailwind-variants";

import Card from "@/components/card";
import Accordion from "@/components/accordion";
import Menu from "@/components/menu";

export interface WrapperComponent {
  blok: Wrapper & SbBlokData;
}

export default function Wrapper({ blok }: WrapperComponent) {
  const wrappers = {
    card: Card,
    accordion: Accordion,
    menu: Menu,
  };

  if (blok.mode && wrappers[blok.mode]) {
    const WrapperMode = wrappers[blok.mode];
    return <WrapperMode blok={blok} />;
  }

  return (
    <div className={classes()} {...storyblokEditable(blok)}>
      {blok.body?.map((child) => (
        <StoryblokComponent blok={child} key={child._uid} />
      ))}
    </div>
  );
}

const classes = tv({ base: "" });
