import type { Link } from "@/sbComponentType";

export interface LinkComponent {
  blok: Link;
}

export default function Link({ blok }: LinkComponent) {
  return <div>{blok.component}</div>;
}
