import type { Carousel } from "@/sbComponentType";

import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

import { tv } from "tailwind-variants";
import { Swiper, SwiperSlide } from "swiper/react";

export interface CarouselComponent {
  blok: Carousel & SbBlokData;
}

export default function Carousel({ blok }: CarouselComponent) {
  const { carousel } = classes();
  return (
    <section id={blok.id} className={carousel()} {...storyblokEditable(blok)}>
      <Swiper>
        {blok.body?.map((child) => (
          <SwiperSlide key={child._uid}>
            <StoryblokComponent blok={child} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const classes = tv({ slots: { carousel: "" } });
