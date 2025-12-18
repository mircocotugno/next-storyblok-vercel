import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { fontSans, fontSerif } from "@/config/font";
import { components } from "@/config/stories";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || "",
  use: [apiPlugin],
  apiOptions: { region: "eu" },
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  serif: fontSerif.style.fontFamily,
};
