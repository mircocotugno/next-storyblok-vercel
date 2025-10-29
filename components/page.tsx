import type { Page } from "@/sbComponentType";

export interface PageComponent {
  blok: Page;
}

export default function Page({ blok }: PageComponent) {
  return <div>{blok.component}</div>;
}
