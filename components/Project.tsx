import type { Project } from "@/sbComponentType";
import Meta from "@/components/Meta";
import { StoryblokComponent } from "@storyblok/react";
import { Fragment } from "react";
import { ListsProps } from "@/pages";

export interface ProjectComponent {
  blok: Project;
  lists: ListsProps;
}

export default function Project({ blok, lists }: ProjectComponent) {
  const header = typeof blok.header === "string" ? null : blok.header?.content;
  const footer = typeof blok.footer === "string" ? null : blok.footer?.content;

  return (
    <Fragment>
      <Meta blok={blok} />
      {header && <StoryblokComponent blok={header} />}
      <main className={`${!!header ? "-mt-12 md:-mt-16 lg:-mt-20" : null}`}>
        {blok.body?.map((child) => (
          <StoryblokComponent
            blok={child}
            key={child._uid}
            parent={blok.component}
            lists={lists}
          />
        ))}
      </main>
      {footer && <StoryblokComponent blok={footer} />}
    </Fragment>
  );
}
