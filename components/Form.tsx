import type { Form } from "@/sbComponentType";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

export interface FormComponent {
  blok: Form;
}

export default function Form({ blok }: FormComponent) {
  return <div>{blok.component}</div>;
}
