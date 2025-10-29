import type { Cover } from "@/sbComponentType";

export interface CoverComponent {
  blok: Cover;
}

export default function Cover({ blok }: CoverComponent) {
  return <div>{blok.component}</div>;
}
