import type { Project, Post } from "@/sbComponentType";
import {
  getStoryblokApi,
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";

import { relations } from "@/config/stories";

export type ListsProps = {
  projects?: ISbStoryData<Project>[] | null;
  posts?: ISbStoryData<Post>[] | null;
};

export interface LayoutComponent {
  story: ISbStoryData | null;
  lists: ListsProps;
}

export default function Home({ story, lists }: LayoutComponent) {
  const page = useStoryblokState(story, {
    resolveRelations: relations.join(","),
    preventClicks: true,
  });
  if (!page) return null;
  return <StoryblokComponent blok={page?.content} lists={lists} />;
}

export const getStaticProps = async () => {
  const storyblokApi = getStoryblokApi();
  const _story = await storyblokApi.getStory("home", {
    version: "draft",
    resolve_relations: relations.join(","),
  });

  const story = _story.data ? _story.data.story : null;

  const _projects = await storyblokApi.getStories({
    version: "draft",
    content_type: "project",
    sort_by: "created_at:desc",
  });

  const projects = _projects.data ? _projects.data.stories : null;

  const _posts = await storyblokApi.getStories({
    version: "draft",
    content_type: "post",
    sort_by: "created_at:desc",
  });

  const posts = _posts.data ? _posts.data.stories : null;

  return {
    props: {
      story,
      lists: {
        projects,
        posts,
      },
    },
    revalidate: 3600,
  };
};
