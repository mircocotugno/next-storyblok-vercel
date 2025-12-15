import type { Cover } from "@/sbComponentType";

import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import { default as NextImage } from "next/image";

import { tv } from "tailwind-variants";

export interface CoverComponent {
  blok: Cover & SbBlokData;
  parent: string;
}

export default function Cover({ blok, parent }: CoverComponent) {
  const { cover, container, wrapper, background } = classes();
  const image = blok.image;

  return (
    <section id={blok.id} className={cover({})} {...storyblokEditable(blok)}>
      <div
        className={container({
          margin: blok.margin,
          justify: blok.justify,
          hasHeader: parent === "page",
        })}
      >
        <div className={wrapper()}>
          {blok.body?.map((child) => (
            <StoryblokComponent
              blok={child}
              key={child._uid}
              parent={blok.component}
            />
          ))}
        </div>
      </div>
      {image && (
        <div className={background()}>
          <NextImage
            style={{ width: "100%" }}
            src={image.filename || ""}
            alt={image.alt || ""}
            fill
          />
        </div>
      )}
    </section>
  );
}

const classes = tv({
  slots: {
    cover: "px-4 sm:px-6 md:px-8 relative",
    container:
      "max-w-5xl lg:max-w-7xl -mx-4 gap-y-4 md:gap-y-6 lg:gap-y-8 flex flex-wrap",
    wrapper: "px-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 z-10",
    background: "absolute inset-0 z-0 overflow-hidden",
  },
  variants: {
    margin: {
      "": {
        container: "py-6",
        wrapper: "space-y-3",
      },
      slim: {
        container: "py-3",
        wrapper: "space-y-1.5",
      },
      thick: {
        container: "py-12",
        wrapper: "space-y-3",
      },
      screen: {
        container: "py-18 min-h-screen",
        wrapper: "space-y-3",
      },
    },
    // justify?: "" | "left" | "center" | "right";
    justify: {
      "": {},
      left: { container: "" },
      center: { container: "justify-center text-center" },
      right: { container: "justify-end text-right" },
    },
    hasHeader: {
      true: "first:pt-12 first:lg:pt-16",
    },
  },
  compoundVariants: [
    {
      margin: "screen",
      hasHeader: true,
      class:
        "first:min-h-[100vh - 2rem] md:first:min-h-[100vh - 3rem] lg:first:min-h-[100vh - 4rem]",
    },
  ],
});

/*
  slots: {
    columns: "px-2 xs:px-4 sm:px-6 md:px-8",
    container:
      "py-6 max-w-5xl lg:max-w-7xl -mx-3 gap-y-4 md:gap-y-6 lg:gap-y-8 flex flex-wrap",
  },
  variants: {
    margin: {
      "": {},
      slim: { container: "py-3" },
      thick: { container: "py-12" },
      screen: { container: "py-18 min-h-screen" },
    },
    dark: {
      true: { columns: "text-background bg-foreground" },
    },
  },
*/
