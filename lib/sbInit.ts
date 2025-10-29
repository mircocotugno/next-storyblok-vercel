import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { ComponentType } from "react";
import { StoryblokComponent } from "@storyblok/react";

// mappa nome-blocco → componente React
const components: Record<string, ComponentType<any>> = {
  // es: page: Page, hero: Hero, feature: Feature
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
