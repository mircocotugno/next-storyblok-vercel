import type { Grid } from "@/sbComponentType";
import type { ListsProps } from "@/pages";
import { default as NextLink } from "next/link";
import {
  Card as HeroCard,
  CardHeader as HeroCardHeader,
  Image as HeroImage,
} from "@heroui/react";
import { tv } from "tailwind-variants";
import { SbBlokData } from "@storyblok/react";

interface GridComponent {
  blok: Grid & SbBlokData;
  lists: ListsProps;
  parent: string;
}

export default function Grid({ blok, lists, parent }: GridComponent) {
  const { section, container, grid, wrapper } = classes();

  const list = !!blok.list ? lists[blok.list] : [];
  if (!list?.length) return null;

  return (
    <section className={section({ hasHeader: parent === "page" })}>
      <div className={container()}>
        <div className={grid()}>
          {list?.map((item) => {
            const image = item.content.image;
            return (
              <HeroCard className={wrapper()} key={item.content._uid}>
                <NextLink href={item.full_slug}>
                  <HeroCardHeader className="absolute z-10 top-1 flex-col items-start!">
                    <h4 className="text-white font-medium text-large">
                      {item.content.title}
                    </h4>
                  </HeroCardHeader>
                  {!!image?.filename && (
                    <HeroImage
                      removeWrapper
                      className="z-0 w-full h-full object-cover"
                      src={image.filename}
                    />
                  )}
                </NextLink>
              </HeroCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const classes = tv({
  slots: {
    section: "px-4 sm:px-6 md:px-8",
    container: "py-6 md:py-9 lg:py-12 max-w-5xl lg:max-w-7xl",
    grid: "flex flex-wrap gap-4 md:gap-6 lg:gap-8",
    wrapper: "bg-neutral-300 flex-1 h-80",
  },
  variants: {
    hasHeader: {
      true: { section: "first:pt-12 first:md:pt-16 first:lg:pt-20" },
    },
  },
});
