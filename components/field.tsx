import type { Field } from "@/sbComponentType";

export interface FieldComponent {
  blok: Field;
}

export default function Field({ blok }: FieldComponent) {
  return <div>{blok.component}</div>;
}
