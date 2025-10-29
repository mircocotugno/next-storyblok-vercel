import type { Page } from "@/sbComponentType";

export default function Page({ blok }: { blok: Page }) {
  return <div>{blok.title}</div>;
}
