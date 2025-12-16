import type { Text } from "@/sbComponentType";
import Markdown from "markdown-to-jsx";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { tv } from "tailwind-variants";
import { Typography } from "@/components/Typography";

export interface TextComponent {
  blok: Text & SbBlokData;
  parent?: string;
}

export default function Text({ blok, parent }: TextComponent) {
  const { text, headline, content } = classes();
  const wrapper = null;

  return (
    <article
      className={text({
        width: blok.width || undefined,
        justify: blok.justify || undefined,
        isColumn: parent !== "cover",
      })}
      {...storyblokEditable(blok)}
    >
      {blok.headline && (
        <div className={headline({ small: blok.small })}>
          <Markdown
            options={{ wrapper, overrides: Typography({ small: blok.small }) }}
          >
            {blok.headline}
          </Markdown>
        </div>
      )}
      {blok.content && (
        <div
          dir={blok.justify === "right" ? "rtl" : ""}
          className={content({ small: blok.small })}
        >
          <Markdown options={{ wrapper, overrides: Typography() }}>
            {blok.content}
          </Markdown>
        </div>
      )}
    </article>
  );
}

const classes = tv({
  slots: {
    text: "w-full [&_li]:ml-6 wrap-break-word space-y-3 md:space-y-4 lg:space-y-8",
    headline: "space-y-2",
    content: "text-base lg:text-lg xl:text-xl space-y-2",
  },
  variants: {
    width: {
      "1/1": {
        text: "w-full",
      },
      "2/3": {
        text: "sm:w-2/3",
      },
      "1/2": {
        text: "sm:w-1/2",
      },
      "1/3": {
        text: "sm:w-1/2 md:w-1/3",
      },
      "1/4": {
        text: "sm:w-1/2 md:w-1/4",
      },
    },
    justify: {
      spaced: { text: "text-justify" },
      center: { text: "text-center" },
      right: {
        text: "text-right [&_ul]:text-right [&_li]:mr-6",
      },
    },
    small: {
      true: {
        headline: "space-y-1 mb-1 md:mb-2 lg:mb-3",
        content: "text-xs lg:text-sm xl:text-base space-y-0.5",
      },
    },
    isColumn: {
      true: {
        text: "px-4",
      },
    },
  },
});
