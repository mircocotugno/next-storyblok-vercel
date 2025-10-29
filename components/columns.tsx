import type { Columns } from "@/sbComponentType";

export interface ColumnsComponent {
  blok: Columns;
}

export default function Columns({ blok }: ColumnsComponent) {
  return <div>{blok.component}</div>;
}
