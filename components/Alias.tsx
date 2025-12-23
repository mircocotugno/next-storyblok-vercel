import { ListsProps } from "@/pages";
import type { Alias } from "@/sbComponentType";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { default as NextLink } from "next/link";
import {
  Card as HeroCard,
  CardHeader as HeroCardHeader,
  Image as HeroImage,
} from "@heroui/react";
import { tv } from "tailwind-variants";
import { widthVariants } from "@/config/variants";

interface AliasComponent {
  blok: Alias & SbBlokData;
  lists: ListsProps;
}

export default function Alias({ blok, lists }: AliasComponent) {
  const list = !!blok.list ? lists[blok.list] : [];
  const story = !blok.story && list?.length ? list[0] : blok.story;
  if (!story || typeof story === "string") return null;

  const alias = story.content;
  const { wrapper, card, anchor, header, title, description } = classes();

  return (
    <div
      className={wrapper({ width: blok.width || undefined })}
      {...storyblokEditable(blok)}
    >
      <HeroCard className={card()} key={story.full_slug}>
        <NextLink href={story.full_slug} className="group block h-full">
          <div className={anchor()}>
            <HeroCardHeader className={header()}>
              <h4 className={title()}>{alias.title}</h4>
              <p className={description()}>{alias.description}</p>
            </HeroCardHeader>
            {!!alias.image?.filename && (
              <HeroImage
                removeWrapper
                className="z-0 w-full h-full object-cover"
                src={alias.image.filename}
                loading="lazy"
              />
            )}
          </div>
        </NextLink>
      </HeroCard>
    </div>
  );
}

const classes = tv({
  slots: {
    wrapper: "min-h-80",
    card: "bg-neutral-300 w-full h-full",
    anchor: `
      relative h-full min-h-64 overflow-hidden z-0
      hover:[&_h4]:underline-offset-3
      hover:[&_h4]:decoration-background/75

      before:absolute before:inset-0 before:w-full before:h-full
      before:min-h-64 before:min-w-80 before:z-10
      before:bg-linear-to-tr before:from-neutral-900/70 before:to-neutral-900/0

      before:opacity-100 lg:before:opacity-0
      group-hover:before:opacity-100
      before:transition-opacity before:duration-300 before:ease-in-out
    `,
    header: `
      text-background absolute z-20
      inset-1 md:inset-2 lg:inset-3
      flex flex-col justify-end items-start w-auto
      space-y-2
    `,
    title: `
      font-black text-xl/5 lg:text-3xl/7
      decoration-2 decoration-background/0
      transition-all duration-300 ease-in-out
      underline underline-offset-6
    `,
    description: "text-xs/4 lg:text-sm/5 line-clamp-2 text-background-200",
  },
  variants: {
    width: widthVariants,
    dark: {
      true: {
        header: "text-foreground decoration-foreground/0",
        anchor: "hover:[&_h4]:decoration-foreground/75",
      },
    },
  },
});
