import type { Grid } from "@/sbComponentType";
import close from "@/public/close.svg";
import type { ListsProps } from "@/pages";
import { useState } from "react";
import { default as NextLink } from "next/link";
import { default as NextImage } from "next/image";
import { SbBlokData } from "@storyblok/react";
import Markdown from "markdown-to-jsx";
import { Typography } from "./Typography";
import {
  Card as HeroCard,
  CardHeader as HeroCardHeader,
  Image as HeroImage,
  Button as HeroButton,
} from "@heroui/react";
import { tv } from "tailwind-variants";

interface GridComponent {
  blok: Grid & SbBlokData;
  lists: ListsProps;
  parent: string;
}

export default function Grid({ blok, lists, parent }: GridComponent) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const list = lists[blok.list] || [];
  if (!list?.length) return null;

  const filters: string[] = list
    .map(({ content }) => content.type as string)
    .filter((value, index, array) => !!value && array.indexOf(value) === index);

  const handleFilter = (value: string) => {
    const _activeFilters = [...activeFilters];
    if (_activeFilters.includes(value)) {
      _activeFilters.splice(_activeFilters.indexOf(value), 1);
    } else {
      _activeFilters.push(value);
    }
    setActiveFilters(_activeFilters);
  };

  const items = activeFilters.length
    ? list.filter(({ content }) =>
        typeof content.type === "string"
          ? activeFilters.includes(content.type)
          : false
      )
    : list;

  const { section, container, grid, card, anchor } = classes();

  return (
    <section className={section({ hasHeader: parent === "page" })}>
      <div className={container()}>
        <header className="">
          {blok.heading && (
            <Markdown options={{ wrapper, overrides: Typography() }}>
              {blok.heading}
            </Markdown>
          )}
          {filters && (
            <div className="flex items-center justify-between gap-2 py-2">
              <div className="flex-1 flex items-center gap-1">
                <span className="text-sm font-medium">Filtra per:</span>
                {filters?.map((filter, index) => (
                  <HeroButton
                    key={index}
                    onPress={() => handleFilter(filter)}
                    color={
                      activeFilters.includes(filter) ? "primary" : "default"
                    }
                    variant="bordered"
                    radius="full"
                    size="sm"
                    className="text-sm font-medium border-neutral-100"
                  >
                    {filter}
                  </HeroButton>
                ))}
              </div>
              <HeroButton
                onPress={() => setActiveFilters([])}
                variant="bordered"
                radius="full"
                isIconOnly
                size="sm"
                className="justify-self-end border-neutral-100"
              >
                <NextImage src={close} alt="close icon" />
              </HeroButton>
            </div>
          )}
        </header>
        <div className={grid()}>
          {items.map((item) => {
            const image = item.content.image;
            return (
              <HeroCard className={card()} key={item.full_slug}>
                <NextLink href={item.full_slug} className={anchor()}>
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
    grid: "grid grid-cols-12 gap-4 md:gap-6 lg:gap-8",
    card: "bg-neutral-300 col-span-12 md:col-span-6 lg:col-span-4 h-80",
    anchor: "h-full w-full",
  },
  variants: {
    hasHeader: {
      true: { section: "first:pt-12 first:md:pt-16 first:lg:pt-20" },
    },
  },
});

const wrapper = null;
