import type { Cover } from "@/sbComponentType";
import { Image as HeroImage } from "@heroui/react";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

import { tv } from "tailwind-variants";
import {
  alignVariants,
  containerSlot,
  darkVariant,
  hasHeaderVariant,
  heightVariant,
  justifyVariants,
  marginCompoundVariants,
  marginVariants,
  sectionSlot,
  themeCompoundVariants,
  themeVariants,
} from "@/config/variants";

export interface CoverComponent {
  blok: Cover & SbBlokData;
  parent: string;
  hasHeader: boolean;
}

export default function Cover({ blok, hasHeader }: CoverComponent) {
  const { theme, margin, height, align, justify, dark, blurred } = blok;
  const { section, container, wrapper, background } = classes();
  const image = blok.image;

  return (
    <section
      id={blok.id}
      {...storyblokEditable(blok)}
      className={section({ dark, margin, height, hasHeader, theme })}
    >
      <div className={container({ margin, justify, align })}>
        <div className={wrapper({ blurred, dark })}>
          {blok.body?.map((child) => (
            <StoryblokComponent
              blok={child}
              key={child._uid}
              parent={blok.component}
            />
          ))}
        </div>
      </div>
      {image?.filename && (
        <HeroImage
          src={image.filename}
          alt={image.alt || ""}
          radius="none"
          classNames={{
            wrapper: background(),
            img: "w-full h-full object-cover",
          }}
        />
      )}
    </section>
  );
}

const classes = tv({
  slots: {
    section: sectionSlot.base + sectionSlot.background,
    container: containerSlot.base + containerSlot.spaced + containerSlot.colums,
    wrapper: "px-4 w-full sm:w-2/3 md:w-1/2 space-y-3 z-10",
    background: "absolute inset-0 -z-1 max-w-full!",
  },
  variants: {
    theme: themeVariants,
    hasHeader: hasHeaderVariant,
    margin: marginVariants,
    height: heightVariant,
    justify: justifyVariants,
    align: alignVariants,
    dark: darkVariant,
    blurred: {
      true: {
        wrapper:
          "relative z-0 before:absolute before:-inset-24 before:-z-20 before:mask-[url(/mask.png)] before:mask-size-[100%100%] before:backdrop-blur-2xl",
      },
    },
  },
  compoundVariants: [...themeCompoundVariants, ...marginCompoundVariants],
  defaultVariants: {
    theme: "default",
    margin: "default",
  },
});
