import type { Wrapper } from "@/sbComponentType";
import { storyblokEditable, SbBlokData } from "@storyblok/js";
import Markdown from "markdown-to-jsx";
import markdownToTxt from "markdown-to-txt";

import {
  Accordion as HeroAccordion,
  AccordionItem as HeroAccordionItem,
} from "@heroui/react";

export default function Accordion({ blok }: { blok: Wrapper }) {
  const items = blok.body?.filter((b) => b.component === "text");
  if (!items?.length) return null;

  return (
    <HeroAccordion {...storyblokEditable(blok as SbBlokData)}>
      {items.map((item) => (
        <HeroAccordionItem
          title={<Markdown>{item.headline || ""}</Markdown>}
          textValue={markdownToTxt(item.headline || "")}
          HeadingComponent="header"
          key={item._uid}
        >
          <Markdown>{item.content}</Markdown>
        </HeroAccordionItem>
      ))}
    </HeroAccordion>
  );
}
