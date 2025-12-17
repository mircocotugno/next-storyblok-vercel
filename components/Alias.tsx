import { ListsProps } from "@/pages";
import type { Alias } from "@/sbComponentType";
import { SbBlokData } from "@storyblok/react";
import { default as NextLink } from "next/link";
import {
  Card as HeroCard,
  CardHeader as HeroCardHeader,
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
  const { wrapper } = classes();

  return (
    <HeroCard className={wrapper()}>
      <NextLink href={story.full_slug}>
        <HeroCardHeader className="absolute z-10 top-1 flex-col items-start!">
          <h4 className="text-white font-medium text-large">{alias.title}</h4>
        </HeroCardHeader>
        {!!alias.image?.filename && (
          <HeroImage
            removeWrapper
            className="z-0 w-full h-full object-cover"
            src={alias.image.filename}
          />
        )}
      </NextLink>
    </HeroCard>
  );
}

const classes = tv({
  slots: {
    wrapper: "",
  },
});
