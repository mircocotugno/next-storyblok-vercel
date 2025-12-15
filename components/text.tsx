import type { Text } from "@/sbComponentType";
import Markdown from "markdown-to-jsx";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { tv } from "tailwind-variants";
import Link from "next/link";

export interface TextComponent {
  blok: Text & SbBlokData;
  parent?: string;
}

export default function Text({ blok, parent }: TextComponent) {
  const { text, headline, content } = classes();

  return (
    <article
      className={text({
        width: parent === "cover" ? "" : blok.width,
        justify: blok.justify,
        isColumn: parent !== "cover",
      })}
      {...storyblokEditable(blok)}
    >
      {blok.headline && (
        <div className={headline()}>
          <Markdown options={{ wrapper, overrides }}>{blok.headline}</Markdown>
        </div>
      )}
      {blok.content && (
        <div dir={blok.justify === "right" ? "rtl" : ""} className={content()}>
          <Markdown options={{ wrapper, overrides }}>{blok.content}</Markdown>
        </div>
      )}
    </article>
  );
}

const classes = tv({
  slots: {
    text: "[&_li]:ml-6",
    headline: "space-y-2 mb-3 md:mb-4 lg:mb-8",
    content: "text-base md:text-lg lg:text-xl space-y-2",
  },
  variants: {
    width: {
      "": {
        text: "",
      },
      "1/1": {
        text: "w-full",
      },
      "2/3": {
        text: "sm:w-2/3",
      },
      "1/2": {
        text: "sm:w-1/2",
        headline: "hyphens-auto",
      },
      "1/3": {
        text: "sm:w-1/2 md:w-1/3",
        headline: "hyphens-auto",
      },
    },
    justify: {
      "": {},
      spaced: { text: "text-justify" },
      center: { text: "text-center" },
      right: {
        text: "text-right [&_ul]:text-right [&_li]:mr-6",
      },
    },
    isColumn: {
      true: {
        text: "px-4",
      },
    },
  },
});

const wrapper = null;
const overrides = {
  h1: {
    component: ({ children }: { children: string }) => (
      <h1 className="text-6xl/13 lg:text-7xl/16 xl:text-8xl/19 font-black">
        {children}
      </h1>
    ),
  },
  h2: {
    component: ({ children }: { children: string }) => (
      <h2 className="text-5xl/10 lg:text-6xl/13 xl:text-7xl/15 font-extrabold">
        {children}
      </h2>
    ),
  },
  h3: {
    component: ({ children }: { children: string }) => (
      <h3 className="text-4xl/9 lg:text-5xl/11 xl:text-6xl/13 font-extrabold">
        {children}
      </h3>
    ),
  },
  h4: {
    component: ({ children }: { children: string }) => (
      <h4 className="text-3xl/8 lg:text-4xl/9 xl:text-5xl/11 font-bold">
        {children}
      </h4>
    ),
  },
  h5: {
    component: ({ children }: { children: string }) => (
      <h5 className="text-2xl/6 lg:text-3xl/8 xl:text-4xl/9 font-semibold">
        {children}
      </h5>
    ),
  },
  h6: {
    component: ({ children }: { children: string }) => (
      <h6 className="text-xl/6 md:text-2xl/7 lg:text-3xl/8 font-medium">
        {children}
      </h6>
    ),
  },
  p: {
    component: ({ children }: { children: string }) => (
      <p className="text-base md:text-lg lg:text-xl">{children}</p>
    ),
  },
  ul: {
    component: ({ children }: { children: string }) => (
      <ul className="text-base md:text-lg lg:text-xl list-disc list-outside my-4">
        {children}
      </ul>
    ),
  },
  a: {
    component: ({ href, children }: { href: string; children: string }) => (
      <Link
        className=" font-medium transition-all duration-300 ease-in-out hover:text-primary underline underline-offset-4 hover:underline-offset-2 decoration-1 decoration-foreground/25 hover:decoration-primary/75"
        href={href || ""}
      >
        {children}
      </Link>
    ),
  },
};
