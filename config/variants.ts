////// Slots //////
export const sectionSlot = {
  base: "flex flex-col items-center px-4 sm:px-6 md:px-8 ",
  background: "relative z-0 ",
};

export const containerSlot = {
  base: "flex-1 self-stretch max-w-5xl lg:max-w-7xl ",
  spaced: "py-6 md:py-9 lg:py-12 ",
  background: "relative z-0 ",
  colums:
    "flex flex-wrap items-center -mx-2 md:-mx-3 lg:-mx-4 gap-y-2 md:gap-y-3 lg:gap-y-4 *:basis-2xs *:flex-none ",
};

////// Variants //////
export const widthVariants = {
  default: {
    wrapper: "px-2 md:px-3 lg:px-4 w-full sm:flex-1 sm:w-auto ",
  },
  "1/1": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full ",
  },
  "2/3": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-2/3 ",
  },
  "1/2": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-1/2 ",
  },
  "1/3": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-1/3 min-w-72",
  },
  "1/4": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-1/4 min-w-36",
  },
} as const;

export const marginVariants = {
  slim: {
    container: "py-2 md:py-4 lg:py-6 ",
    wrapper: "space-y-1 ",
  },
  default: {
    container: "py-6 md:py-12 lg:py-18 ",
    wrapper: "space-y-1.5 ",
  },
  thick: {
    container: "py-9 md:py-18 lg:py-27 ",
    wrapper: "space-y-2 ",
  },
  screen: {
    container: "py-12 md:py-24 lg:py-36 ",
    wrapper: "space-y-2.5 ",
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
