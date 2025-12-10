import type { Text } from "@/sbComponentType";
import Markdown from "markdown-to-jsx";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import { Fragment } from "react";
import { tv } from "tailwind-variants";

export interface TextComponent {
  blok: Text;
}

export default function Text({ blok }: TextComponent) {
  const { headline, content } = classes();
  return (
    <Fragment>
      {blok.headline && (
        <div className={headline()}>
          <Markdown options={{ wrapper, overrides }}>{blok.headline}</Markdown>
        </div>
      )}
      {blok.content && (
        <div className={content()}>
          <Markdown options={{ wrapper, overrides }}>{blok.content}</Markdown>
        </div>
      )}
    </Fragment>
  );
}

const classes = tv({
  slots: {
    headline: "",
    content: "",
  },
});

const wrapper = null;
const overrides = {};
