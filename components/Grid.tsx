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
import { containerSlot, sectionSlot } from "@/config/variants";

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

  const { section, container, grid, card, anchor, header, title, description } =
    classes();

  return (
    <section className={section({ hasHeader: parent === "page" })}>
      <div className={container()}>
        <header>
          {blok.heading && (
            <Markdown options={{ wrapper, overrides: Typography() }}>
              {blok.heading}
            </Markdown>
          )}
          {blok.filters && filters && (
            <div className="flex items-center justify-between gap-2 pt-4 pb-8">
              {!!activeFilters?.length && (
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
              )}
              <div className="text-sm font-medium min-w-16">Filtra per:</div>
              <div className="flex-1 flex items-center gap-2 overflow-x-auto whitespace-nowrap flex-row-reverse hide-scrollbar">
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
                    className="text-xs font-medium border-neutral-100 min-w-fit h-6 px-2 md:h-8 md:px-3"
                  >
                    {filter}
                  </HeroButton>
                ))}
              </div>
            </div>
          )}
        </header>
        <div className={grid()}>
          {items.map((item) => {
            const image = item.content.image;
            return (
              <HeroCard className={card()} key={item.full_slug}>
                <NextLink href={item.full_slug} className="group block h-full">
                  <div className={anchor()}>
                    <HeroCardHeader className={header()}>
                      <h4 className={title()}>{item.content.title}</h4>
                      <p className={description()}>
                        {item.content.description}
                      </p>
                    </HeroCardHeader>
                    {!!image?.filename && (
                      <HeroImage
                        removeWrapper
                        className="z-0 w-full h-full object-cover"
                        src={image.filename}
                        loading="lazy"
                      />
                    )}
                  </div>
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
    section: sectionSlot.base,
    container: containerSlot.base + containerSlot.spaced,
    grid: "grid grid-cols-12 gap-4 md:gap-6 lg:gap-8",
    card: "bg-neutral-300 col-span-12 md:col-span-6 xl:col-span-4 h-full",
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
    hasHeader: {
      true: { section: "first:pt-12 first:md:pt-16 first:lg:pt-20" },
    },
  },
  defaultVariants: {
    hasHeader: true,
  },
});

const wrapper = null;
