import type { Text } from "@/sbComponentType";
import Markdown from "markdown-to-jsx";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { tv } from "tailwind-variants";
import {
  justifyVariants,
  levelVariants,
  typographySlots,
  widthVariants,
  wrapperSlot,
} from "@/config/variants";
import { Typography } from "@/components/Typography";

export interface TextComponent {
  blok: Text & SbBlokData;
  parent?: string;
}

export default function Text({ blok, parent }: TextComponent) {
  const { width, justify, level } = blok;
  const { wrapper } = classes();

  return (
    <div
      className={wrapper({
        level,
        width,
        justify,
        isColumn: parent !== "cover",
      })}
      dir={blok.justify === "right" ? "rtl" : ""}
      {...storyblokEditable(blok)}
    >
      {blok.headline && (
        <Markdown
          options={{
            wrapper: null,
            forceBlock: true,
            overrides: Typography({ level }),
          }}
        >
          {blok.headline}
        </Markdown>
      )}
      {blok.content && (
        <Markdown
          options={{
            wrapper: null,
            forceBlock: true,
            overrides: Typography({ level }),
          }}
        >
          {blok.content}
        </Markdown>
      )}
    </div>
  );
}

const classes = tv({
  slots: typographySlots,
  variants: {
    width: widthVariants,
    justify: justifyVariants,
    level: levelVariants,
    isColumn: {
      true: {
        wrapper: wrapperSlot.column,
      },
    },
  },
});
