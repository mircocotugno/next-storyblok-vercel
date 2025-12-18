import type { Cover } from "@/sbComponentType";

import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

import { tv } from "tailwind-variants";
import { containerSlot } from "@/config/variants";

export interface CoverComponent {
  blok: Cover & SbBlokData;
  parent: string;
}

export default function Cover({ blok, parent }: CoverComponent) {
  const { section, container, wrapper, background } = classes();
  const image = blok.image;

  return (
    <section
      id={blok.id}
      className={section({
        dark: blok.dark,
        hasHeader: parent === "page",
        theme: blok.theme || undefined,
      })}
      {...storyblokEditable(blok)}
    >
      <div
        className={container({
          margin: blok.margin || undefined,
          justify: blok.justify || undefined,
        })}
      >
        <div className={wrapper({ blurred: blok.blurred, dark: blok.dark })}>
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
        <div
          style={{ backgroundImage: `url(${blok.image?.filename})` }}
          className={background({ theme: blok.theme || undefined })}
        />
      )}
    </section>
  );
}

const classes = tv({
  slots: {
    section: "px-4 sm:px-6 md:px-8 relative z-0",
    container:
      containerSlot + " py-6 md:py-9 lg:py-12 gap-y-4 md:gap-y-6 lg:gap-y-8",
    wrapper: "px-4 w-full sm:w-2/3 md:w-1/2 space-y-3 z-10",
    background: "absolute inset-0 -z-1 bg-cover bg-center",
  },
  variants: {
    theme: {
      primary: {
        section: "bg-primary",
      },
      secondary: {
        section: "bg-secondary",
      },
    },
    margin: {
      slim: {
        container: "py-1.5 md:py-2 lg:py-3",
        wrapper: "space-y-1.5",
      },
      thick: {
        container: "py-12 md:py-14 lg:py-16",
        wrapper: "space-y-3",
      },
      screen: {
        container: "py-18 md:py-20 lg:py-24 min-h-screen item-center",
        wrapper: "space-y-3",
      },
    },
    justify: {
      left: { container: "justify-start text-left" },
      center: { container: "justify-center text-center" },
      right: { container: "justify-end text-right" },
    },
    dark: {
      true: { section: "text-background bg-foreground" },
    },
    blurred: {
      true: {
        wrapper:
          "relative z-0 before:absolute before:-inset-24 before:-z-20 before:mask-[url(/mask.png)] before:mask-size-[100%100%] before:backdrop-blur-2xl",
      },
    },
    hasHeader: {
      true: { section: "first:pt-12 first:md:pt-16 first:lg:pt-20" },
    },
  },
  compoundVariants: [
    {
      margin: "screen",
      hasHeader: true,
      class: {
        section:
          "first:min-h-[100vh - 2rem] md:first:min-h-[100vh - 3rem] lg:first:min-h-[100vh - 4rem]",
      },
    },
    {
      theme: "primary",
      dark: true,
      class: {
        section: "bg-primary-50",
      },
    },
    {
      theme: "secondary",
      dark: true,
      class: {
        section: "bg-secondary-50",
      },
    },
    {
      theme: undefined,
      dark: true,
      class: {
        section: "bg-background",
      },
    },
  ],
});
