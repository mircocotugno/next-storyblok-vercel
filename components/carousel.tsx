import type { Carousel } from "@/sbComponentType";

export interface CarouselComponent {
  blok: Carousel;
}

export default function Carousel({ blok }: CarouselComponent) {
  return <div>{blok.component}</div>;
}
