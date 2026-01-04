////// Slots //////
export const sectionSlot = {
  base: "flex items-stretch justify-center px-4 sm:px-6 md:px-8 ",
  background: "relative z-0 overflow-hidden",
};

export const containerSlot = {
  base: "flex-1 self-stretch max-w-5xl lg:max-w-7xl ",
  spaced: "py-6 md:py-9 lg:py-12 ",
  background: "relative z-0 ",
  columns:
    "flex flex-wrap items-center -mx-2 md:-mx-3 lg:-mx-4 py-2 md:py-3 lg:py-4 gap-y-2 md:gap-y-3 lg:gap-y-4 *:basis-2xs *:flex-none ",
};

export const wrapperSlot = {
  base: "w-full space-y-2 md:space-y-4 lg:space-y-6 ",
  level:
    "text-[2.4vw] xs:text-[2.2vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1vw] xl:text-[0.6vw] wrap-break-word font-sans",
  column: "px-2 md:px-3 lg:px-4 ",
};

export const typographySlots = {
  wrapper: wrapperSlot.base + wrapperSlot.level,
  p: "font-normal letter tracking-wide text-[1.4em] leading-none",
  h1: "font-black text-[6.6em] leading-[0.82]",
  h2: "font-extrabold text-[5.2em] leading-[0.82]",
  h3: "font-bold text-[4.8em] leading-[0.82]",
  h4: "font-semibold text-[3.2em] leading-[0.88]",
  h5: "font-medium text-[2.8em] leading-[0.88]",
  h6: "font-normal text-[1.4em] leading-[0.88]",
  ul: "list-disc list-outside my-4 leading-none",
  a: `
      font-medium
      transition-all duration-300 ease-in-out
      underline underline-offset-4 decoration-1 decoration-foreground/25
      hover:text-primary hover:underline-offset-2 hover:decoration-primary/75
    `,
};

////// Variants //////
export const widthVariants = {
  default: {
    wrapper: "w-full sm:flex-1 sm:w-auto ",
  },
  "1/1": {
    wrapper: "w-full ",
  },
  "2/3": {
    wrapper: "w-full md:w-2/3 ",
  },
  "1/2": {
    wrapper: "w-full md:w-1/2 ",
  },
  "1/3": {
    wrapper: "w-full md:w-1/3 min-w-72",
  },
  "1/4": {
    wrapper: "w-full md:w-1/4 min-w-36",
  },
} as const;

export const marginVariants = {
  slim: {
    container: "py-2 md:py-4 lg:py-6 gap-y-2 md:gap-y-4 lg:gap-y-6",
    wrapper: "space-y-2 ",
  },
  default: {
    container: "py-6 md:py-12 lg:py-18 gap-y-6 md:gap-y-12 lg:gap-y-18",
    wrapper: "space-y-3 ",
  },
  thick: {
    container: "py-9 md:py-18 lg:py-28 gap-y-9 md:gap-y-18 lg:gap-y-28",
    wrapper: "space-y-4 ",
  },
  screen: {
    container: "py-12 md:py-24 lg:py-36 gap-y-12 md:gap-y-24 lg:gap-y-36",
    wrapper: "space-y-6 ",
  },
} as const;

export const hasHeaderVariant = {
  true: {
    main: "-mt-12 md:-mt-16 lg:-mt-20 ",
    section: "first:pt-12 first:md:pt-16 first:lg:pt-20 ",
  },
} as const;

export const heightVariant = {
  true: {
    section: "item-end ",
  },
};

export const marginCompoundVariants = [
  {
    margin: "default",
    height: true,
    class: {
      section: "min-h-[75vh] xs:min-h-[66vh] md:min-h-[50vh] ",
    },
  },
  {
    margin: "slim",
    height: true,
    class: {
      section: "min-h-[50vh] xs:min-h-[33vh] md:min-h-[25vh] ",
    },
  },
  {
    margin: "thick",
    height: true,
    class: {
      section: "min-h-screen xs:min-h-[75vh] md:min-h-[66vh] ",
    },
  },
  {
    margin: "screen",
    height: true,
    class: {
      section: "min-h-screen ",
      container: "items-end",
    },
  },
] as const;

export const alignVariants = {
  top: {
    container: "items-start",
  },
  center: {
    container: "items-center",
  },
  bottom: {
    container: "items-end",
  },
  fill: {
    container: "items-stretch",
  },
} as const;

export const justifyVariants = {
  left: {
    container: "justify-start text-left ",
    wrapper: "text-left",
  },
  center: {
    container: "justify-center text-center ",
    wrapper: "text-center",
  },
  right: {
    container: "justify-end text-right ",
    wrapper: "text-right [&_ul]:text-right [&_li]:mr-6",
  },
  spaced: {
    container: "justify-between text-right ",
    wrapper: "text-justify",
  },
} as const;

export const themeVariants = {
  default: {
    section: "text-foreground bg-background ",
  },
  primary: {
    section: "text-primary-900 bg-primary-200 ",
  },
  secondary: {
    section: "text-primary-900 bg-secondary-200 ",
  },
} as const;

export const themeCompoundVariants = [
  {
    theme: "primary",
    dark: true,
    class: {
      section: "text-primary-50 bg-primary-800 ",
    },
  },
  {
    theme: "secondary",
    dark: true,
    class: {
      section: "text-secondary-50 bg-secondary-800 ",
    },
  },
] as const;

export const darkVariant = {
  true: {
    section: "text-background bg-foreground ",
  },
} as const;

// h1: "font-black text-6xl leading-none",
// h2: "font-extrabold text-5xl leading-none",
// h3: "font-extrabold text-4xl leading-none",
// h4: "font-bold text-3xl leading-none",
// h5: "font-semibold text-2xl leading-none",
// h6: "font-medium text-xl leading-none",

export const levelVariants = {
  high: {
    p: "font-medium text-[1.6em] leading-[1.125]",
    h1: "font-serif text-[8em] leading-[0.82]",
    h2: "font-serif text-[7.2em] leading-[0.82]",
    h3: "font-serif text-[6.8em] leading-[0.82]",
    h4: "font-normal text-[4.2em] leading-[0.82]",
    h5: "font-light text-[3.6em] leading-[0.82]",
    h6: "font-extralight text-[2.4em] leading-[0.82]",
    ul: "",
    a: "",
    wrapper: "space-y-3 md:space-y-6 lg:space-y-9",
  },
  low: {
    p: "font-light text-[1.2em]",
    h1: "font-extralight text-[4.6em] leading-[0.82]",
    h2: "font-light text-[4em] leading-[0.82]",
    h3: "font-normal text-[3.6em] leading-[0.82]",
    h4: "font-serif font-bold text-[3em] leading-[0.82]",
    h5: "font-serif font-extrabold text-[2.4em] leading-[0.82]",
    h6: "font-serif font-black text-[1.6em] leading-[0.82]",
    ul: "",
    a: "",
    wrapper: "space-y-1 md:space-y-1.5 lg:space-y-2",
  },
} as const;
