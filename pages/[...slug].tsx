import { LayoutComponent } from "@/pages/index";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";

import { relations } from "@/config/stories";

export default function Slug({ story, lists }: LayoutComponent) {
  const page = useStoryblokState(story, {
    resolveRelations: relations.join(","),
    preventClicks: true,
  });

  if (!page) return null;
  return <StoryblokComponent blok={page?.content} lists={lists} />;
}

interface StaticProps {
  params: { slug: string[] };
}

export const getStaticProps = async ({ params }: StaticProps) => {
  const slug = params?.slug ? params.slug.join("/") : "home";
  const storyblokApi = getStoryblokApi();

  const _story = await storyblokApi.getStory(slug, {
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

export const getStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const stories = await storyblokApi.getStories({
    version: "draft",
  });

  const layoutComponents = ["page", "project", "post"];

  const paths = stories.data.stories
    .filter(
      ({ content: { component } }) =>
        !!component && layoutComponents.includes(component)
    )
    .map((story) => {
      const slug = story.full_slug === "home" ? [] : story.full_slug.split("/");
      return { params: { slug: slug } };
    });

  return { paths, fallback: "blocking" };
};
