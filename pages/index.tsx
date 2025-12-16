import {
  getStoryblokApi,
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import { relations } from "./_app";

export default function Home({ story }: { story: ISbStoryData | null }) {
  const home = useStoryblokState(story, {
    resolveRelations: relations.join(","),
    preventClicks: true,
  });
  if (!home) return null;
  return <StoryblokComponent blok={home?.content} />;
}

export const getStaticProps = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStory("home", {
    version: "draft",
    resolve_relations: relations.join(","),
  });

  return {
    props: {
      story: response.data ? response.data.story : null,
    },
    revalidate: 3600,
  };
};
