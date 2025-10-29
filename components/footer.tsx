import type { Footer } from "@/sbComponentType";

export interface FooterComponent {
  blok: Footer;
}

export default function Footer({ blok }: FooterComponent) {
  return <div>{blok.component}</div>;
}
