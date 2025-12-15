import {
  getStoryblokApi,
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import { relations } from "./_app";

export default function Slug({ story }: { story: ISbStoryData | null }) {
  const slug = useStoryblokState(story, {
    resolveRelations: relations.join(","),
    preventClicks: true,
  });
  return <StoryblokComponent blok={slug?.content} />;
}

interface StaticProps {
  params: { slug: string[] };
}

export const getStaticProps = async ({ params }: StaticProps) => {
  const slug = params?.slug ? params.slug.join("/") : "home";
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStory(slug, {
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

export const getStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStories({
    version: "draft",
  });

  const paths = response.data.stories.map((story: ISbStoryData) => {
    const slug = story.full_slug === "home" ? [] : story.full_slug.split("/");
    return { params: { slug } };
  });

  return { paths, fallback: "blocking" };
};
