import type { Carousel } from "@/sbComponentType";

import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

import { tv } from "tailwind-variants";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export interface CarouselComponent {
  blok: Carousel & SbBlokData;
}

export default function Carousel({ blok }: CarouselComponent) {
  const { section } = classes();

  const options: SwiperProps = {
    modules: [Pagination, Navigation],
    pagination: { clickable: true },
    navigation: {
      enabled: true,
    },
    loop: true,
  };

  return (
    <section id={blok.id} className={section()} {...storyblokEditable(blok)}>
      <Swiper {...options}>
        {blok.body?.map((child) => (
          <SwiperSlide key={child._uid}>
            <StoryblokComponent blok={child} parent={blok.component} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const classes = tv({ slots: { section: "" } });
