import type { Project } from "@/sbComponentType";

export interface ProjectComponent {
  blok: Project;
}

export default function Project({ blok }: ProjectComponent) {
  return <div>{blok.component}</div>;
}
