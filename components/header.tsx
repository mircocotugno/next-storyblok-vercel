import type { Header } from "@/sbComponentType";

export interface HeaderComponent {
  blok: Header;
}

export default function Header({ blok }: HeaderComponent) {
  return <div>{blok.component}</div>;
}
