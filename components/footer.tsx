import type { Footer } from "@/sbComponentType";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { default as NextImage } from "next/image";
import { tv } from "tailwind-variants";

export interface FooterComponent {
  blok: Footer & SbBlokData;
  parent: string;
}

export default function Footer({ blok }: FooterComponent) {
  const { footer, container, column, copyright, terms } = classes();
  return (
    <footer className={footer()} {...storyblokEditable(blok)}>
      <div className={container({ columns: true })}>
        {blok.image?.filename && (
          <div className="w-full p-2">
            <NextImage
              className="max-h-8 md:max-h-10 lg:max-h-12 w-auto"
              src={blok.image.filename}
              alt={blok.image.alt || ""}
              width={128}
              height={64}
            />
          </div>
        )}
        {blok.body?.map((child) => (
          <div className={column()} key={child._uid}>
            {child.headline && (
              <h4 className="font-medium mb-2.5">
                <Markdown options={{ wrapper, overrides }}>
                  {child.headline}
                </Markdown>
              </h4>
            )}
            {child.content && (
              <Markdown options={{ wrapper, overrides }}>
                {child.content}
              </Markdown>
            )}
          </div>
        ))}
      </div>
      <div className={container()}>
        {blok.copyright && (
          <p className={copyright()}>
            <span className="text-sm">© </span>
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
  slots: {
    footer:
      "bg-background text-foreground py-4 px-2 xs:px-4 sm:px-6 md:px-8 pb-8",
    container:
      "max-w-5xl lg:max-w-7xl py-2 gap-y-4 md:gap-y-6 lg:gap-y-8 flex flex-wrap justify-between",
    column: "px-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6",
    copyright: "text-xs opacity-65 font-bold",
    terms:
      "text-xs opacity-65 hover:opacity-100 transition-all duration-150 ease-in",
  },
  variants: {
    columns: {
      true: {
        container: "-mx-3 py-4",
      },
    },
  },
});

const wrapper = null;
const overrides = {
  a: {
    component: ({ href, children }: { href: string; children: string }) => (
      <Link
        className="hover:text-primary transition-all duration-300 ease-in-out underline underline-offset-4 hover:underline-offset-2 decoration-1 decoration-foreground/0 hover:decoration-primary/75"
        href={href || ""}
      >
        {children}
      </Link>
    ),
  },
  li: {
    component: ({ children }: { children: string }) => (
      <li className="text-sm not-last:mb-2 opacity-75 hover:opacity-100 transition-all duration-150 ease-in">
        {children}
      </li>
    ),
  },
};
