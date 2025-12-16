import type { Columns } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import { tv } from "tailwind-variants";

export interface ColumnsComponent {
  blok: Columns & SbBlokData;
  parent: string;
}

export default function Columns({ blok, parent }: ColumnsComponent) {
  const { columns, container } = classes();
  console.log(blok.component);

  return (
    <section
      id={blok?.id}
      className={columns({
        theme: blok.theme || undefined,
        dark: blok.dark,
        hasHeader: parent === "page",
      })}
      {...storyblokEditable(blok)}
    >
      <div className={container({ margin: blok.margin || undefined })}>
        {blok.body?.map((child) => (
          <StoryblokComponent
            blok={child}
            key={child._uid}
            parent={blok.component}
          />
        ))}
      </div>
    </section>
  );
}

const classes = tv({
  slots: {
    columns: "px-4 sm:px-6 md:px-8",
    container:
      "py-6 max-w-5xl lg:max-w-7xl -mx-4 gap-y-4 md:gap-y-6 lg:gap-y-8 flex flex-wrap",
  },
  variants: {
    margin: {
      slim: {
        container: "py-1.5 md:py-2 lg:py-3 gap-y-2 md:gap-y-4 lg:gap-y-6",
      },
      thick: {
        container: "py-12 md:py-14 lg:py-16 gap-y-8 md:gap-y-10 lg:gap-y-12",
      },
      screen: {
        container: "py-18 md:py-20 lg:py-24 min-h-screen item-center",
      },
    },
    theme: {
      primary: {
        columns: "bg-primary-200",
      },
      secondary: {
        columns: "bg-secondary-200",
      },
    },
    dark: {
      true: { columns: "text-background bg-background" },
    },
    hasHeader: {
      true: { columns: "first:pt-12 first:md:pt-16 first:lg:pt-20" },
    },
  },
  compoundVariants: [
    {
      theme: "primary",
      dark: true,
      class: {
        columns: "bg-primary-800",
      },
    },
    {
      theme: "secondary",
      dark: true,
      class: {
        columns: "bg-secondary-800",
      },
    },
  ],
});
