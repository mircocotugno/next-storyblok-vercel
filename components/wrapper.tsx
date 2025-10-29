import type { Wrapper } from "@/sbComponentType";

export interface WrapperComponent {
  blok: Wrapper;
}

export default function Wrapper({ blok }: WrapperComponent) {
  return <div>{blok.component}</div>;
}
