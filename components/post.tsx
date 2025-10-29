import type { Post } from "@/sbComponentType";

export default function Post({ blok }: { blok: Post }) {
  return <div>{blok.title}</div>;
}
