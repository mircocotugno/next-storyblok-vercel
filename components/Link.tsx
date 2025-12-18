import type { Link } from "@/sbComponentType";
import { useRouter } from "next/router";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

import { Button as HeroButton, Link as HeroLink } from "@heroui/react";
import { tv } from "tailwind-variants";

export interface LinkComponent {
  blok: Link & SbBlokData;
}

export default function Link({ blok }: LinkComponent) {
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
      className={button()}
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
    button: "",
    link: "text-inherit",
  },
});
