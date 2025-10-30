import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initStoryblok } from "@/lib/sbInit";
import { HeroUIProvider } from "@heroui/react";

initStoryblok();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <Component {...pageProps} />;
    </HeroUIProvider>
  );
}
