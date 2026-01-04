import { ListsProps } from "@/pages";
import type { Columns } from "@/sbComponentType";
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
  marginVariants,
  sectionSlot,
  themeCompoundVariants,
  themeVariants,
} from "@/config/variants";

export interface ColumnsComponent {
  blok: Columns & SbBlokData;
  lists: ListsProps;
  hasHeader: boolean;
  parent: string;
}

export default function Columns({ blok, lists, hasHeader }: ColumnsComponent) {
  const { theme, dark, margin, height, align } = blok;
  const { section, container } = classes();

  return (
    <section
      id={blok?.id}
      className={section({ theme, dark, hasHeader, height })}
      {...storyblokEditable(blok)}
    >
      <div className={container({ margin, align })}>
        {blok.body?.map((child) => (
          <StoryblokComponent
            blok={child}
            key={child._uid}
            lists={lists}
            parent={blok.component}
          />
        ))}
      </div>
    </section>
  );
}

const classes = tv({
  slots: {
    section: sectionSlot.base,
    container: containerSlot.base + containerSlot.columns,
  },
  variants: {
    align: alignVariants,
    height: heightVariant,
    margin: marginVariants,
    theme: themeVariants,
    dark: darkVariant,
    hasHeader: hasHeaderVariant,
  },
  compoundVariants: [...themeCompoundVariants],
  defaultVariants: {
    theme: "default",
    margin: "default",
  },
});
