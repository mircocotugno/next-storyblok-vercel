import {
  StoryblokComponent,
  useStoryblokState,
  getStoryblokApi,
} from "@storyblok/react";
import { sbVersion, sbCacheVersion } from "@/lib/sbVersion";

export default function Home({ story }: any) {
  // abilita live-update in preview editor
  const live = useStoryblokState(story);
  console.log(live);
  return <div>{live.name}</div>;
  // return <StoryblokComponent blok={live.content} />;
}

export async function getStaticProps({ preview }: { preview?: boolean }) {
  const version = sbVersion(preview);
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories/home", {
    version,
    cv: sbCacheVersion(version), // evita cache CDN quando in draft
  });

  return {
    props: { story: data.story },
    // in locale puoi abbassare; in prod alza (300–900) o usa solo webhook
    revalidate: version === "draft" ? 1 : 60,
  };
}
