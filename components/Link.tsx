import type { Link } from "@/sbComponentType";
import { useRouter } from "next/router";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

import { Button as HeroButton, Link as HeroLink } from "@heroui/react";
import { tv } from "tailwind-variants";

export interface LinkComponent {
  blok: Link & SbBlokData;
  parent?: string;
}

export default function Link({ blok, parent }: LinkComponent) {
  const { button, link } = classes();

  let url = blok.href?.url || `/${blok.href?.cached_url}`;

  const router = useRouter();
  if (blok.href?.anchor) {
    const anchor = blok.href?.anchor?.replaceAll(" ", "-");
    url = url === router.asPath + "/" ? `#${anchor}` : `${url}#${anchor}`;
  }

  const label = blok.label || "Collegamento";

  return blok.button ? (
    <HeroButton
      href={url}
      as={HeroLink}
      color="primary"
      variant={parent === "header" ? "bordered" : "solid"}
      className={button({ slim: parent === "header" })}
      {...storyblokEditable(blok)}
    >
      {label}
    </HeroButton>
  ) : (
    <HeroLink href={url} className={link()} {...storyblokEditable(blok)}>
      {label}
    </HeroLink>
  );
}

const classes = tv({
  slots: {
    button: "text-medium",
    link: "text-inherit",
  },
  variants: {
    slim: {
      true: {
        button: "px-3.5 h-9 border-1.5",
      },
    },
  },
});
