import type { Project } from "@/sbComponentType";

export default function Project({ blok }: { blok: Project }) {
  return <div>{blok.title}</div>;
}
