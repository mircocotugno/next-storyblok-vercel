import type { Steps } from "@/sbComponentType";

export interface StepsComponent {
  blok: Steps;
}

export default function Steps({ blok }: StepsComponent) {
  return <div>{blok.component}</div>;
}
