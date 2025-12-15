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

export default function Columns({ blok }: ColumnsComponent) {
  const { columns, container } = classes();
  return (
    <section
      id={blok?.id}
      className={columns({ margin: blok.margin, dark: blok.dark })}
      {...storyblokEditable(blok)}
    >
      <div className={container()}>
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
      "": {},
      slim: { container: "py-3" },
      thick: { container: "py-12" },
      screen: { container: "py-18 min-h-screen" },
    },
    dark: {
      true: { columns: "text-background bg-foreground" },
    },
  },
});
