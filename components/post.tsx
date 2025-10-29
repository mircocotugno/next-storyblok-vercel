import type { Post } from "@/sbComponentType";

export interface PostComponent {
  blok: Post;
}

export default function Post({ blok }: PostComponent) {
  return <div>{blok.component}</div>;
}
