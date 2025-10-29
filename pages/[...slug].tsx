import { GetStaticPaths, GetStaticProps } from "next";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";

import { sbVersion, sbCacheVersion } from "@/lib/sbVersion";

export default function DynamicPage({ story }: any) {
  const live = useStoryblokState(story);
  console.log(live);
  return <StoryblokComponent blok={live.content} />;
}

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const version = sbVersion(preview);
  const slug = Array.isArray(params?.slug) ? params!.slug.join("/") : "home";
  const sb = getStoryblokApi();

  const { data } = await sb.get(`cdn/stories/${slug}`, {
    version,
    cv: sbCacheVersion(version),
  });

  return {
    props: { story: data.story },
    revalidate: version === "draft" ? 1 : 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const version =
    process.env.NEXT_PUBLIC_SB_LOCAL_DRAFT === "true" ? "draft" : "published";
  const sb = getStoryblokApi();

  const { data } = await sb.get("cdn/links", {
    per_page: 1000,
    version,
    cv: sbCacheVersion(version as "draft" | "published"),
  });

  type SbLink = { slug: string; is_folder: boolean };
  const links = Object.values(data.links) as SbLink[];

  const paths = links
    .filter((l) => !l.is_folder && l.slug !== "home")
    .map((l) => ({ params: { slug: l.slug.split("/") } }));

  return { paths, fallback: "blocking" };
};
