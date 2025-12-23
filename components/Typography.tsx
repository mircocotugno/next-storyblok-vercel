import { default as NextLink } from "next/link";
import { Image as HeroImage } from "@heroui/react";
import { tv } from "tailwind-variants";

const defaultTypography = {
  small: false,
};

interface TypographyComponents {
  small?: boolean;
}

export const Typography = ({
  small,
}: TypographyComponents = defaultTypography) => {
  const { h1, h2, h3, h4, h5, h6, p, ul, a } = classes();
  return {
    h1: {
      component: ({ children }: { children: string }) => (
        <h1 className={h1({ small: small })}>{children}</h1>
      ),
    },
    h2: {
      component: ({ children }: { children: string }) => (
        <h2 className={h2({ small: small })}>{children}</h2>
      ),
    },
    h3: {
      component: ({ children }: { children: string }) => (
        <h3 className={h3({ small: small })}>{children}</h3>
      ),
    },
    h4: {
      component: ({ children }: { children: string }) => (
        <h4 className={h4({ small: small })}>{children}</h4>
      ),
    },
    h5: {
      component: ({ children }: { children: string }) => (
        <h5 className={h5({ small: small })}>{children}</h5>
      ),
    },
    h6: {
      component: ({ children }: { children: string }) => (
        <h6 className={h6({ small: small })}>{children}</h6>
      ),
    },
    p: {
      component: ({ children }: { children: string }) => (
        <p className={p({ small: small })}>{children}</p>
      ),
    },

    ul: {
      component: ({ children }: { children: string }) => (
        <ul className={ul()}>{children}</ul>
      ),
    },
    a: {
      component: ({ href, children }: { href: string; children: string }) => (
        <NextLink className={a()} href={href || ""}>
          {children}
        </NextLink>
      ),
    },
  };
};

const classes = tv({
  slots: {
    h1: "font-black text-5xl lg:text-6xl xl:text-7xl leading-none",
    h2: "font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-none",
    h3: "font-extrabold text-3xl lg:text-4xl xl:text-5xl leading-none",
    h4: "font-bold text-2xl lg:text-3xl xl:text-4xl leading-none",
    h5: "font-semibold text-xl lg:text-2xl xl:text-3xl leading-none",
    h6: "font-medium text-lg lg:text-xl xl:text-2xl leading-none",
    p: "text-base lg:text-lg xl:text-xl leading-snug",
    ul: "list-disc list-outside my-4",
    a: "font-medium transition-all duration-300 ease-in-out hover:text-primary underline underline-offset-4 hover:underline-offset-2 decoration-1 decoration-foreground/25 hover:decoration-primary/75",
  },
  variants: {
    small: {
      true: {
        h1: "text-4xl lg:text-5xl xl:text-6xl leading-tight",
        h2: "text-3xl lg:text-4xl xl:text-5xl leading-tight",
        h3: "text-2xl lg:text-3xl xl:text-4xl leading-tight",
        h4: "text-xl lg:text-2xl xl:text-3xl leading-tight",
        h5: "text-lg lg:text-xl xl:text-2xl leading-tight",
        h6: "text-base md:text-lg lg:text-xl leading-tight",
        p: "text-sm lg:text-base xl:text-lg leading-snug",
      },
    },
  },
});
