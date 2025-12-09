import type { Page } from "@/sbComponentType";
import Meta from "@/components/meta";
import { StoryblokComponent } from "@storyblok/react";
import { Fragment } from "react";

export interface PageComponent {
  blok: Page;
}

export default function Page({ blok }: PageComponent) {
  const header = typeof blok.header === "string" ? null : blok.header?.content;
  const footer = typeof blok.footer === "string" ? null : blok.footer?.content;
  return (
    <Fragment>
      <Meta blok={blok} />
      {header && <StoryblokComponent blok={header} />}
      <main>
        {blok.body?.map((child) => (
          <StoryblokComponent blok={child} key={child._uid} />
        ))}
      </main>
      {footer && <StoryblokComponent blok={footer} />}
    </Fragment>
  );
}
