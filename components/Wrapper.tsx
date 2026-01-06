import type { Wrapper } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import Card from "@/components/Card";
import Accordion from "@/components/Accordion";
import Menu from "@/components/Menu";
import { tv } from "tailwind-variants";
import { widthVariants } from "@/config/variants";

const wrappers = {
  card: Card,
  accordion: Accordion,
  menu: Menu,
};

export interface WrapperComponent {
  blok: Wrapper & SbBlokData;
}

export default function Wrapper({ blok }: WrapperComponent) {
  if (blok.mode && wrappers[blok.mode]) {
    const WrapperMode = wrappers[blok.mode];
    return <WrapperMode blok={blok} />;
  }

  const { width } = blok;
  const { wrapper } = classes();

  return (
    <div className={wrapper({ width })} {...storyblokEditable(blok)}>
      {blok.body?.map((child) => (
        <StoryblokComponent blok={child} key={child._uid} />
      ))}
    </div>
  );
}

const classes = tv({
  slots: {
    wrapper: "blok space-y-4 flex-none basis-xs",
  },
  variants: {
    width: widthVariants,
  },
  defaultVariants: {
    width: "default",
  },
});
