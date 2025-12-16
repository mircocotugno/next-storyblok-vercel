import { default as NextLink } from "next/link";
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
  const { h1, h2, h3, h4, h5, h6, ul, a } = classes();
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
    h1: "font-black text-6xl/13 lg:text-7xl/16 xl:text-8xl/19",
    h2: "font-extrabold text-5xl/10 lg:text-6xl/13 xl:text-7xl/15",
    h3: "font-extrabold text-4xl/9 lg:text-5xl/11 xl:text-6xl/13",
    h4: "font-bold text-3xl/8 lg:text-4xl/9 xl:text-5xl/11",
    h5: "font-semibold text-2xl/6 lg:text-3xl/8 xl:text-4xl/9",
    h6: "font-medium text-xl/6 lg:text-2xl/7 xl:text-3xl/8",
    ul: "list-disc list-outside my-4",
    a: "font-medium transition-all duration-300 ease-in-out hover:text-primary underline underline-offset-4 hover:underline-offset-2 decoration-1 decoration-foreground/25 hover:decoration-primary/75",
  },
  variants: {
    small: {
      true: {
        h1: "text-4xl/9 lg:text-5xl/11 xl:text-6xl/13",
        h2: "text-3xl/8 lg:text-4xl/9 xl:text-5xl/11",
        h3: "text-2xl/7 lg:text-3xl/8 xl:text-4xl/9",
        h4: "text-xl/6 lg:text-2xl/7 xl:text-3xl/8",
        h5: "text-lg/4 lg:text-xl/5 xl:text-2xl/7",
        h6: "text-base/3 md:text-lg/7 lg:text-xl/8",
      },
    },
  },
});
