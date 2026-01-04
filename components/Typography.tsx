import { default as NextLink } from "next/link";
import { Image as HeroImage } from "@heroui/react";
import { tv } from "tailwind-variants";
import { levelVariants, typographySlots } from "@/config/variants";
import { createElement } from "react";

type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "ul" | "a";
type Levels = "high" | "low" | undefined;

interface TypographyComponents {
  level?: Levels;
}

interface ElementComponent {
  children: string;
  href?: string | null;
}

const defaultTypography = { level: undefined };

export const Typography = ({
  level,
}: TypographyComponents = defaultTypography) => {
  const tags: Tags[] = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "a"];
  const _classes = classes();
  return Object.fromEntries(
    tags.map((tag) => {
      const className = _classes[tag]({ level });
      const component = ({ children, href = null }: ElementComponent) =>
        createElement(tag, { className, href }, children);
      return [tag, component];
    })
  );
};

const classes = tv({
  slots: typographySlots,
  variants: {
    level: levelVariants,
  },
});
