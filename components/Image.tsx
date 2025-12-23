import type { Image } from "@/sbComponentType";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { Image as HeroImage } from "@heroui/react";
import { tv } from "tailwind-variants";
import { widthVariants } from "@/config/variants";

export interface ImageComponent {
  blok: Image & SbBlokData;
  parent?: string;
}

export default function Image({ blok }: ImageComponent) {
  const { wrapper, image, color, circle, text } = classes();
  const { width, size, crop } = blok;
  if (!blok.asset?.filename && !blok.color) return null;

  if (!blok.asset?.filename)
    return (
      <div className={color()} {...storyblokEditable(blok)}>
        <div className={circle()} style={{ backgroundColor: blok.color }} />
        {blok.caption && <p className={text()}>{blok.caption}</p>}
      </div>
    );

  const { filename, alt } = blok.asset;

  return (
    <HeroImage
      src={filename || ""}
      alt={alt || ""}
      classNames={{ wrapper: wrapper({ width, size, crop }), img: image({}) }}
      style={{ width: "100%" }}
      {...storyblokEditable(blok)}
    />
  );
}

const classes = tv({
  slots: {
    wrapper:
      "px-4 self-stretch min-h-24 md:min-h-32 lg:min-h-40 xl:min-h-48 overflow-hidden aspect-square",
    image: "h-full w-auto object-cover",
    color: "flex flex-col items-center gap-4 flex-none basis-24 text-center",
    circle:
      "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full aspect-square",
    text: "text-sm",
  },
  variants: {
    width: {
      ...widthVariants,
      "1/1": {
        ...widthVariants["1/1"],
        wrapper: widthVariants["1/1"].wrapper + " sm:aspect-5/3",
      },
      "2/3": {
        ...widthVariants["2/3"],
        wrapper: widthVariants["2/3"].wrapper + " aspect-5/3 md:aspect-3/2",
      },
      "1/2": {
        ...widthVariants["1/2"],
        wrapper: widthVariants["1/2"].wrapper + " aspect-5/3 md:aspect-square",
      },
      "1/3": {
        ...widthVariants["1/3"],
        wrapper:
          widthVariants["1/3"].wrapper +
          " aspect-5/3 md:aspect-square lg:aspect-2/3",
      },
      "1/4": {
        ...widthVariants["1/4"],
        wrapper:
          widthVariants["1/4"].wrapper +
          " aspect-5/3 md:aspect-square lg:aspect-1/4",
      },
      default: {
        ...widthVariants.default,
        wrapper: widthVariants.default.wrapper + "aspect-auto",
      },
    },
    size: {
      small: {
        wrapper: "flex-1 max-h-12 md:max-h-20 lg:max-h-28",
      },
      medium: {
        wrapper: "flex-1 max-h-36 md:max-h-42 lg:max-h-50",
      },
      large: {
        wrapper: "flex-1 max-h-48 md:max-h-56 lg:max-h-64",
      },
    },
    crop: {
      false: {
        wrapper: "h-auto! self-auto",
      },
    },
  },
  defaultVariants: {
    width: "default",
  },
});
