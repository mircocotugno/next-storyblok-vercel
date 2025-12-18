import { ListsProps } from "@/pages";
import type { Alias } from "@/sbComponentType";
import { SbBlokData } from "@storyblok/react";
import { default as NextLink } from "next/link";
import {
  Card as HeroCard,
  CardHeader as HeroCardHeader,
  Link as HeroLink,
  // Button as HeroButton,
  Image as HeroImage,
} from "@heroui/react";
import { tv } from "tailwind-variants";

interface AliasComponent {
  blok: Alias & SbBlokData;
  lists: ListsProps;
}

export default function Alias({ blok, lists }: AliasComponent) {
  const list = !!blok.list ? lists[blok.list] : [];
  const story = !blok.story && list?.length ? list[0] : blok.story;
  if (!story || typeof story === "string") return null;

  const alias = story.content;
  const { wrapper, anchor, header, title, description } = classes();

  return (
    <div className={wrapper({ width: blok.width || undefined })}>
      <HeroCard className="h-full w-full">
        <NextLink href={story.full_slug} className={anchor()}>
          <HeroCardHeader className={header({ dark: blok.dark })}>
            <h4 className={title()}>{alias.title}</h4>
            <p className={description()}>
              {alias.description}
              <br />
              <span className="text-xs tracking-wide">
                Continua la lettura...
              </span>
            </p>
          </HeroCardHeader>
          {!!alias.image?.filename && (
            <HeroImage
              removeWrapper
              className="z-0 w-full h-full object-cover"
              src={alias.image.filename}
              loading="lazy"
            />
          )}
        </NextLink>
      </HeroCard>
    </div>
  );
}

const classes = tv({
  slots: {
    wrapper: "px-4 min-w-80",
    anchor:
      "min-h-64 hover:[&_h4]:underline-offset-3 hover:[&_h4]:decoration-background/75 overflow-hidden",
    header:
      "text-background absolute z-10 inset-3 md:inset-4 lg:inset-5 flex flex-col justify-end items-start w-auto space-y-2 before:absolute before:-left-1/3 before:-bottom-1/3 before:w-full before:min-h-64 before:min-w-80 before:h-full before:-z-20 before:mask-[url(/mask.png)] before:mask-size-[100%100%] before:backdrop-blur-2xl",
    title:
      "font-black text-2xl md:text-3xl lg:text-4xl decoration-2 decoration-background/0 transition-all duration-300 ease-in-out underline underline-offset-6",
    description: "text-sm md:text-base text-background-200 ",
  },
  variants: {
    width: {
      "1/1": {
        wrapper: "w-full",
      },
      "2/3": {
        wrapper: "sm:w-2/3",
      },
      "1/2": {
        wrapper: "sm:w-1/2",
      },
      "1/3": {
        wrapper: "sm:w-1/2 md:w-1/3",
      },
    },
    dark: {
      true: {
        header: "text-foreground decoration-foreground/0",
        anchor: "hover:[&_h4]:decoration-foreground/75",
      },
    },
  },
});
