import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { ComponentType } from "react";
import { StoryblokComponent } from "@storyblok/react";

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

// mappa nome-blocco → componente React
const components: Record<string, ComponentType<any>> = {
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
};

export function initStoryblok() {
  storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN,
    use: [apiPlugin],
    components,
    // region: "eu", // se la tua space è EU
  });
}

export { StoryblokComponent };
