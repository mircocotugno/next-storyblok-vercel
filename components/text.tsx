import type { Text } from "@/sbComponentType";

export interface TextComponent {
  blok: Text;
}

export default function Text({ blok }: TextComponent) {
  return <div>{blok.component}</div>;
}
