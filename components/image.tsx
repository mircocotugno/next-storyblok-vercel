import type { Image } from "@/sbComponentType";

export interface ImageComponent {
  blok: Image;
}

export default function Image({ blok }: ImageComponent) {
  return <div>{blok.component}</div>;
}
