import type { Text } from "@/sbComponentType";
import Markdown from "markdown-to-jsx";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { tv } from "tailwind-variants";
import { justifyVariants, widthVariants } from "@/config/variants";
import { Typography } from "@/components/Typography";

export interface TextComponent {
  blok: Text & SbBlokData;
  parent?: string;
}

export default function Text({ blok, parent }: TextComponent) {
  const { width, justify, small } = blok;
  const { wrapper, headline, content } = classes();

  return (
    <article
      className={wrapper({ width, justify, isColumn: parent !== "cover" })}
      {...storyblokEditable(blok)}
    >
      {blok.headline && (
        <div className={headline({ small })}>
          <Markdown
            options={{
              wrapper: null,
              overrides: Typography({ small }),
            }}
          >
            {blok.headline}
          </Markdown>
        </div>
      )}
      {blok.content && (
        <div
          dir={blok.justify === "right" ? "rtl" : ""}
          className={content({ small })}
        >
          <Markdown options={{ wrapper: null, overrides: Typography() }}>
            {blok.content}
          </Markdown>
        </div>
      )}
    </article>
  );
}

const classes = tv({
  slots: {
    wrapper:
      "w-full [&_li]:ml-6 wrap-break-word space-y-1 md:space-y-1.5 lg:space-y-2",
    headline: "space-y-1",
    content: "text-base lg:text-lg xl:text-xl space-y-1",
  },
  variants: {
    width: widthVariants,
    justify: justifyVariants,
    small: {
      true: {
        headline: "space-y-1 mb-1 md:mb-2 lg:mb-3",
        content: "text-xs lg:text-sm xl:text-base space-y-0.5",
      },
    },
    isColumn: {
      true: {
        wrapper: "px-2 md:px-3 lg:px-4",
      },
    },
  },
  defaultVariants: {
    width: "default",
  },
});
