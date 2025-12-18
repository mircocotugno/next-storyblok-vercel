export const containerSlot =
  "-mx-2 md:-mx-3 lg:-mx-4 max-w-5xl lg:max-w-7xl flex flex-wrap items-center";

export const widthVariants = {
  "1/1": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full",
  },
  "2/3": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-2/3",
  },
  "1/2": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-1/2",
  },
  "1/3": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-1/2 lg:w-1/3",
  },
  "1/4": {
    wrapper: "px-2 md:px-3 lg:px-4 w-full md:w-1/2 lg:w-1/4",
  },
  auto: {
    wrapper: "px-2 md:px-3 lg:px-4 w-full sm:flex-1 sm:w-auto",
  },
} as const;
