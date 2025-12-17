import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { fontSans, fontSerif } from "@/config/font";

export const relations = ["page.header", "page.footer"];

import Page from "@/components/Page";
import Post from "@/components/Post";
import Project from "@/components/Project";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cover from "@/components/Cover";
import Columns from "@/components/Columns";
import Steps from "@/components/Steps";
import Carousel from "@/components/Carousel";
import Grid from "@/components/Grid";
import Form from "@/components/Form";
import Text from "@/components/Text";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Wrapper from "@/components/Wrapper";
import Field from "@/components/Field";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || "",
  use: [apiPlugin],
  apiOptions: { region: "eu" },
  components: {
    page: Page,
    post: Post,
    project: Project,
    header: Header,
    footer: Footer,
    cover: Cover,
    columns: Columns,
    steps: Steps,
    carousel: Carousel,
    grid: Grid,
    form: Form,
    text: Text,
    image: Image,
    link: Link,
    wrapper: Wrapper,
    field: Field,
  },
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
