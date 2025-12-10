import type { Footer } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import Markdown from "markdown-to-jsx";
import { default as NextImage } from "next/image";
import { tv } from "tailwind-variants";

export interface FooterComponent {
  blok: Footer;
}

export default function Footer({ blok }: FooterComponent) {
  const { footer, container, column, copyright, terms } = classes();
  const logo = blok.image;
  return (
    <footer className={footer()}>
      <div className={container()}>
        {logo && (
          <NextImage
            src={logo.filename || ""}
            alt={logo.alt || ""}
            width={128}
            height={64}
          />
        )}
        {blok.body?.map((child) => (
          <div className={column()} key={child._uid}>
            <StoryblokComponent blok={child} />
          </div>
        ))}
      </div>
      <div className={container()}>
        {blok.copyright && (
          <p className={copyright()}>
            <Markdown options={{ wrapper, overrides }}>
              {blok.copyright}
            </Markdown>
          </p>
        )}
        {blok.terms && (
          <p className={terms()}>
            <Markdown options={{ wrapper, overrides }}>{blok.terms}</Markdown>
          </p>
        )}
      </div>
    </footer>
  );
}

const classes = tv({
  slots: { footer: "", container: "", column: "", copyright: "", terms: "" },
});

const wrapper = null;
const overrides = {};
