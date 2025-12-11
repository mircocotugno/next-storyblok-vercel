import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { fontSans, fontSerif } from "@/config/font";

export const relations = ["page.header", "page.footer"];

import Page from "@/components/page";
import Post from "@/components/post";
import Project from "@/components/project";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cover from "@/components/cover";
import Columns from "@/components/columns";
import Steps from "@/components/steps";
import Carousel from "@/components/carousel";
import Form from "@/components/form";
import Text from "@/components/text";
import Image from "@/components/image";
import Link from "@/components/link";
import Wrapper from "@/components/wrapper";
import Field from "@/components/field";

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
      <Component {...pageProps} />;
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  serif: fontSerif.style.fontFamily,
};
