import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { ComponentType } from "react";
import { StoryblokComponent } from "@storyblok/react";

import Page from "@/components/page";
import Post from "@/components/post";
import Project from "@/components/project";

// mappa nome-blocco → componente React
const components: Record<string, ComponentType<any>> = {
  page: Page,
  post: Post,
  project: Project,
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
