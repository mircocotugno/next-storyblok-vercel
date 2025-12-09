import type { Cover } from "@/sbComponentType";

import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import Image from "next/image";

import { tv } from "tailwind-variants";

export interface CoverComponent {
  blok: Cover & SbBlokData;
}

export default function Cover({ blok }: CoverComponent) {
  const { section, container, wrapper, background } = classes();
  const image = blok.image;
  return (
    <section
      className={section()}
      {...storyblokEditable(blok)}
      key={blok._uid}
      id={blok.id}
    >
      <div className={container()}>
        <div className={wrapper()}>
          {blok.body?.map((child) => (
            <StoryblokComponent blok={child} key={child._uid} />
          ))}
        </div>
      </div>
      {image && (
        <div className={background()}>
          <Image src={image.filename || ""} alt={image.alt || ""} fill />
        </div>
      )}
    </section>
  );
}

const classes = tv({
  slots: { section: "", container: "", wrapper: "", background: "" },
});
