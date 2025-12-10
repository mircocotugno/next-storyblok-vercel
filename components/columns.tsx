import type { Columns } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import { tv } from "tailwind-variants";

export interface ColumnsComponent {
  blok: Columns & SbBlokData;
}

export default function Columns({ blok }: ColumnsComponent) {
  const { columns, container } = classes();
  return (
    <section id={blok.id} className={columns()} {...storyblokEditable(blok)}>
      <div className={container()}>
        {blok.body?.map((child) => (
          <StoryblokComponent blok={child} key={child._uid} />
        ))}
      </div>
    </section>
  );
}

const classes = tv({ slots: { columns: "", container: "" } });
