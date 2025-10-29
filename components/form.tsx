import type { Form } from "@/sbComponentType";

export interface FormComponent {
  blok: Form;
}

export default function Form({ blok }: FormComponent) {
  return <div>{blok.component}</div>;
}
