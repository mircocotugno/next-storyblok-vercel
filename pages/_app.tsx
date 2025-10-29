import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initStoryblok } from "@/lib/sbInit";

initStoryblok();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
